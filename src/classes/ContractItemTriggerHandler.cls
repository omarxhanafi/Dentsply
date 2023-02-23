/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona
Description:    Contract Item  Trigger Handler Class
History
----------------------------------------------------------------------------------------*/
public with sharing class ContractItemTriggerHandler extends TriggerHandler {
    private List<ContractItem__c> oldContractItemList, newContractItemList;
    private Map<Id, ContractItem__c> oldContractItemMap, newContractItemMap;

    public ContractItemTriggerHandler() {
        oldContractItemList = (List<ContractItem__c>) Trigger.old;
        newContractItemList = (List<ContractItem__c>) Trigger.new;
        oldContractItemMap = (Map<Id, ContractItem__c>) Trigger.oldMap;
        newContractItemMap = (Map<Id, ContractItem__c>) Trigger.newMap;
    }

    protected override void beforeDelete() {
        ContractItemTriggerHelper.canBeDeleted(oldContractItemList);
    }
}