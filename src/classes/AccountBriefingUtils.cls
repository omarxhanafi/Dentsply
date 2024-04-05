public with sharing class AccountBriefingUtils {

    /**
     * Retrieves the attention points for a specific account based on AttentionPoint__mdt custom metadata
     *
     * @param accountId The account Id
     * @return List<AccountBriefingController.AttentionPoint> - The account's Attention points
     */
    public static List<AccountBriefingController.AttentionPoint> getAttentionPoints(String accountId)
    {
        List<AccountBriefingController.AttentionPoint> attentionPoints = new List<AccountBriefingController.AttentionPoint>();

        // STEP 1: Custom Metadata Records
        List<AttentionPoint__mdt> points = [SELECT Title__c, ObjectType__c, FieldsToShow__c, RelationshipField__c,
                                                        SOQLQuery__c, Relevance__c, Icon__c, Label
                                            FROM AttentionPoint__mdt
                                            WHERE Active__c = TRUE];


        // Generate Fields Wrappers here
        for (AttentionPoint__mdt pointCustomMetadata : points) {

            AccountBriefingController.AttentionPoint attentionPoint = new AccountBriefingController.AttentionPoint();
            attentionPoint.customMetadataRecord = pointCustomMetadata;
            attentionPoint.objectType = pointCustomMetadata.ObjectType__c;

            // Generate Fields Wrappers
            List<String> fieldsToShow = (pointCustomMetadata.FieldsToShow__c).split(',');
            List<FieldWrapper> fields = new List<FieldWrapper>();
            for (Integer i = 0; i < fieldsToShow.size(); i++)
            {
                FieldWrapper field = new FieldWrapper();
                field.apiName = fieldsToShow.get(i);
                fields.add(field);
            }

            attentionPoint.fields = fields;

            attentionPoints.add(attentionPoint);
        }

        // STEP 3: Populate other infos of the fields wrappers
        for (AccountBriefingController.AttentionPoint attentionPoint : attentionPoints)
        {
            Map<String, Schema.SObjectField> fieldMap = Schema.getGlobalDescribe().get(attentionPoint.objectType).getDescribe().fields.getMap();

            for (FieldWrapper field : attentionPoint.fields) {
                Schema.SObjectField sObjectField;

                // Not a Lookup field
                if (!field.apiName.contains('.'))
                {
                    sObjectField = fieldMap.get(field.apiName);
                    if (sObjectField != null) {
                        field.label = sObjectField.getDescribe().getLabel();
                        field.type = String.valueOf(sObjectField.getDescribe().getType());
                    }
                }
                // Lookup
                else {
                    // Hard coded label. For now, we assume that any field %.Name = 'Owner' :
                    if (field.apiName.endsWith('.Name')) {
                        field.label = 'Owner';
                    }
                }
            }
        }

        System.debug('Objects To Fields are : ' + JSON.serializePretty(attentionPoints));

        List<AccountBriefingController.AttentionPoint> attentionPointsToDisplay = new List<AccountBriefingController.AttentionPoint>();

        // STEP 3 : For each Metadata record: Try to find an attention point. The number of iteration is limited here
        for (AccountBriefingController.AttentionPoint attentionPoint : attentionPoints) {

            try {
                List<SObject> records = new List<SObject>();
                String objectApiName = attentionPoint.objectType;
                List<FieldWrapper> fieldsToShow = attentionPoint.fields;

                String query = 'SELECT CurrencyIsoCode,' + attentionPoint.customMetadataRecord.FieldsToShow__c;
                query += ' FROM ' + objectApiName;
                query += ' WHERE ' + attentionPoint.customMetadataRecord.RelationshipField__c + ' = :accountId';
                query += ' AND ' + attentionPoint.customMetadataRecord.SOQLQuery__c;
                query += ' LIMIT 1';
                System.debug('Query is : ' + query);

                // Query
                records = Database.query(query);

                // Read result
                if (records.size() > 0) {

                    SObject record = records[0];

                    attentionPoint.id = record.Id;
                    attentionPoint.currencyIsoCode = (String) record.get('CurrencyIsoCode');
                    attentionPoint.title = attentionPoint.customMetadataRecord.Title__c;
                    attentionPoint.iconName = attentionPoint.customMetadataRecord.Icon__c;
                    attentionPoint.objectType = attentionPoint.customMetadataRecord.ObjectType__c;
                    attentionPoint.relevance = Integer.valueOf(attentionPoint.customMetadataRecord.Relevance__c);

                    for (Integer i = 0; i < fieldsToShow.size(); i++) {
                        //AccountBriefingUtils.FieldWrapper fieldWrapper = new AccountBriefingUtils.FieldWrapper();
                        String apiName = fieldsToShow[i].apiName;

                        if (!apiName.contains('.')) {
                            fieldsToShow[i].label = fieldsToShow[i].label;
                            fieldsToShow[i].value = String.valueOf(record.get(apiName));
                        }
                        else {
                            // TODO Label
                            fieldsToShow[i].label = fieldsToShow[i].label;
                            String firstHalf = apiName.split('\\.')[0];
                            String secondHalf = apiName.split('\\.')[1];
                            fieldsToShow[i].value = String.valueOf(record.getSObject(firstHalf).get(secondHalf));

                        }

                    }

                    attentionPointsToDisplay.add(attentionPoint);
                }
            }
            catch (Exception e) {
                Debuglog.addException(e,'Error in Attention Point Custom Metadata Record : ' + attentionPoint.customMetadataRecord.Label);
            }
        }


        return attentionPointsToDisplay;
    }

    /**
     * As of the current time, the method described here is the sole approach for dynamically retrieving the value of a custom label.
     * In essence, by inputting an API name, the Apex page will provide the corresponding value.
     * @author hadib@salesforce.com | 01/11/2023
     * @param label Custom label api name
     *
     * @return The custom label value
     */
    @AuraEnabled(Cacheable=true)
    public static String getLabel(String label)
    {
        String customLabelValue;
        try
        {
            PageReference pageRef = Page.DynamicLabel;
            pageRef.getParameters().put('label', label);
            customLabelValue = pageRef.getContent().toString();
        }
        catch (Exception e) {
            Debuglog.addException(e,'Attention Point Component Error. Unable to read custom label : ' + label);
            customLabelValue = 'Unable to read Custom Label';
        }
        return customLabelValue;
    }

    /**
     * A field wrapper is a field. contains various information about an object field.
     */
    public class FieldWrapper {
        @AuraEnabled
        public String apiName;
        @AuraEnabled
        public String label;
        @AuraEnabled
        public String value;
        @AuraEnabled
        public String type;
    }
}