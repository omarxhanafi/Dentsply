/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Dynamic Mapping Management Class
Test class      CreateCampaignFromCventControllerTest

History
11-11-2022      Create new class
29-01-2024      Enable the dynamic mapping system to deactivate a mapping if detected as broken
----------------------------------------------------------------------------------------*/
public without sharing class MappingManagement {

    public static final String MAPPING_CUSTOM_METADATA = 'DynamicMapping';

    /**
     * Generic method that does two operations :
     * 1 -  When you provide two SObject types - the source and the target objects - it will return all the current valid mappings stored.
     *      By Valid, we mean that the mapping is correct and if we put the source field value in the target field mapped to, it will work.
     * 2 -  If it detects newly created mappings by the administrators. It will not return them, but instead, it will try to validate them.
     *      If a mapping is found incorrect, he will ticked as invalid, and will never be processed another time unless an Administrator corrects it
     *      Validations result will be stored in the custom metadata isValid__c field and logs Debug Log object
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param sourceObject  The source Object Api Name
     * @param targetObject  The target Object Api Name
     * @param validateNewMappings  Validate or not the new mappings
     *
     * @return List<DynamicMapping__mdt> - List of 'valid' mapping that will allow you to create a target object record
     */
    public static List<DynamicMapping__mdt> getMapping(String sourceObject, String targetObject, Boolean validateNewMappings)
    {
        List<DynamicMapping__mdt> validMappings = new List<DynamicMapping__mdt>();

        List<DynamicMapping__mdt> newMappingsDetected = new List<DynamicMapping__mdt>();

        // Step 1 - We retrieve the mappings from DynamicMapping__mdt.
        for (DynamicMapping__mdt mapping :
        [   SELECT  SourceObjectApiName__c,SourceFieldApiName__c,TargetFieldApiName__c,limitStringLength__c,isNew__c,isValid__c,
                MasterLabel,DeveloperName,QualifiedApiName

        FROM    DynamicMapping__mdt
        WHERE   SourceObjectApiName__c= :sourceObject
        AND
        TargetObjectApiName__c= :targetObject])
        {
            if(mapping.isValid__c)
            {
                // If the mapping is known as valid. It means we already validated the mapping in a previous execution
                // We take it automatically without validating it, as we know it will work.
                validMappings.add(mapping);
            }
            else if(mapping.isNew__c)
            {
                // If the mapping has just been created by an Admin,
                // We try to validate it and update the custom metadata record with the result.
                newMappingsDetected.add(mapping);
            }
        }

        // Step 2 - Only when we find new mapping records. We try to validate them and update the custom mdt record with apex.
        //          The new mapping either validated or not, won't be taken into consideration this time but only after they got validation
        //          Through an asynchronous job.
        if(newMappingsDetected.size() > 0 && validateNewMappings)
        {
            NotificationEventPublisher.publishNotification(NotificationEventPublisher.CVENT_CONTEXT,NotificationEventPublisher.CVENT_TYPE,'Validations','This is a notification message to inform that validations has Started..');
            validateMapping(sourceObject,targetObject,newMappingsDetected);
        }

        // Step 3 - We return only valid mappings
        return validMappings;
    }

    /**
     * The method gets a list of mapping that needs to be validated, it runs few validation and detect if the mapping is correct or not.
     * The method then trigger a custom metadata deployment to store the result in isValid__c field
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param sourceObject  Source Object Api Name
     * @param targetObject  Target Object Api Name
     * @param mappings      List of the new mapping records to validate
     */
    public static void validateMapping(String sourceObject, String targetObject, List<DynamicMapping__mdt> mappings)
    {
        List<Metadata.CustomMetadata> customMetadataObjectsToUpdate = new List<Metadata.CustomMetadata>();

        Map<String, Schema.SObjectType> globalDescribe = Schema.getGlobalDescribe();
        Map<String, Schema.SObjectField> sourceObjectFieldsMap = globalDescribe.get(sourceObject).getDescribe().fields.getMap();
        Map<String, Schema.SObjectField> targetObjectFieldsMap = globalDescribe.get(targetObject).getDescribe().fields.getMap();

        // We run custom validation For each new mapping
        for (DynamicMapping__mdt mapping : mappings)
        {
            ValidityWrapper validityWrapper;
            Schema.DescribeFieldResult sourceField;
            Schema.DescribeFieldResult targetField;
            String developerName = mapping.QualifiedApiName;

            // Make sure we have valid fields api names
            if(sourceObjectFieldsMap.containsKey(mapping.SourceFieldApiName__c) && targetObjectFieldsMap.containsKey(mapping.TargetFieldApiName__c))
            {
                // Correct Api Names
                sourceField     = sourceObjectFieldsMap.get(mapping.SourceFieldApiName__c).getDescribe();
                targetField     = targetObjectFieldsMap.get(mapping.TargetFieldApiName__c).getDescribe();
                validityWrapper = customValidate(sourceField, targetField, mapping);

                customMetadataObjectsToUpdate.add(prepareCustomMetadataForUpdate(MAPPING_CUSTOM_METADATA,developerName,validityWrapper));
            }
            else
            {
                // Incorrect Api Names
                validityWrapper = new ValidityWrapper(false,'Incorrect Fields Api Names');
                customMetadataObjectsToUpdate.add(prepareCustomMetadataForUpdate(MAPPING_CUSTOM_METADATA,developerName,validityWrapper));
            }
        }

        // Execute Metadata deployment if we found new mappings and we ran the validations
        executeMetadataUpdateJob(customMetadataObjectsToUpdate);
    }

    /**
     * Enqueue the job to update custom metadata records
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param customMetadataObjectsToUpdate Custom metadata records objects to update
     */
    public static void executeMetadataUpdateJob(List<Metadata.CustomMetadata> customMetadataObjectsToUpdate)
    {
        if (!customMetadataObjectsToUpdate.isEmpty()) {
            MetadataInsertUpdate.AsyncExecution AsyncJob = new MetadataInsertUpdate.AsyncExecution(customMetadataObjectsToUpdate);
            ID jobID = System.enqueueJob(AsyncJob);
            DebugLog.addInfo('Launched Metadata Deployment Job.', jobID, Json.serializePretty(customMetadataObjectsToUpdate));
        }
    }

    /**
     * Mark a mapping as invalid after blocking a DML
     * @author hadib@salesforce.com | 12-03-2022
     *
     * @param developerName Custom Mdt record Developer Name
     * @param errorMsg      Invalidity Error Msg
     */
    @Future
    public static void tickMappingAsInvalid(String developerName, String errorMsg)
    {
        ValidityWrapper validityWrapper = new ValidityWrapper(false,errorMsg);
        List<Metadata.CustomMetadata> customMetadataObjectsToUpdate = new List<Metadata.CustomMetadata>();
        customMetadataObjectsToUpdate.add(prepareCustomMetadataForUpdate(MAPPING_CUSTOM_METADATA,developerName,validityWrapper));
        executeMetadataUpdateJob(customMetadataObjectsToUpdate);
    }

    /**
     * Mark a mapping as invalid after blocking a DML
     * @author hadib@salesforce.com | 12-03-2022
     *
     * @param targetFieldApiName    Target field api name
     * @param errorMsg              Invalidity Error Msg
     * @param sourceObject          Source object api name
     * @param targetObject          Target object api name
     */
    public static void tickTargetFieldAsInvalid(String targetFieldApiName, String errorMsg,String sourceObject, String targetObject)
    {
        List<DynamicMapping__mdt> failingMapping = [    SELECT  QualifiedApiName
        FROM    DynamicMapping__mdt
        WHERE   SourceObjectApiName__c      = :sourceObject AND TargetObjectApiName__c  = :targetObject
        AND TargetFieldApiName__c   = :targetFieldApiName
        LIMIT 1];
        if(!failingMapping.isEmpty())
        {
            tickMappingAsInvalid(failingMapping[0].QualifiedApiName,errorMsg);
        }
    }

    /**
      * Mark a mapping as invalid after blocking a DML
      * @author hadib@salesforce.com | 26-12-2023
      *
      * @param sourceFieldApiName    Target field api name
      * @param errorMsg              Invalidity Error Msg
      * @param sourceObject          Source object api name
      * @param targetObject          Target object api name
      */
    public static void tickSourceFieldAsInvalid(String sourceFieldApiName, String errorMsg,String sourceObject)
    {
        List<DynamicMapping__mdt> failingMapping = [    SELECT  QualifiedApiName
        FROM    DynamicMapping__mdt
        WHERE   SourceObjectApiName__c = :sourceObject
                AND SourceFieldApiName__c   = :sourceFieldApiName
        LIMIT 1];
        if(!failingMapping.isEmpty())
        {
            tickMappingAsInvalid(failingMapping[0].QualifiedApiName,errorMsg);
        }
    }

    /**
     * Runs custom validation to make sure a target field can received a source field value without errors
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param sourceField           DescribeFieldResult of the source field
     * @param targetField           DescribeFieldResult of the target field
     * @param mapping               Mapping record in DynamicMapping__mdt. Will be used to check limitStringLength__c value.
     *
     * @return Boolean - If the mapping is valid
     */
    public static ValidityWrapper customValidate(DescribeFieldResult sourceField, DescribeFieldResult targetField,
            DynamicMapping__mdt mapping)
    {
        ValidityWrapper validityWrapper = new ValidityWrapper(false,'');

        if(!targetField.isUpdateable())
        {
            validityWrapper.invalidityReason = 'The target field '+targetField.getName()+' is not editable';
            return validityWrapper;
        }

        if (sourceField.getType() == targetField.getType())
        {
            // Both source field and target field have the same type
            // Next step we run type related validations. Like the length for strings.
            switch on targetField.getType() {
                when STRING
                {
                    validityWrapper = checkIfThereIsCharactersLimit(mapping, targetField, sourceField);
                }
                when else
                {
                    validityWrapper.isValid = true;
                }
            }
        }
        else
        {
            // Exception: Allow mapping of (Email,PickList,Date)  => Text field
            if(sourceField.getType() == DisplayType.EMAIL && targetField.getType() == DisplayType.STRING)
            {
                validityWrapper = checkIfThereIsCharactersLimit(mapping, targetField, sourceField);
            }
            else if(sourceField.getType() == DisplayType.PICKLIST && targetField.getType() == DisplayType.STRING)
            {
                validityWrapper.isValid = true;
            }
            else if(sourceField.getType() == DisplayType.DATE && targetField.getType() == DisplayType.STRING)
            {
                validityWrapper.isValid = true;
            }
            else if(sourceField.getType() == DisplayType.DATETIME && targetField.getType() == DisplayType.STRING)
            {
                validityWrapper.isValid = true;
            }
            else
            {
                // Source Field type is completely different from the target field type
                validityWrapper.invalidityReason = 'The data type of the source field does not match that of the target field in the mapping' +
                        ' (Source Field Type: \' '+sourceField.getType()+' \'=> Target Field Type:\' '+targetField.getType()+' \' )';
            }
        }

        return validityWrapper;
    }

    /**
     * We use this method to allow a mapping if we specified a characters limit in order to fit a long text field in a short one
     * @author hadib@salesforce.com | 08-03-2023
     *
     * @param mapping               Mapping Custom Mdt
     * @param targetField           Target Field Describe
     * @param sourceField           Source Field Describe
     *
     * @return ValidityWrapper - If it's valid
     */
    public static ValidityWrapper checkIfThereIsCharactersLimit(DynamicMapping__mdt mapping, DescribeFieldResult targetField, DescribeFieldResult sourceField)
    {
        ValidityWrapper validityWrapper = new ValidityWrapper(false,'');
        if(sourceField.getLength() <= targetField.getLength())
        {
            validityWrapper.isValid = true;
        }
        else
        {
            // We have a characters problem
            if (mapping.limitStringLength__c != null && mapping.limitStringLength__c >= targetField.getLength()) {
                // We specified a characters limit in the mapping to shrink the source value
                validityWrapper.isValid = true;
            }
            else {
                validityWrapper.invalidityReason = 'The length of characters specified in the target field is not supported ' +
                        '(Source:'+sourceField.getLength()+';Target:'+targetField.getLength()+'), indicating a technical constraint. To address this, ' +
                        'you can establish a character limit for the field by specifying it manually through the mapping record\'s \'Limit String Length\' field';
            }
        }
        return validityWrapper;
    }

    /**
     * Validates a mapping custom metadata record by setting isValid__c field.
     * After this validation the mapping is no longer a new record. So the field isNew__c will be set to false.
     * We use the help of MetadataInsertUpdate.prepareCustomMetadataRecordForUpsert to get a Metadata.CustomMetadata object to return
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param developerName         The Custom Metadata record full name (i.e. DynamicMapping.TestRecord)
     * @param MasterLabel           Label for the new or existing record to upsert
     * @param validityWrapper       ValidityWrapper Wrapper containing if it's valid ot not and the reason behind invalidity
     *
     * @return Metadata.CustomMetadata - Custom metadata object to be used to upsert a record
     */
    public static Metadata.CustomMetadata prepareCustomMetadataForUpdate(String developerName, String masterLabel,ValidityWrapper validityWrapper)
    {
        if(validityWrapper.isValid)
        {
            validityWrapper.invalidityReason = ''; // Empty the previous error message if the mapping was invalid before
        }

        Map<String, Object> fieldsValues = new Map<String, Object>();           // Map<FieldApiName,FieldValue>()
        fieldsValues.put('isValid__c'       ,validityWrapper.isValid);          // (Field Api Name , Field Value)
        fieldsValues.put('isNew__c'         ,false);                            // (Field Api Name , Field Value)
        fieldsValues.put('InvalidReason__c' ,validityWrapper.invalidityReason); // (Field Api Name , Field Value)

        Metadata.CustomMetadata customMetadata =
                MetadataInsertUpdate.prepareCustomMetadataRecordForUpsert(developerName,masterLabel,fieldsValues);

        return customMetadata;
    }

    /**
     * Retrieves the source data based on a set of mappings. It starts with building the query by concatenating all the source fields
     * Then it returns an SObject containing all required data in order to create the target object record
     * @author hadib@salesforce.com | 11-11-2022
     *
     * @param recordId                          Source record Id from where we will grab field values
     * @param sourceObjectApiName               Source Object Api Name
     * @param mappings                          All The mappings records to build the query by concatenating all the source fields api names
     * @param moreFieldsUsedProgrammatically    (Optional) When you don't want to map a field directly, but you want to used its value programmatically
     *
     * @return SObject - SObject record storing all data we want in order to create the target object record
     */
    public static SObject retrieveSourceData(String recordId, String sourceObjectApiName, List<DynamicMapping__mdt> mappings, Set<String> moreFieldsUsedProgrammatically)
    {
        String query = 'SELECT %fields FROM %objectApiName WHERE Id= :recordId';

        Set<String> fieldsMapped = new Set<String>();
        for (DynamicMapping__mdt mapping : mappings)
        {
            fieldsMapped.add(mapping.SourceFieldApiName__c);
        }

        if(!moreFieldsUsedProgrammatically.isEmpty()) fieldsMapped.addAll(moreFieldsUsedProgrammatically);

        query = query.replace('%fields',        String.join(new List<String>(fieldsMapped),','));
        query = query.replace('%objectApiName', sourceObjectApiName);

        return Database.query(query);
    }

    /**
     * Deactivates a mapping if it caused an exception so we unblock future campaign generations
     * @author hadib@salesforce.com | 01-12-2023
     *
     * @param errorMsg - The error message
     */
    public static void attemptToFixWrongMapping(String errorMsg)
    {
        Map<String, String> errorDetails = parseErrorMessage(errorMsg);
        if(errorDetails.containsKey('object') && errorDetails.containsKey('field') )
        {
            Boolean canReadField = hasReadAccess(errorDetails.get('object'), errorDetails.get('field'));
            if(canReadField) tickSourceFieldAsInvalid(errorDetails.get('field'),errorMsg,errorDetails.get('object'));
        }
    }

    /**
     * Check if its just an access issue or its a wrong api names issue
     * @param objectApiName Object Api Name
     * @param fieldApiName Field Api Name
     *
     * @return Boolean - Whether the user has access or not
     */
    public static Boolean hasReadAccess(String objectApiName, String fieldApiName) {
        // Retrieve the global describe map which contains all sObject descriptions
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();

        // Get the sObject type based on the API name
        Schema.SObjectType sObjectType = gd.get(objectApiName);

        if (sObjectType != null) {
            // Get the describe result of the sObject
            Schema.DescribeSObjectResult describeSObjectResult = sObjectType.getDescribe();

            // Get the map of all fields for the sObject
            Map<String, Schema.SObjectField> fieldMap = describeSObjectResult.fields.getMap();

            // Check if the field exists in the map
            if (fieldMap.containsKey(fieldApiName)) {
                // Get the describe result of the field
                Schema.DescribeFieldResult fieldDescribe = fieldMap.get(fieldApiName).getDescribe();

                // Return whether the field is accessible (readable)
                return fieldDescribe.isAccessible();
            }
        }

        // Return true if the object or field does not exist, in order to tick the mapping as invalid.
        return true;
    }

    /**
     * Parses an error message to find the object and field that caused a 'No such column' error.
     * @param errorMessage The error message to parse.
     * @return A Map with keys 'object' and 'field' containing the names of the object and field.
     */
    public static Map<String, String> parseErrorMessage(String errorMessage) {
        Map<String, String> result = new Map<String, String>();

        Pattern fieldPattern = Pattern.compile('\'(.*?)\'');
        Matcher fieldMatcher = fieldPattern.matcher(errorMessage);

        if (fieldMatcher.find()) {
            result.put('field', fieldMatcher.group(1)); // Extracts the field name
        }

        Pattern objectPattern = Pattern.compile('entity \'(.*?)\'');
        Matcher objectMatcher = objectPattern.matcher(errorMessage);

        if (objectMatcher.find()) {
            result.put('object', objectMatcher.group(1)); // Extracts the object name
        }

        return result;
    }

    /**
     * Validate the new mappings asynchronously
     * @Author hadib@salesforce.com | 10-03-2023
     *
     * @param sourceObject Source Object Api Name
     * @param targetObject Target Object Api Name
     */
    @Future
    public static void launchValidationAsynchronous(String sourceObject, String targetObject)
    {
        List<DynamicMapping__mdt> newMapping = [ SELECT SourceObjectApiName__c,SourceFieldApiName__c,TargetFieldApiName__c,limitStringLength__c,isNew__c,
                isValid__c, MasterLabel,DeveloperName,QualifiedApiName

        FROM    DynamicMapping__mdt
        WHERE   SourceObjectApiName__c= :sourceObject AND TargetObjectApiName__c= :targetObject
        AND isNew__c = TRUE];
        if(!newMapping.isEmpty())
        {
            NotificationEventPublisher.publishNotification(NotificationEventPublisher.CVENT_CONTEXT,NotificationEventPublisher.CVENT_TYPE,'Validations','This is a notification message to inform that validations has Started..');
            validateMapping(sourceObject,targetObject,newMapping);
        }
    }


    /**
     * Wrapper containing if it's valid ot not and the reason behind invalidity
     */
    public class ValidityWrapper {
        public Boolean isValid;
        public String invalidityReason;
        public ValidityWrapper(Boolean isValid, String invalidityReason)
        {
            this.isValid = isValid;
            this.invalidityReason = invalidityReason;
        }
    }
}