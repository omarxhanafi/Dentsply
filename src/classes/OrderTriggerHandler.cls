/*--------------------------------------------------------------------------------------------------------------------
Author: 		Miguel Coimbra (Salesforce) 2020-06-09
Description:    Order Trigger Handler Class. 
History 
<Date>      <Authors Name>     <Brief Description of Change>
20231005    Roberto             User Story TFUS-000006097 setERPStopFlag new method created
20250120    Omar                CPQ-230 - Separation of logic between regular orders and advanced orders (RLM)
--------------------------------------------------------------------------------------------------------------------*/
public class OrderTriggerHandler extends TriggerHandler {
    // Regular orders
    private List<Order> oldOrderList, newOrderList;
    private Map<Id, Order> oldOrderMap, newOrderMap;

    // Advanced orders (RLM)
    private List<Order> oldRLMOrders, newRLMOrders;
    private Map<Id, Order> oldRLMOrderMap, newRLMOrderMap;

    public OrderTriggerHandler() {
        // Init lists and maps for both regular and advanced order (Old and new)
        oldOrderList = new List<Order>();
        newOrderList = new List<Order>();
        oldOrderMap = new Map<Id, Order>();
        newOrderMap = new Map<Id, Order>();

        oldRLMOrders = new List<Order>();
        newRLMOrders = new List<Order>();
        oldRLMOrderMap = new Map<Id, Order>();
        newRLMOrderMap = new Map<Id, Order>();

        // Separate orders by record type
        separateOrdersByRecordType();
    }

    protected override void beforeInsert() {
        // Regular order-specific helper calls
        OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(oldOrderList);
        OrderTriggerHelper.setShipmentAddress(oldOrderList);
        //OrderTriggerHelper.evaluateOrderLineApproval(newOrderList, newOrderMap);
    }
    
    protected override void beforeUpdate() {
        // Regular order-specific helper calls
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

    /**
     * separateOrdersByRecordType Helper method creating Order lists and maps for both regular and advanced orders (Old and new) based on the record type
     */
    private void separateOrdersByRecordType() {
        if (Trigger.old != null) {
            for (Order eachOrder : (List<Order>) Trigger.old) {
                if (eachOrder.RecordType.DeveloperName == 'Advanced_Order') {
                    oldRLMOrders.add(eachOrder);
                    oldRLMOrderMap.put(eachOrder.Id, eachOrder);
                } else {
                    oldOrderList.add(eachOrder);
                    oldOrderMap.put(eachOrder.Id, eachOrder);
                }
            }
        }

        if (Trigger.new != null) {
            for (Order eachOrder : (List<Order>) Trigger.new) {
                if (eachOrder.RecordType.DeveloperName == 'Advanced_Order') {
                    newRLMOrders.add(eachOrder);
                    newRLMOrderMap.put(eachOrder.Id, eachOrder);
                } else {
                    newOrderList.add(eachOrder);
                    newOrderMap.put(eachOrder.Id, eachOrder);
                }
            }
        }
    }

}