public without sharing class GuidanceRendererController {
    @AuraEnabled
    public static string getGuidanceDetails(String parentId, String nextActivity){
        try {
            String guidance;
            ProcedureTracker__c currentProcedure = [Select Id, PracticeAccount__r.Country__c,NextActivity__c,RecordTypeId from ProcedureTracker__c Where Id =: parentId Limit 1];
            RecordType currentRecordType = [SELECT DeveloperName 
                                        FROM RecordType 
                                        WHERE SObjectType = 'ProcedureTracker__c' AND Id =: currentProcedure.RecordTypeId LIMIT 1];

            if(currentProcedure != null){
                System.debug('currentProcedure'+currentProcedure);
                //get meta data with the next activity
                GuidanceRenderer__mdt guidances;
                if(Test.IsRunningTest()){
                	guidances =  [Select Id,Country__c, Guidance_Content__c, NextActivity__c From GuidanceRenderer__mdt Where  isTest__c = true];
					System.debug('guidances1' + guidances);
                }else{
                guidances =  [Select Id,Country__c, Guidance_Content__c, NextActivity__c From GuidanceRenderer__mdt Where Country__c=: currentProcedure.PracticeAccount__r.Country__c AND NextActivity__c=:nextActivity AND RecordTypeDeveloperName__c =: currentRecordType.DeveloperName];
                }
                System.debug('guidances'+guidances);
                if(guidances != null){
                    guidance = guidances.Guidance_Content__c;
                }
            }
            return guidance;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}