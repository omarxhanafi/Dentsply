/*-------------------------------------------------------------------------------------------------------
Author:         NISREEN ALSALEH (support@avity.com) 31-July-2022
Description:    WorkOrder Trigger Handler Class
--------------------------------------------------------------------------------------------------------*/

public class WorkOrderTriggerHandler extends TriggerHandler {
	private List<WorkOrder> oldWOList, newWOList;
    private Map<Id, WorkOrder> oldWOMap, newWOMap;
    
    public WorkOrderTriggerHandler(){
        oldWOList = (List<WorkOrder>) Trigger.old;
        newWOList = (List<WorkOrder>) Trigger.new;
        oldWOMap = (Map<Id,WorkOrder>) Trigger.oldmap;
        newWOMap = (Map<Id,WorkOrder>) Trigger.newmap;
        
    }
    
    protected override void beforeInsert() {
         WorkOrderTriggerHelper.defaultEntitlement(newWOList);
    }
    protected override void beforeUpdate() {
        WorkOrderTriggerHelper.defaultEntitlement(newWOList);
    }
    protected override void afterUpdate() {
    }
}