/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Metadata Deploy Call Back
Test class      TODO

History
01-12-2022     Create new class
----------------------------------------------------------------------------------------*/
public with sharing class MetadataInsertUpdate implements Metadata.DeployCallback
{
    /**
     * Generic Method that prepares a Metadata.CustomMetadata object.
     * This object can be later on upserted via metadata deployment.
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param fullName              The Custom Metadata record full name (i.e. DynamicMapping.TestRecord)
     * @param label                 Label for the new or existing record to upsert
     * @param fieldWithValuesMap    A Map<String, Object> that contains (Field Api Name , Field Value).
     *
     * @return Metadata.CustomMetadata - Returns custom metadata object that will be upserted
     */
    public static Metadata.CustomMetadata prepareCustomMetadataRecordForUpsert(String fullName, String label, Map<String, Object> fieldWithValuesMap)
    {
        Metadata.CustomMetadata customMetadata = new Metadata.CustomMetadata();
        customMetadata.fullName = fullName + '.' + label;
        customMetadata.label = label;

        // From each (field,value) in the fieldWithValuesMap map, we create Metadata.CustomMetadataValue objects
        // And we add them in the Metadata.CustomMetadata created in Step 1
        for (String key : fieldWithValuesMap.keySet())
        {
            Metadata.CustomMetadataValue customField = new Metadata.CustomMetadataValue();
            customField.field = key;
            customField.value = fieldWithValuesMap.get(key);

            customMetadata.values.add(customField);
        }

        return customMetadata;
    }

    /**
     * This method receives a list of custom metadata object that need to be upserted.
     * The upsert is done via deployment because we are working here with custom metadata records.
     * When the deployment job finished the callback function MetadataInsertUpdate.handleResult will execute automatically
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param customMetadataObjects Upsert a list of custom metadata objects by enqueuing a deployment job
     *
     * @return Id - Metadata Deployment Job Id
     */
    public static Id executeUpsert(List<Metadata.CustomMetadata> customMetadataObjects)
    {
        Metadata.DeployContainer mdContainer = new Metadata.DeployContainer();

        for (Metadata.CustomMetadata customMetadata : customMetadataObjects)
        {
            mdContainer.addMetadata(customMetadata);
        }

        MetadataInsertUpdate callback = new MetadataInsertUpdate();
        Id jobId;
        if(!Test.isRunningTest())
        {
            jobId = Metadata.Operations.enqueueDeployment(mdContainer, callback);
        }

        return jobId;
    }

    /**
     * Generic method that handles the custom metadata deployment callback.
     * This method is executed automatically when a custom metadata deployment job is finished.
     * It reports the result (both successful and failed jobs) in a DebugLog__c record
     * @author hadib@salesforce.com | 01-12-2022
     *
     * @param result    The deployment result
     * @param context   The CallBack Context
     */
    public void handleResult(Metadata.DeployResult result, Metadata.DeployCallbackContext context)
    {
        // Step 4 - We read the result and we log it in the database as a DebugLog__c record
        if(result.status == Metadata.DeployStatus.Succeeded)
        {
            DebugLog.addInfo(JSON.serializePretty(result),'Succeeded: ' + result.Id);
        }
        else
        {
            DebugLog.addError(JSON.serializePretty(result),'Failed: ' + result.Id);
        }
    }

    /**
     * Queueable class that gets executed in asynchronous mode
     */
    public class AsyncExecution implements Queueable {

        public List<Metadata.CustomMetadata> customMetadataObjects;

        /**
         * @param customMetadataObjects Custom metadata objects to upsert asynchronously
         */
        public AsyncExecution(List<Metadata.CustomMetadata> customMetadataObjects)
        {
            this.customMetadataObjects = customMetadataObjects;
        }

        /**
         * @param context Queueable Context. Executes the upsert process.
         */
        public void execute(QueueableContext context)
        {
            MetadataInsertUpdate.executeUpsert(customMetadataObjects);
        }
    }
}