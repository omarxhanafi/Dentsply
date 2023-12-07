/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Workflow Profiling Controller Class.
 * @Test-Class      Test_WorkflowProfilingController
 *
 * @History
 * 15-09-2023   Omar     TFUS-000006118 - Create Workflow Profiling Controller Class
 * 07-12-2023   Omar     Added the deleteWorkflowProfilings method
 */
public with sharing class WorkflowProfilingController {

    /**
     * getWorkflows Return a list of workflows based on the provided account Id
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param accountId   Account Id to fetch workflows
     *
     * @return List<Workflow__c> - List of workflows
     */
    @AuraEnabled(cacheable=true)
    public static List<Workflow__c> getWorkflows(Id accountId) {
        Account acc = [SELECT Id, Country__c from Account where id = :accountId LIMIT 1];

        if(acc != null){
            String country = acc.Country__c;
            return [SELECT Id, WorkflowLabel__c FROM Workflow__c WHERE Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE];
        }

        return null;
    }

    /**
     * getWorkflowProfilingsByAccount Return a list of Workflow Profiling records based on the provided account Id
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param accountId   Account Id to fetch Workflow Profilings
     *
     * @return List<WorkflowProfiling__c> - List of Workflow Profiling records
     */
    @AuraEnabled(cacheable=true)
    public static List<WorkflowProfiling__c> getWorkflowProfilingsByAccount(Id accountId) {
        return [SELECT Id, Name, Rating__c, Account__c, Workflow__c FROM WorkflowProfiling__c WHERE Account__c = :accountId];
    }

    /**
     * createOrUpdateWorkflowProfilings Upsert or insert Workflow Profiling records based on the provided list of records
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param newRecords   List of Workflow Profiling records to upsert or insert
     */
    @AuraEnabled
    public static void createOrUpdateWorkflowProfilings(List<WorkflowProfiling__c> newRecords) {
        // Fetch existing records
        Map<Id, WorkflowProfiling__c> existingRecordsMap = new Map<Id, WorkflowProfiling__c>();

        if(!newRecords.isEmpty()){

            Set<Id> accountIds = new Set<Id>();

            for(WorkflowProfiling__c eachWorkflowProfiling : newRecords){
                accountIds.add(eachWorkflowProfiling.Account__c);
            }

            for (WorkflowProfiling__c existingRecord : [
                    SELECT Id, Workflow__c, Rating__c
                    FROM WorkflowProfiling__c
                    WHERE Account__c = :accountIds]
            ) {
                existingRecordsMap.put(existingRecord.Workflow__c, existingRecord);
            }

            List<WorkflowProfiling__c> recordsToUpsert = new List<WorkflowProfiling__c>();

            // Iterate through new records
            for (WorkflowProfiling__c newRecord : newRecords) {
                // Check if there's a matching existing record
                WorkflowProfiling__c existingRecord = existingRecordsMap.get(newRecord.Workflow__c);

                if (existingRecord != null) {
                    // Update the existing record's rating
                    existingRecord.Rating__c = newRecord.Rating__c;
                    recordsToUpsert.add(existingRecord);
                } else {
                    // No matching record found, insert a new record
                    recordsToUpsert.add(newRecord);
                }
            }

            System.debug(recordsToUpsert);

            // Perform the upsert operation to either insert or update records
            if (!recordsToUpsert.isEmpty()) {
                upsert recordsToUpsert;
            }
        }

    }

    /**
     * deleteWorkflowProfilings Delete Workflow Profiling records based on the provided list of record IDs
     * @author ohanafi@salesforce.com | 07-12-2023
     *
     * @param recordIdsToDelete   List of Workflow Profiling record Ids to delete
     */
    @AuraEnabled
    public static void deleteWorkflowProfilings(List<Id> recordIdsToDelete) {
        if(recordIdsToDelete != null && !recordIdsToDelete.isEmpty()) {
            List<WorkflowProfiling__c> recordsToDelete = [SELECT Id FROM WorkflowProfiling__c WHERE Id IN :recordIdsToDelete];

            if(!recordsToDelete.isEmpty()) {
                delete recordsToDelete;
            }
        }
    }
}

