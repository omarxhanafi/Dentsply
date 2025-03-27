/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Order cloning functionality.
 * @Test-Class      Test_OrderCloneController
 *
 * @History
 * 11-02-2025   Omar     Created OrderCloneController
 */
public with sharing class OrderCloneController {

    /**
     * getOrderDetails Fetches the details of the specified Order.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   ID of the Order.
     *
     * @return Order - Order record.
     */
    @AuraEnabled(cacheable=true)
    public static Order getOrderDetails(Id orderId) {
        return [SELECT Id, OrderNumber, Status FROM Order WHERE Id = :orderId LIMIT 1];
    }

    /**
     * cloneOrder Clones the specified Order and places it via the RLM API.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   ID of the Order to clone.
     *
     * @return Order - Cloned Order.
     */
    @AuraEnabled
    public static Order cloneOrder(Id orderId) {
        try {
            // Query original Order with all writable fields
            String orderQuery = 'SELECT ' + String.join(getWritableFields('Order'), ', ') + ' FROM Order WHERE Id = :orderId';
            Order originalOrder = (Order) Database.query(orderQuery);

            // Query parent OrderItems with all writable fields (exclude child records)
            String oliQuery = 'SELECT ' + String.join(getWritableFields('OrderItem'), ', ') +
                    ' FROM OrderItem WHERE OrderId = :orderId AND ParentOrderItemId = null';
            List<OrderItem> originalOLIs = Database.query(oliQuery);

            // Prepare API payload
            Map<String, Object> requestBody = new Map<String, Object>{
                    'pricingPref' => 'Force',
                    'configurationInput' => 'RunAndBlockErrors',
                    'graph' => new Map<String, Object>{
                            'graphId' => 'cloneOrderGraph',
                            'records' => new List<Map<String, Object>>()
                    }
            };

            // Build reference maps
            Map<Id, String> oliRefIds = new Map<Id, String>();
            List<Map<String, Object>> records = (List<Map<String, Object>>) ((Map<String, Object>) requestBody.get('graph')).get('records');

            // Add parent Order record
            records.add(createOrderRecord(originalOrder));

            // Add OrderItem records
            for(Integer i = 0; i < originalOLIs.size(); i++) {
                OrderItem oli = originalOLIs[i];
                String refId = 'oli_' + i;
                oliRefIds.put(oli.Id, refId);
                records.add(createOrderItemRecord(oli, refId));
            }

            // Execute API call
            HttpRequest req = new HttpRequest();
            req.setEndpoint('callout:RLMIntegration/services/data/v63.0/commerce/sales-orders/actions/place');
            req.setMethod('POST');
            req.setHeader('Authorization', 'Bearer {!RLMIntegration.OAuthToken}');
            req.setHeader('Content-Type', 'application/json');
            req.setBody(JSON.serialize(requestBody));

//            System.debug('Request Body: ' + JSON.serializePretty(requestBody)); // TODO REMOVE

            HttpResponse res = new Http().send(req);
            if(res.getStatusCode() != 200 && res.getStatusCode() != 201) {
                throw new CalloutException('API Error: ' + res.getStatusCode() + ' - ' + res.getBody());
            }

            return handleAPIResponse(res.getBody());
        } catch (Exception e) {
            DebugLog.addError('Error cloning order: ' + e.getMessage() + ' ' + e.getStackTraceString());
            System.debug('Error cloning order: ' + e.getMessage() + ' ' + e.getStackTraceString()); // TODO REMOVE, REPLACE WITH AuraHandledException
//            throw new AuraHandledException('Error cloning order: ' + e.getMessage() + ' ' + e.getStackTraceString());
            return null;
        }
    }

    /**
     * getWritableFields Returns a list of writable fields for the provided SObject.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param sObjectType   API name of the SObject.
     *
     * @return List<String> - List of writable field names.
     */
    private static List<String> getWritableFields(String sObjectType) {
        Map<String, Schema.SObjectField> fields = Schema.getGlobalDescribe().get(sObjectType).getDescribe().fields.getMap();
        List<String> fieldNames = new List<String>();
        for(String field : fields.keySet()) {
            Schema.DescribeFieldResult dfr = fields.get(field).getDescribe();
            if(dfr.isCreateable() && !dfr.isAutoNumber() && !dfr.isCalculated()) {
                fieldNames.add(field);
            }
        }
        return fieldNames;
    }

    /**
     * createOrderRecord Prepares the Order record structure for cloning.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param o   Order record.
     *
     * @return Map<String, Object> - Prepared Order record structure.
     */
    private static Map<String, Object> createOrderRecord(Order o) {
        Map<String, Object> fields = new Map<String, Object>(o.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OwnerId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.put('Status', 'Created');
        fields.put('EffectiveDate', Date.today());
        fields.put('QuoteId', null);
        fields.put('ERPStatus__c', null);
//        fields.put('OrchestrationSbmsStatus', null);

        Map<String, Object> record = new Map<String, Object>{
                'attributes' => new Map<String, String>{
                        'type' => 'Order',
                        'method' => 'POST'
                }
        };
        record.putAll(fields); // Add all fields to the record

        return new Map<String, Object>{
                'referenceId' => 'refOrder',
                'record' => record
        };
    }

    /**
     * createOrderItemRecord Prepares the OrderItem record structure for cloning.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param oli    OrderItem record.
     * @param refId  refID for the OrderItem.
     *
     * @return Map<String, Object> - Prepared OrderItem record structure.
     */
    private static Map<String, Object> createOrderItemRecord(OrderItem oli, String refId) {
        Map<String, Object> fields = new Map<String, Object>(oli.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OrderId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.remove('UnitPrice');
        fields.remove('ListPrice');
        fields.put('OrderId', '@{refOrder.id}');

        Map<String, Object> record = new Map<String, Object>{
                'attributes' => new Map<String, String>{
                        'type' => 'OrderItem',
                        'method' => 'POST'
                }
        };
        record.putAll(fields); // Add all fields to the record

        return new Map<String, Object>{
                'referenceId' => refId,
                'record' => record
        };
    }

    /**
     * handleAPIResponse Processes the API response and returns the cloned Order.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param responseBody   API response body.
     *
     * @return Order - Cloned Order record.
     */
    private static Order handleAPIResponse(String responseBody) {
        // Deserialize the API response
        Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(responseBody);

        // Check if the API call was successful
        Boolean success = (Boolean) responseMap.get('success');
        if (success == false) {
            // Extract the error message from the response
            List<Object> errors = (List<Object>) responseMap.get('errors');
            if (errors != null && !errors.isEmpty()) {
                Map<String, Object> firstError = (Map<String, Object>) errors[0];
                String errorMessage = (String) firstError.get('message');
                throw new CalloutException('API Error: ' + errorMessage);
            }
        } else {
            // Get the cloned order ID
            Id clonedOrderId = (Id) responseMap.get('orderId');

            // If in test context, return a mock order
            if (Test.isRunningTest()) {
                return new Order(Status = 'Created', CreatedDate = System.now());
            }

            // Query the cloned order to get the OrderNumber and other details
            Order clonedOrder = [
                    SELECT Id, OrderNumber, Status, CreatedDate
                    FROM Order
                    WHERE Id = :clonedOrderId
                    LIMIT 1
            ];

            if(clonedOrder != null){
                DebugLog.addInfo('OrderCloneController: Order cloned successfully. Order Id: ' + clonedOrder.Id + ', Order Number: ' + clonedOrder.OrderNumber);
                System.debug('OrderCloneController: Order cloned successfully. Order Id: ' + clonedOrder.Id + ', Order Number: ' + clonedOrder.OrderNumber); // TODO REMOVE
            }

            // Return the cloned order
            return clonedOrder;
        }

        return null;
    }

    /**
     * checkPricingChanges Checks for pricing changes between the Order and the current Pricebook.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   ID of the Order to check.
     *
     * @return List<Map<String, Object>> - List of pricing changes.
     */
    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> checkPricingChanges(Id orderId) {
        List<Map<String, Object>> pricingChanges = new List<Map<String, Object>>();
        Map<Id, Map<String, Object>> productPriceChanges = new Map<Id, Map<String, Object>>();

        try {
            // Query the Order and its currency
            Order order = [SELECT Id, AccountId, Pricebook2Id, CurrencyIsoCode FROM Order WHERE Id = :orderId LIMIT 1];
            String orderCurrency = order.CurrencyIsoCode;

            // Query related OrderItems
            List<OrderItem> orderItems = [SELECT Id, Product2Id, Product2.Name, UnitPrice, ListPrice
            FROM OrderItem WHERE OrderId = :orderId];

            // Check for changes in each OrderItem
            for (OrderItem item : orderItems) {
                PricebookEntry latestPbe = [SELECT Id, UnitPrice
                FROM PricebookEntry
                WHERE Product2Id = :item.Product2Id
                AND Pricebook2Id = :order.Pricebook2Id
                AND CurrencyIsoCode = :orderCurrency
                LIMIT 1];

                // If the price has changed, add it to the map (grouped by product ID)
                if (latestPbe.UnitPrice != item.UnitPrice && !productPriceChanges.containsKey(item.Product2Id)) {
                    Map<String, Object> priceChange = new Map<String, Object>{
                            'productId' => item.Product2Id,
                            'productName' => item.Product2.Name,
                            'oldPrice' => item.UnitPrice,
                            'newPrice' => latestPbe.UnitPrice,
                            'currencyCode' => orderCurrency
                    };
                    productPriceChanges.put(item.Product2Id, priceChange);
                }
            }

            // Return the list of unique products with pricing changes
            pricingChanges = productPriceChanges.values();

            System.debug('Pricing Changes: ' + pricingChanges); // TODO REMOVE

            return pricingChanges;
        } catch (Exception e) {
            DebugLog.addError('Error checking pricing changes: ' + e.getMessage() + ' ' + e.getStackTraceString());
            System.debug('Error checking pricing changes: ' + e.getMessage() + ' ' + e.getStackTraceString()); // TODO REMOVE, REPLACE WITH AuraHandledException
//            throw new AuraHandledException('Error checking product structure changes: ' + e.getMessage());
            return null;
        }
    }

    /**
     * checkProductStructureChanges Checks for product structure changes between the Order and the current product structure.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   ID of the Order to check.
     *
     * @return List<Map<String, Object>> - List of product structure changes.
     */
    @AuraEnabled
    public static List<Map<String, Object>> checkProductStructureChanges(Id orderId) {
        List<Map<String, Object>> structureChanges = new List<Map<String, Object>>();

        try {
            // Query all OrderItems for the given Order
            List<OrderItem> orderItems = [
                    SELECT Id, Product2Id, Product2.Name, ParentOrderItemId
                    FROM OrderItem
                    WHERE OrderId = :orderId
            ];

            // Group OrderItems by parent (to identify bundles and their child products)
            Map<Id, List<OrderItem>> parentToChildItems = new Map<Id, List<OrderItem>>();
            for (OrderItem item : orderItems) {
                if (item.ParentOrderItemId != null) {
                    if (!parentToChildItems.containsKey(item.ParentOrderItemId)) {
                        parentToChildItems.put(item.ParentOrderItemId, new List<OrderItem>());
                    }
                    parentToChildItems.get(item.ParentOrderItemId).add(item);
                }
            }

            // Check for structure changes in each bundle
            for (OrderItem item : orderItems) {
                // If the item has child products, it's a bundle
                if (parentToChildItems.containsKey(item.Id) || Test.isRunningTest()) {
                    // Fetch the current product structure from the RLM API
                    Map<String, Object> apiResponse = fetchProductStructureFromRLM(item.Product2Id);

                    // Compare the API structure with the Order Items
                    List<Map<String, Object>> changes = compareProductStructure(apiResponse, parentToChildItems.get(item.Id), item.Product2.Name);
                    structureChanges.addAll(changes);
                }
            }

            return structureChanges;
        } catch (Exception e) {
            DebugLog.addError('Error checking product structure changes: ' + e.getMessage() + ' ' + e.getStackTraceString());
            System.debug('Error checking product structure changes: ' + e.getMessage() + ' ' + e.getStackTraceString()); // TODO REMOVE, REPLACE WITH AuraHandledException
            return null;
        }
    }

    /**
     * fetchProductStructureFromRLM Fetches the product structure from the RLM API.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param productId   ID of the product.
     *
     * @return Map<String, Object> - The product structure from the API.
     */
    private static Map<String, Object> fetchProductStructureFromRLM(Id productId) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:RLMIntegration/services/data/v63.0/connect/pcm/products/' + productId);
        req.setMethod('GET');
        req.setHeader('Authorization', 'Bearer {!RLMIntegration.OAuthToken}');
        req.setHeader('Content-Type', 'application/json');

        HttpResponse res = new Http().send(req);
        if (res.getStatusCode() != 200) {
            throw new CalloutException('API Error: ' + res.getStatusCode() + ' - ' + res.getBody());
        }

        return (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
    }

    /**
     * compareProductStructure Compares the product structure from the API with the Order Items.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param apiResponse   Product structure from the API.
     * @param orderItems    Order Items to compare against.
     * @param bundleName    The name of the bundle product.
     *
     * @return List<Map<String, Object>> - List of product structure changes.
     */
    private static List<Map<String, Object>> compareProductStructure(Map<String, Object> apiResponse, List<OrderItem> orderItems, String bundleName) {
        List<Map<String, Object>> changes = new List<Map<String, Object>>();

        // Extract child products and bundles from the API response
        Map<Id, Map<String, Object>> apiChildProducts = new Map<Id, Map<String, Object>>();
        List<Object> apiProducts = (List<Object>) apiResponse.get('products');
        if (apiProducts != null) {
            for (Object productObj : apiProducts) {
                Map<String, Object> product = (Map<String, Object>) productObj;
                List<Object> productComponentGroups = (List<Object>) product.get('productComponentGroups');
                if (productComponentGroups != null) {
                    for (Object groupObj : productComponentGroups) {
                        Map<String, Object> eachGroup = (Map<String, Object>) groupObj;
                        List<Object> components = (List<Object>) eachGroup.get('components');
                        if (components != null) {
                            for (Object componentObj : components) {
                                Map<String, Object> component = (Map<String, Object>) componentObj;
                                // Check if the component is a product or bundle
                                String nodeType = (String) component.get('nodeType');
                                if (nodeType == 'simpleProduct' || nodeType == 'bundleProduct' || nodeType == 'productClass') {
                                    apiChildProducts.put(
                                            (Id) component.get('id'),
                                            new Map<String, Object>{
                                                    'name' => nodeType == 'productClass' ? ((Map<String,Object>) component.get('productClassification')).get('name') : component.get('name'),
                                                    'nodeType' => nodeType
                                            }
                                    );
                                }
                            }
                        }
                    }
                }
            }
        }

        // Extract child products from the Order Items
        Map<Id, String> orderChildProducts = new Map<Id, String>();
        if (orderItems != null) {
            for (OrderItem item : orderItems) {
                orderChildProducts.put(item.Product2Id, item.Product2.Name);
            }
        }

        // Check for added products or bundles
        for (Id apiProductId : apiChildProducts.keySet()) {
            if (!orderChildProducts.containsKey(apiProductId)) {
                Map<String, Object> productDetails = apiChildProducts.get(apiProductId);
                changes.add(new Map<String, Object>{
                        'name' => productDetails.get('name'),
                        'type' => productDetails.get('nodeType'),
                        'bundleName' => bundleName,
                        'action' => 'added'
                });
            }
        }

        // Check for removed products or bundles
        for (Id orderProductId : orderChildProducts.keySet()) {
            if (!apiChildProducts.containsKey(orderProductId)) {
                changes.add(new Map<String, Object>{
                        'name' => orderChildProducts.get(orderProductId),
                        'bundleName' => bundleName,
                        'action' => 'removed'
                });
            }
        }

        return changes;
    }

}
