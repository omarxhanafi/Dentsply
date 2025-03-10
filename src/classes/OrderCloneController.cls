/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Order cloning functionality.
 * @Test-Class      Test_OrderCloneController
 *
 * @History
 * 11-02-2025   Omar     Created OrderCloneController
 */
public with sharing class OrderCloneController {

    @AuraEnabled(cacheable=true)
    public static Order getOrderDetails(Id orderId) {
        return [SELECT Id, OrderNumber, Status FROM Order WHERE Id = :orderId LIMIT 1];
    }

    @AuraEnabled
    public static Order cloneOrder(Id orderId) {
        try {
            // Query original Order with all writable fields
            String orderQuery = 'SELECT ' + String.join(getWritableFields('Order'), ', ') + ' FROM Order WHERE Id = :orderId';
            Order originalOrder = (Order) Database.query(orderQuery);

            // Query parent OrderItems with all writable fields (exclude child records)
            String oliQuery = 'SELECT ' + String.join(getWritableFields('OrderItem'), ', ') +
                    ' FROM OrderItem WHERE OrderId = :orderId AND ParentOrderItemId = null';
            List<OrderItem> originalOLIs = (List<OrderItem>) Database.query(oliQuery);

            // Prepare API payload
            Map<String, Object> requestBody = new Map<String, Object>{
                    'pricingPref' => 'System',
                    'configurationInput' => 'RunAndAllowErrors',
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

    // Helper to get writable fields
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

    // Create Order record structure
    private static Map<String, Object> createOrderRecord(Order o) {
        Map<String, Object> fields = new Map<String, Object>(o.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OwnerId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.put('Status', 'Created');
        fields.put('EffectiveDate', Date.today());

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

    // Create OrderItem record structure
    private static Map<String, Object> createOrderItemRecord(OrderItem oli, String refId) {
        Map<String, Object> fields = new Map<String, Object>(oli.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OrderId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
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

    private static Order handleAPIResponse(String responseBody) {
        // Deserialize the API response
        Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(responseBody);

        // Get the cloned order ID
        Id clonedOrderId = (Id) responseMap.get('orderId');

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

}
