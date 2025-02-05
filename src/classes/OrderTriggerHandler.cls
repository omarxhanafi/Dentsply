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
    private List<Order> oldRLMOrderList, newRLMOrderList;
    private Map<Id, Order> oldRLMOrderMap, newRLMOrderMap;

    public OrderTriggerHandler() {
        // Init lists and maps for both regular and advanced order (Old and new)
        oldOrderList = new List<Order>();
        newOrderList = new List<Order>();
        oldOrderMap = new Map<Id, Order>();
        newOrderMap = new Map<Id, Order>();

        oldRLMOrderList = new List<Order>();
        newRLMOrderList = new List<Order>();
        oldRLMOrderMap = new Map<Id, Order>();
        newRLMOrderMap = new Map<Id, Order>();

        // Separate orders by record type
        separateOrdersByRecordType();
    }

    protected override void beforeInsert() {
        // Regular order-specific helper calls
        if(!newOrderList.isEmpty()){
            OrderTriggerHelper.setShipmentAddress(newOrderList);
        }

        // Helper methods to call for both regular & advanced orders
        if(!newOrderList.isEmpty() || !newRLMOrderList.isEmpty()){
            OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(aggregateLists(newOrderList, newRLMOrderList));
        }

        // RLM order-specific helper calls
        if(!newRLMOrderList.isEmpty()){
            OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(newRLMOrderList);
            OrderTriggerHelper.setShippingAndBillingAddress(newRLMOrderList, null);
        }
    }
    
    protected override void beforeUpdate() {
        // Regular order-specific helper calls
        if(!newOrderList.isEmpty()){
            OrderTriggerHelper.setShipmentAddress(newOrderList);
            OrderTriggerHelper.calculateAllowedDiscount(newOrderList);
            OrderTriggerHelper.setERPStopFlag(newOrderList);
            OrderTriggerHelper.evaluateOrderLineApproval(newOrderList, newOrderMap);
        }

        // Helper methods to call for both regular & advanced orders
        if(!newOrderList.isEmpty() || !newRLMOrderList.isEmpty()){
            OrderTriggerHelper.setAccountOwnerAndRegionalManagerOnOrder(aggregateLists(newOrderList, newRLMOrderList));
        }

        // RLM order-specific helper calls
        if(!newRLMOrderList.isEmpty()){
            OrderTriggerHelper.setShippingAndBillingAddress(newRLMOrderList, oldRLMOrderMap);
        }
    }

    /**
     * separateOrdersByRecordType Helper method creating Order lists and maps for both regular and advanced orders (Old and new) based on the record type
     */
    private void separateOrdersByRecordType() {
        Id advancedRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Order' AND DeveloperName = 'Advanced_Order' LIMIT 1].Id;

        if (Trigger.old != null) {
            for (Order eachOrder : (List<Order>) Trigger.old) {
                if (eachOrder.RecordTypeId == advancedRecordTypeId) {
                    oldRLMOrderList.add(eachOrder);
                    oldRLMOrderMap.put(eachOrder.Id, eachOrder);
                } else {
                    oldOrderList.add(eachOrder);
                    oldOrderMap.put(eachOrder.Id, eachOrder);
                }
            }
        }

        if (Trigger.new != null) {
            for (Order eachOrder : (List<Order>) Trigger.new) {
                if (eachOrder.RecordTypeId == advancedRecordTypeId) {
                    newRLMOrderList.add(eachOrder);
                    newRLMOrderMap.put(eachOrder.Id, eachOrder);
                } else {
                    newOrderList.add(eachOrder);
                    newOrderMap.put(eachOrder.Id, eachOrder);
                }
            }
        }
    }

    /**
     * Helper method to aggregate two lists into one.
     * @param list1 The first list.
     * @param list2 The second list.
     * @return Aggregated list.
     */
    private static List<Order> aggregateLists(List<Order> list1, List<Order> list2) {
        List<Order> aggregatedList = new List<Order>();
        if (list1 != null) aggregatedList.addAll(list1);
        if (list2 != null) aggregatedList.addAll(list2);
        return aggregatedList;
    }

}