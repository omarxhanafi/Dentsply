/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Quote cloning functionality.
 * @Test-Class      Test_QuoteCloneController
 *
 * @History
 * 11-02-2025   Omar     Created QuoteCloneController
 */
public with sharing class QuoteCloneController {

    @AuraEnabled(cacheable=true)
    public static Quote getQuoteDetails(Id quoteId) {
        return [SELECT Id, Name, QuoteNumber, Status FROM Quote WHERE Id = :quoteId LIMIT 1];
    }

    @AuraEnabled
    public static Quote cloneQuote(Id quoteId) {
        try {
            // Query original Quote with all writable fields
            String quoteQuery = 'SELECT ' + String.join(getWritableFields('Quote'), ', ') + ' FROM Quote WHERE Id = :quoteId';
            Quote originalQuote = (Quote) Database.query(quoteQuery);

            // Query related QuoteLineItems with all writable fields (exclude child records)
            String qliQuery = 'SELECT ' + String.join(getWritableFields('QuoteLineItem'), ', ') +
                    ' FROM QuoteLineItem WHERE QuoteId = :quoteId AND ParentQuoteLineItemId = null';
            List<QuoteLineItem> originalQLIs = (List<QuoteLineItem>) Database.query(qliQuery);

            // Prepare API payload
            Map<String, Object> requestBody = new Map<String, Object>{
                    'pricingPref' => 'System',
                    'configurationInput' => 'RunAndAllowErrors',
                    'graph' => new Map<String, Object>{
                            'graphId' => 'cloneQuoteGraph',
                            'records' => new List<Map<String, Object>>()
                    }
            };

            // Build reference maps
            Map<Id, String> qliRefIds = new Map<Id, String>();
            List<Map<String, Object>> records = (List<Map<String, Object>>) ((Map<String, Object>) requestBody.get('graph')).get('records');

            // Add parent Quote record
            records.add(createQuoteRecord(originalQuote));

            // Add QuoteLineItem records
            for(Integer i = 0; i < originalQLIs.size(); i++) {
                QuoteLineItem qli = originalQLIs[i];
                String refId = 'qli_' + i;
                qliRefIds.put(qli.Id, refId);
                records.add(createQuoteLineItemRecord(qli, refId));
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

    // Create Quote record structure
    private static Map<String, Object> createQuoteRecord(Quote q) {
        Map<String, Object> fields = new Map<String, Object>(q.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('OwnerId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
        fields.put('Status', 'Draft');
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

    // Create QuoteLineItem record structure
    private static Map<String, Object> createQuoteLineItemRecord(QuoteLineItem qli, String refId) {
        Map<String, Object> fields = new Map<String, Object>(qli.getPopulatedFieldsAsMap());
        fields.remove('Id');
        fields.remove('QuoteId');
        fields.remove('CreatedDate');
        fields.remove('LastModifiedDate');
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

    private static Quote handleAPIResponse(String responseBody) {
        // Deserialize the API response
        Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(responseBody);

        // Get the cloned quote ID
        Id clonedQuoteId = (Id) responseMap.get('quoteId');

        // Query the cloned quote to get the QuoteNumber and other details
        Quote clonedQuote = [
                SELECT Id, QuoteNumber, Name, Status, StartDate
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
}
