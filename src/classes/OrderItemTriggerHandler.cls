/*------------------------------------------------------------------------------------------------------------------------
Author: 		LOUDRASSI Ahmed (Salesforce) 2020-02-25
Description:    OrderItem Trigger Handler Class. 
History 
<Date>      <Authors Name>     <Brief Description of Change>
2020-02-25  LOUDRASSI Ahmed    Created the class
2025-01-21  HANAFI Omar        CPQ-230 - Separation of logic between regular order items and the advanced ones (RLM)
------------------------------------------------------------------------------------------------------------------------*/

public class OrderItemTriggerHandler extends TriggerHandler {
    // Regular order items
    private List<OrderItem> oldOrderItemList, newOrderItemList;
    private Map<Id, OrderItem> oldOrderItemMap, newOrderItemMap;

    // Advanced order items (RLM)
    private List<OrderItem> oldRLMOrderItemList, newRLMOrderItemList;
    private Map<Id, OrderItem> oldRLMOrderItemMap, newRLMOrderItemMap;
    
    public OrderItemTriggerHandler() {
        // Init lists and maps for both regular and advanced order (Old and new)
        oldOrderItemList = new List<OrderItem>();
        newOrderItemList = new List<OrderItem>();
        oldOrderItemMap = new Map<Id, OrderItem>();
        newOrderItemMap = new Map<Id, OrderItem>();

        oldRLMOrderItemList = new List<OrderItem>();
        newRLMOrderItemList = new List<OrderItem>();
        oldRLMOrderItemMap = new Map<Id, OrderItem>();
        newRLMOrderItemMap = new Map<Id, OrderItem>();

        // Separate order items by record type
        separateOrderItemsByRecordType();
    }


    protected override void beforeInsert() {
        // Regular order item-specific helper calls
        OrderItemTriggerHelper.set100PercentForFOC(newOrderItemList);
        OrderItemTriggerHelper.totalAmountOfSamplesAndFreeProducts(newOrderItemList);
        OrderItemTriggerHelper.orderProductEvaluation(newOrderItemList);
        OrderItemTriggerHelper.setParentKitProduct(newOrderItemList);
    }
    protected override void beforeUpdate() {
        // Regular order item-specific helper calls
        OrderItemTriggerHelper.set100PercentForFOC(newOrderItemList);
        OrderItemTriggerHelper.totalAmountOfSamplesAndFreeProducts(newOrderItemList);
        OrderItemTriggerHelper.orderProductEvaluation(newOrderItemList);
        OrderItemTriggerHelper.setParentKitProduct(newOrderItemList);
    }
    protected override void afterInsert() {
        // Regular order item-specific helper calls
        OrderItemTriggerHelper.setDiscountAllowedforTurkey(newOrderItemList);
    }
    protected override void afterUpdate() {
        // Regular order item-specific helper calls
        OrderItemTriggerHelper.setDiscountAllowedforTurkey(newOrderItemList);
    }
    protected override void afterDelete() {
        // Regular order item-specific helper calls
        OrderItemTriggerHelper.setDiscountAllowedforTurkey(oldOrderItemList);
    }

    /**
     * separateOrderItemsByRecordType Helper method creating Order Item lists and maps for both regular and advanced orders (Old and new) based on the Order's record type
     */
    private void separateOrderItemsByRecordType() {
        // Collect all OrderIds from Trigger.old and Trigger.new
        Set<Id> orderIds = new Set<Id>();

        if (Trigger.old != null) {
            for (OrderItem eachOrderItem : (List<OrderItem>) Trigger.old) {
                orderIds.add(eachOrderItem.OrderId);
            }
        }

        if (Trigger.new != null) {
            for (OrderItem eachOrderItem : (List<OrderItem>) Trigger.new) {
                orderIds.add(eachOrderItem.OrderId);
            }
        }

        // Query the Order records in bulk to get RecordType.DeveloperName
        Map<Id, Order> orderList = new Map<Id, Order>(
                [SELECT Id, RecordType.DeveloperName FROM Order WHERE Id IN :orderIds]
        );

        // Separate orders by record type
        if (Trigger.old != null) {
            for (OrderItem eachOrderItem : (List<OrderItem>) Trigger.old) {
                String parentRecordType = orderList.get(eachOrderItem.OrderId).RecordType.DeveloperName;
                if (parentRecordType == 'Advanced_Order') {
                    oldRLMOrderItemList.add(eachOrderItem);
                    oldRLMOrderItemMap.put(eachOrderItem.Id, eachOrderItem);
                } else {
                    oldOrderItemList.add(eachOrderItem);
                    oldOrderItemMap.put(eachOrderItem.Id, eachOrderItem);
                }
            }
        }

        if (Trigger.new != null) {
            for (OrderItem eachOrderItem : (List<OrderItem>) Trigger.new) {
                String parentRecordType = orderList.get(eachOrderItem.OrderId).RecordType.DeveloperName;
                if (parentRecordType == 'Advanced_Order') {
                    newRLMOrderItemList.add(eachOrderItem);
                    newRLMOrderItemMap.put(eachOrderItem.Id, eachOrderItem);
                } else {
                    newOrderItemList.add(eachOrderItem);
                    newOrderItemMap.put(eachOrderItem.Id, eachOrderItem);
                }
            }
        }
    }

}