/*------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-05-20
Description:    Generic Trigger for ProcedureTracker__c (Following Trigger Framework)
------------------------------------------------------------*/
trigger ProcedureTrackerTrigger on ProcedureTracker__c  (
        before insert
        , before update
        , before delete
        , after insert
        , after update
        , after delete
        , after undelete) {
    new ProcedureTrackerTriggerHandler().run();
}