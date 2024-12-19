/*------------------------------------------------------------  
Author: 		Miguel Coimbra (Salesforce) 2020-06-09
Description:    Order Trigger Handler Class. 
History 
<Date>      <Authors Name>     <Brief Description of Change>
20231005        Roberto         User Story TFUS-000006097 setERPStopFlag new method created
------------------------------------------------------------*/
public class OrderTriggerHandler extends TriggerHandler {
    private List<Order> oldOrderList, newOrderList;
    private Map<Id, Order> oldOrderMap, newOrderMap;
    
    public OrderTriggerHandler() {
        oldOrderList = (List<Order>) Trigger.old;
        newOrderList = (List<Order>) Trigger.new;
        oldOrderMap = (Map<Id, Order>) Trigger.oldMap;
        newOrderMap = (Map<Id, Order>) Trigger.newMap;
    }
    
    protected override void beforeInsert() {
        OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(newOrderList);
        OrderTriggerHelper.setShipmentAddress(newOrderList);
        //OrderTriggerHelper.evaluateOrderLineApproval(newOrderList, newOrderMap);
    }
    
    protected override void beforeUpdate() {
        OrderTriggerHelper.setShipmentAddress(newOrderList);
        OrderTriggerHelper.setERPStopFlag(newOrderList);
        OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(newOrderList);
        OrderTriggerHelper.calculateAllowedDiscount(newOrderList);
        OrderTriggerHelper.evaluateOrderLineApproval(newOrderList, newOrderMap);   
    }
    /*
    protected override void afterInsert() {
    }
    protected override void afterUpdate() {
    }
    protected override void afterDelete() {
    }*/
}