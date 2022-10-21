/*-------------------------------------------------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-05-20
Description:    ProcedureTracker  Trigger Handler Class
History
----------------------------------------------------------------------------------------*/
public with sharing class ProcedureTrackerTriggerHandler extends TriggerHandler {
    private List<ProcedureTracker__c> oldProcedureTrackerList, newProcedureTrackerList;
    private Map<Id, ProcedureTracker__c> oldProcedureTrackerMap, newProcedureTrackerMap;

    
    public ProcedureTrackerTriggerHandler() {
        oldProcedureTrackerList = (List<ProcedureTracker__c>) Trigger.old;
        newProcedureTrackerList = (List<ProcedureTracker__c>) Trigger.new;
        oldProcedureTrackerMap = (Map<Id, ProcedureTracker__c>) Trigger.oldMap;
        newProcedureTrackerMap = (Map<Id, ProcedureTracker__c>) Trigger.newMap;
    }
    protected override void beforeInsert() {
        ProcedureTrackerTriggerHelper.checkUniqueness(newProcedureTrackerList);
    }   
}