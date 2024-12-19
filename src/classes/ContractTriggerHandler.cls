/*------------------------------------------------------------  
Author:         Kevin Do (Salesforce) 202--01-16    
Description:    Contract Trigger Handler Class. 
History 
<Date>      <Authors Name>     <Brief Description of Change>
20200116    Kevin Do            Created Class
------------------------------------------------------------*/

public class ContractTriggerHandler extends TriggerHandler {
    private List<Contract> oldContractList, newContractList;
    private Map<Id, Contract> oldContractMap, newContractMap;

    public ContractTriggerHandler() {
        oldContractList = (List<Contract>) Trigger.old;
        newContractList = (List<Contract>) Trigger.new;
        oldContractMap = (Map<Id, Contract>) Trigger.oldMap;
        newContractMap = (Map<Id, Contract>) Trigger.newMap;
    }

    protected override void beforeInsert() {
        ContractTriggerHelper.setStartParameters(newContractList);
    }

    protected override void beforeUpdate() {

    }
}