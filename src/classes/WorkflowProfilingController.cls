public with sharing class WorkflowProfilingController {

    @AuraEnabled(cacheable=true)
    public static List<Workflow__c> getWorkflowsByExcludingCountry(Id accountId) {
        Account acc = [SELECT Id, Country__c from Account where id = :accountId LIMIT 1];

        if(acc != null){
            String country = acc.Country__c;
            return [SELECT Id, WorkflowLabel__c FROM Workflow__c WHERE Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE];
        }

        return null;
    }

    @AuraEnabled(cacheable=true)
    public static List<WorkflowProfiling__c> getWorkflowProfilingsByAccount(Id accountId) {
        return [SELECT Id, Name, Rating__c, Account__c, Workflow__c FROM WorkflowProfiling__c WHERE Account__c = :accountId];
    }

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
}

