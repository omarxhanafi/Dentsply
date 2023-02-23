/*------------------------------------------------------------
Author:         Roberto Narbona
Description:    Generic Trigger for ContractItemTrigger (Following Trigger Framework)
------------------------------------------------------------*/

trigger ContractItemTrigger on ContractItem__c  (
        before insert
        , before update
        , before delete
        , after insert
        , after update
        , after delete
        , after undelete) {
    new ContractItemTriggerHandler().run();
}