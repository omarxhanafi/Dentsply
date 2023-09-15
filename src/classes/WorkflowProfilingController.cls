public with sharing class WorkflowProfilingController {

    @AuraEnabled(cacheable=true)
    public static List<Workflow__c> getWorkflowsByExcludingCountry(Id accountId) {
        Account acc = [SELECT Id, Country__c from Account where id = :accountId LIMIT 1];

        if(acc != null){
            String country = acc.Country__c;
            return [SELECT Id, Name FROM Workflow__c WHERE Countries__c EXCLUDES (:country)];
        }

        return null;
    }
}
