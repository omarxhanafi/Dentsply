/*-------------------------------------------------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-05-20
Description:    ProcedureTracker  Trigger Helper Class
Test class      Test_ProcedureTrackerTriggerHelper
History
----------------------------------------------------------------------------------------*/
public with sharing class ProcedureTrackerTriggerHelper {
    
    public static void checkUniqueness(List<ProcedureTracker__c> newProcedureTrackerList) {
        // The Procedure Tracker must be unique (Type + Account)
        Set<Id>     accountIds      = new Set<Id>();
        Map<Id, ProcedureTracker__c> procedureProfilingPerAcc = new Map<Id, ProcedureTracker__c>();
        for(ProcedureTracker__c pt: newProcedureTrackerList){
        	accountIds.add(pt.PracticeAccount__c);
    	}
        // Get all existing procedure trackers of the relevant accounts. 
        List<ProcedureTracker__c> existingProceduretrackers = [SELECT id, PracticeAccount__c, ProcedureType__c FROM ProcedureTracker__c WHERE PracticeAccount__c IN: accountIds];
        if(existingProceduretrackers.isEmpty()){
            return; 
        }
        
        // build a set of unique strings composed by the unique partner of AccountID + ProcedureType
        Set<String> uniqueAccountIdAndProceduretype = new Set<String>() ; 
        for(ProcedureTracker__c pt: existingProceduretrackers){
            uniqueAccountIdAndProceduretype.add(pt.PracticeAccount__c + '' + pt.ProcedureType__c);
        }

        // fire an error if the procedure tracker that is about to be created already exists (account+type)
        for(ProcedureTracker__c pt: newProcedureTrackerList){
            if (uniqueAccountIdAndProceduretype.contains(pt.PracticeAccount__c + '' + pt.ProcedureType__c)){
                pt.addError(Label.One_Procedure_Tracker_Per_Account_and_Type);
            }
        }
    }
}