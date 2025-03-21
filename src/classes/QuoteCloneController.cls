/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Quote cloning functionality.
 * @Test-Class      Test_QuoteCloneController
 *
 * @History
 * 11-02-2025   Omar     Created QuoteCloneController
 */
public with sharing class QuoteCloneController {

    /**
     * getQuoteDetails Fetches the details of the specified Quote.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   ID of the Quote.
     *
     * @return Quote - Quote record.
     */
    @AuraEnabled(cacheable=true)
    public static Quote getQuoteDetails(Id quoteId) {
        return [SELECT Id, Name, QuoteNumber, Status FROM Quote WHERE Id = :quoteId LIMIT 1];
    }

    /**
     * cloneQuote Clones the specified Quote and places it via the RLM API.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   ID of the Quote to clone.
     *
     * @return Quote - Cloned Quote.
     */
    @AuraEnabled
    public static Quote cloneQuote(Id quoteId) {
        try {
            // Query original Quote with all writable fields
            String quoteQuery = 'SELECT ' + String.join(getWritableFields('Quote'), ', ') + ' FROM Quote WHERE Id = :quoteId';
            Quote originalQuote = (Quote) Database.query(quoteQuery);

            // Query parent QuoteLineItems with all writable fields (exclude child records)
            String oliQuery = 'SELECT ' + String.join(getWritableFields('QuoteLineItem'), ', ') +
                    ' FROM QuoteLineItem WHERE QuoteId = :quoteId AND ParentQuoteLineItemId = null';
            List<QuoteLineItem> originalOLIs = Database.query(oliQuery);

            // Prepare API payload
            Map<String, Object> requestBody = new Map<String, Object>{
                    'pricingPref' => 'Force',
                    'configurationInput' => 'RunAndBlockErrors',
                    'graph' => new Map<String, Object>{
                            'graphId' => 'cloneQuoteGraph',
                            'records' => new List<Map<String, Object>>()
                    }
            };

            // Build reference maps
            Map<Id, String> oliRefIds = new Map<Id, String>();
            List<Map<String, Object>> records = (List<Map<String, Object>>) ((Map<String, Object>) requestBody.get('graph')).get('records');

            // Add parent Quote record
            records.add(createQuoteRecord(originalQuote));

            // Add QuoteLineItem records
            for(Integer i = 0; i < originalOLIs.size(); i++) {
                QuoteLineItem oli = originalOLIs[i];
                String refId = 'oli_' + i;
                oliRefIds.put(oli.Id, refId);
                records.add(createQuoteLineItemRecord(oli, refId));
            }

            // Execute API call
            HttpRequest req = new HttpRequest();
            req.setEndpoint('callout:RLMIntegration/services/data/v63.0/commerce/quotes/actions/place');
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
            DebugLog.addError('Error cloning quote: ' + e.getMessage() + ' ' + e.getStackTraceString());
            System.debug('Error cloning quote: ' + e.getMessage() + ' ' + e.getStackTraceString()); // TODO REMOVE, REPLACE WITH AuraHandledException
//            throw new AuraHandledException('Error cloning quote: ' + e.getMessage() + ' ' + e.getStackTraceString());
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
     * createQuoteRecord Prepares the Quote record structure for cloning.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param o   Quote record.
     *
     * @return Map<String, Object> - Prepared Quote record structure.
     */
    private static Map<String, Object> createQuoteRecord(Quote o) {
        Map<String, Object> fields = new Map<String, Object>(o.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OwnerId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.put('Status', 'Draft');
        fields.put('ExpirationDate', null);
        fields.put('StartDate', Date.today());

        Map<String, Object> record = new Map<String, Object>{
                'attributes' => new Map<String, String>{
                        'type' => 'Quote',
                        'method' => 'POST'
                }
        };
        record.putAll(fields); // Add all fields to the record

        return new Map<String, Object>{
                'referenceId' => 'refQuote',
                'record' => record
        };
    }

    /**
     * createQuoteLineItemRecord Prepares the QuoteLineItem record structure for cloning.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param oli    QuoteLineItem record.
     * @param refId  refID for the QuoteLineItem.
     *
     * @return Map<String, Object> - Prepared QuoteLineItem record structure.
     */
    private static Map<String, Object> createQuoteLineItemRecord(QuoteLineItem oli, String refId) {
        Map<String, Object> fields = new Map<String, Object>(oli.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('QuoteId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.remove('UnitPrice');
        fields.remove('ListPrice');
        fields.put('QuoteId', '@{refQuote.id}');

        Map<String, Object> record = new Map<String, Object>{
                'attributes' => new Map<String, String>{
                        'type' => 'QuoteLineItem',
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
     * handleAPIResponse Processes the API response and returns the cloned Quote.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param responseBody   API response body.
     *
     * @return Quote - Cloned Quote record.
     */
    private static Quote handleAPIResponse(String responseBody) {
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
            // Get the cloned quote ID
            Id clonedQuoteId = (Id) responseMap.get('quoteId');

            // Query the cloned quote to get the QuoteNumber and other details
            Quote clonedQuote = [
                    SELECT Id, QuoteNumber, Name, Status, CreatedDate
                    FROM Quote
                    WHERE Id = :clonedQuoteId
                    LIMIT 1
            ];

            if(clonedQuote != null){
                DebugLog.addInfo('QuoteCloneController: Quote cloned successfully. Quote Id: ' + clonedQuote.Id + ', Quote Number: ' + clonedQuote.QuoteNumber);
                System.debug('QuoteCloneController: Quote cloned successfully. Quote Id: ' + clonedQuote.Id + ', Quote Number: ' + clonedQuote.QuoteNumber); // TODO REMOVE
            }

            // Return the cloned quote
            return clonedQuote;
        }

        return null;
    }

    /**
     * checkPricingChanges Checks for pricing changes between the Quote and the current Pricebook.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   ID of the Quote to check.
     *
     * @return List<Map<String, Object>> - List of pricing changes.
     */
    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> checkPricingChanges(Id quoteId) {
        List<Map<String, Object>> pricingChanges = new List<Map<String, Object>>();
        Map<Id, Map<String, Object>> productPriceChanges = new Map<Id, Map<String, Object>>();

        try {
            // Query the Quote and its currency
            Quote quote = [SELECT Id, AccountId, Pricebook2Id, CurrencyIsoCode FROM Quote WHERE Id = :quoteId LIMIT 1];
            String quoteCurrency = quote.CurrencyIsoCode;

            // Query related QuoteLineItems
            List<QuoteLineItem> quoteItems = [SELECT Id, Product2Id, Product2.Name, UnitPrice
            FROM QuoteLineItem WHERE QuoteId = :quoteId];

            // Check for changes in each QuoteLineItem
            for (QuoteLineItem item : quoteItems) {
                PricebookEntry latestPbe = [SELECT Id, UnitPrice
                FROM PricebookEntry
                WHERE Product2Id = :item.Product2Id
                AND Pricebook2Id = :quote.Pricebook2Id
                AND CurrencyIsoCode = :quoteCurrency
                LIMIT 1];

                // If the price has changed, add it to the map (grouped by product ID)
                if (latestPbe.UnitPrice != item.UnitPrice && !productPriceChanges.containsKey(item.Product2Id)) {
                    Map<String, Object> priceChange = new Map<String, Object>{
                            'productId' => item.Product2Id,
                            'productName' => item.Product2.Name,
                            'oldPrice' => item.UnitPrice,
                            'newPrice' => latestPbe.UnitPrice,
                            'currencyCode' => quoteCurrency
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
     * checkProductStructureChanges Checks for product structure changes between the Quote and the current product structure.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   ID of the Quote to check.
     *
     * @return List<Map<String, Object>> - List of product structure changes.
     */
    @AuraEnabled
    public static List<Map<String, Object>> checkProductStructureChanges(Id quoteId) {
        List<Map<String, Object>> structureChanges = new List<Map<String, Object>>();

        try {
            // Query all QuoteLineItems for the given Quote
            List<QuoteLineItem> quoteItems = [
                    SELECT Id, Product2Id, Product2.Name, ParentQuoteLineItemId
                    FROM QuoteLineItem
                    WHERE QuoteId = :quoteId
            ];

            // Group QuoteLineItems by parent (to identify bundles and their child products)
            Map<Id, List<QuoteLineItem>> parentToChildItems = new Map<Id, List<QuoteLineItem>>();
            for (QuoteLineItem item : quoteItems) {
                if (item.ParentQuoteLineItemId != null) {
                    if (!parentToChildItems.containsKey(item.ParentQuoteLineItemId)) {
                        parentToChildItems.put(item.ParentQuoteLineItemId, new List<QuoteLineItem>());
                    }
                    parentToChildItems.get(item.ParentQuoteLineItemId).add(item);
                }
            }

            // Check for structure changes in each bundle
            for (QuoteLineItem item : quoteItems) {
                // If the item has child products, it's a bundle
                if (parentToChildItems.containsKey(item.Id)) {
                    // Fetch the current product structure from the RLM API
                    Map<String, Object> apiResponse = fetchProductStructureFromRLM(item.Product2Id);

                    // Compare the API structure with the Quote Items
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
     * compareProductStructure Compares the product structure from the API with the Quote Items.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param apiResponse   Product structure from the API.
     * @param quoteItems    Quote Items to compare against.
     * @param bundleName    The name of the bundle product.
     *
     * @return List<Map<String, Object>> - List of product structure changes.
     */
    private static List<Map<String, Object>> compareProductStructure(Map<String, Object> apiResponse, List<QuoteLineItem> quoteItems, String bundleName) {
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

        // Extract child products from the Quote Items
        Map<Id, String> quoteChildProducts = new Map<Id, String>();
        if (quoteItems != null) {
            for (QuoteLineItem item : quoteItems) {
                quoteChildProducts.put(item.Product2Id, item.Product2.Name);
            }
        }

        // Check for added products or bundles
        for (Id apiProductId : apiChildProducts.keySet()) {
            if (!quoteChildProducts.containsKey(apiProductId)) {
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
        for (Id quoteProductId : quoteChildProducts.keySet()) {
            if (!apiChildProducts.containsKey(quoteProductId)) {
                changes.add(new Map<String, Object>{
                        'name' => quoteChildProducts.get(quoteProductId),
                        'bundleName' => bundleName,
                        'action' => 'removed'
                });
            }
        }

        return changes;
    }

}
