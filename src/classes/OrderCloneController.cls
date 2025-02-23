/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Order cloning functionality.
 * @Test-Class      Test_OrderCloneController
 *
 * @History
 * 11-02-2025   Omar     Created OrderCloneController
 */

public with sharing class OrderCloneController {

    /**
     * Retrieves basic details of an Order record.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   Id of the Order.
     *
     * @return Order - The Order record.
     */
    @AuraEnabled(cacheable=true)
    public static Order getOrderDetails(Id orderId) {
        return [SELECT Id, OrderNumber FROM Order WHERE Id = :orderId LIMIT 1];
    }

    /**
     * Clones an Order record along with its related OrderLineItems.
     * The method dynamically retrieves all fields of Order and OrderLineItem to ensure
     * that new fields are included without modifying the code.
     *
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param orderId   Id of the Order.
     *
     * @return Order - The cloned Order.
     */
    @AuraEnabled
    public static Order cloneOrder(Id orderId) {
        try {
            // Get all fields for the Order object dynamically
            Map<String, Schema.SObjectField> orderFieldsMap = Schema.getGlobalDescribe().get('Order').getDescribe().fields.getMap();
            List<String> orderFieldNames = new List<String>();

            for (String fieldName : orderFieldsMap.keySet()) {
                orderFieldNames.add(fieldName);
            }

            // Build dynamic SOQL for Order
            String orderQuery = 'SELECT ' + String.join(orderFieldNames, ', ') +
                    ' FROM Order WHERE Id = :orderId LIMIT 1';

            // Query the original Order
            Order originalOrder = Database.query(orderQuery);

            // Clone the Order
            Order clonedOrder = originalOrder.clone(false, true, false, false);

            // Customizing the Order
            clonedOrder.Status = 'Created';
            clonedOrder.EffectiveDate = Date.today();
            clonedOrder.QuoteId = null;
            clonedOrder.ERPStatus__c = null;

            // Remove system fields to prevent DML errors
            clonedOrder.Id = null;
            clonedOrder.CreatedDate = null;
            clonedOrder.LastModifiedDate = null;
            clonedOrder.LastModifiedById = null;
            clonedOrder.CreatedById = null;

            // Insert cloned Order
            insert clonedOrder;

            // Get all fields for OrderLineItem dynamically
            Map<String, Schema.SObjectField> oliFieldsMap = Schema.getGlobalDescribe().get('OrderItem').getDescribe().fields.getMap();
            List<String> oliFieldNames = new List<String>();

            for (String fieldName : oliFieldsMap.keySet()) {
                oliFieldNames.add(fieldName);
            }

            // Build dynamic SOQL for OrderLineItems
            String oliQuery = 'SELECT ' + String.join(oliFieldNames, ', ') +
                    ' FROM OrderItem WHERE OrderId = :orderId';

            // Query related OrderLineItems
            List<OrderItem> originalOLIs = Database.query(oliQuery);
            List<OrderItem> clonedOLIs = new List<OrderItem>();

            for (OrderItem oli : originalOLIs) {
                OrderItem clonedOLI = oli.clone(false, true, false, false);
                clonedOLI.OrderId = clonedOrder.Id;  // Reassign to new Order

                // Remove system fields
                clonedOLI.Id = null;
                clonedOLI.CreatedDate = null;
                clonedOLI.LastModifiedDate = null;
                clonedOLI.LastModifiedById = null;
                clonedOLI.CreatedById = null;

                clonedOLIs.add(clonedOLI);
            }

            // Insert cloned OrderLineItems
            if (!clonedOLIs.isEmpty()) {
                insert clonedOLIs;
            }

            // Retrieve the cloned Order with OrderNumber
            clonedOrder = [SELECT Id, OrderNumber FROM Order WHERE Id = :clonedOrder.Id LIMIT 1];

            return clonedOrder;
        } catch (Exception e) {
            System.debug('Error cloning Order: ' + e.getMessage());
            throw new AuraHandledException('Error cloning Order: ' + e.getMessage());
        }
    }
}
