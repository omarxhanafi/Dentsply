/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Helper class to calculate margins and update order items.
 * @Test-Class      Test_AssignMarginGuidanceHelper
 *
 * @History
 * 15-02-2023   Omar     Created AssignMarginGuidanceHelper class
 * 17-04-2023   Omar     TFUS-000005556 - Added new logic for Canada (using the region code instead of area code)
 */

public with sharing class AssignMarginGuidanceHelper {

    // Custom exception for error handling
    private class AssignMarginGuidanceCustomException extends Exception {}

    /**
         * calculateMargin      Calculate margins and update order items based on a given order.
         * @author ohanafi@salesforce.com | 15-02-2023
         *
         * @param orderId - The ID of the order to calculate margins for.
         *
         */
    public static void calculateMargin(Id orderId) {
        // Get the order and its related line items
        system.debug('k0');
        Order order = [
                SELECT Id, Account.DC_ETM_Code__c, Account.Country__c, AccountId, Pricebook2.MarginGuidanceCalculation__c, (SELECT Id, Product2Id, Quantity, ListPrice, TotalPrice, SalesPrice__c, MarginGuidance__c, PricebookEntry.FloorPrice__c FROM OrderItems)
                FROM Order
                WHERE Id = :orderId
        ];

        if (!order?.Pricebook2?.MarginGuidanceCalculation__c && !order?.OrderItems.isEmpty()) {
            system.debug('k1');
            // SKIP if Pricebook2.MarginGuidanceCalculation__c = false or no order items
            return;
        }

        // Init the area code / product id set
        String areaRegionCode;
        Set<Id> productIdSet = new Set<Id>();

        // If the account's country is Canada, We look for the region code through territory management
        if(order?.Account?.Country__c == 'CA'){
            areaRegionCode = getRegionCodeFromOrder(order);
        } else { // Otherwise we get the area code directly from the etm code of the account
            areaRegionCode = order?.Account?.DC_ETM_Code__c != null ? order?.Account?.DC_ETM_Code__c.substring(0, 3) : '';
        }

        // Generating the area code / product id sets
        for (OrderItem eachOrderItem : order.OrderItems) {
            productIdSet.add(eachOrderItem.Product2Id);
        }

        // Getting the global margin guidance list
        List<MarginGuidance__c> marginGuidanceList = [
                SELECT Id, AreaCode__c, Product__c, Cost__c, Lowerguidance__c, UpperGuidance__c
                FROM MarginGuidance__c
                WHERE AreaCode__c = :areaRegionCode
                OR AreaCode__c = 'All'
                OR Product__c IN :productIdSet
        ];

        // Generating the Order Item / Margin Guidance Map
        Map<OrderItem, MarginGuidance__c> orderItemMarginGuidanceMap = generateOrderItemMarginGuidanceMap(areaRegionCode, order, marginGuidanceList);

        // Calculate the total price sum
        Decimal totalPriceSum = 0;
        for (OrderItem eachOrderItem : orderItemMarginGuidanceMap.keySet()) {
            totalPriceSum += eachOrderItem.TotalPrice;
        }

        // Calculating margins for the order items
        if(totalPriceSum > 0){
            updateOrderItems(orderItemMarginGuidanceMap, totalPriceSum);
        }

        // Update list of order items
        try {
            update new List<OrderItem>(orderItemMarginGuidanceMap.keySet());
        } catch (Exception e){
            DebugLog.addException(e, e.getMessage());
            throw new AssignMarginGuidanceCustomException(e.getMessage());
        }

    }

    /**
         * getRegionCodeFromOrder     Get the region code from an order based on ETM (For Canada orders).
         * @author ohanafi@salesforce.com | 17-04-2023
         *
         * @param
         *                  order - The Order record to generate the map for.
         *
         * @return          The region code
         *
         */
    private static String getRegionCodeFromOrder(Order order) {
        // Getting a list of all territories related to the account id
        List<ObjectTerritory2Association> objectTerritoryAssociations = [
                SELECT Territory2Id
                FROM ObjectTerritory2Association
                WHERE ObjectId = :order.AccountId
        ];

        Set<Id> territoryIdSet = new Set<Id>();

        for (ObjectTerritory2Association eachAssociation : objectTerritoryAssociations) {
            territoryIdSet.add(eachAssociation.Territory2Id);
        }

        // We get a list of all users based on the list of territories and the role Sales Rep (Impl)
        List<UserTerritory2Association> usersInTerritoryList = [
                SELECT Territory2.Name
                FROM UserTerritory2Association
                WHERE Territory2Id IN :territoryIdSet AND RoleInTerritory2 = 'Sales Rep (IMPL)'
        ];

        if (!usersInTerritoryList.isEmpty()) {
            String territoryName = usersInTerritoryList[0].Territory2.Name;

            // Find the index of the region code's starting position
            Integer start = !String.isEmpty(territoryName) ? territoryName.indexOf('RBM') : -1;

            if (start != -1) {
                // Extract the region code
                return territoryName.substring(start, start + 5);
            }
        }

        return null;
    }

    /**
         * updateOrderItems     Update order items with MarginGuidance fields.
         * @author ohanafi@salesforce.com | 17-02-2023
         *
         * @param           orderItemMarginGuidanceMap - A map of OrderItem records and their associated MarginGuidance__c records.
         *                  totalPriceSum - The sum of the TotalPrice fields of all OrderItem records.
         *
         */
    private static void updateOrderItems(Map<OrderItem, MarginGuidance__c> orderItemMarginGuidanceMap, Decimal totalPriceSum) {
        // Loop through each order line item
        for (OrderItem eachOrderItem : orderItemMarginGuidanceMap.keySet()) {
            // Get the margin guidance associated to the order item record
            MarginGuidance__c eachMarginGuidance = orderItemMarginGuidanceMap.get(eachOrderItem);

            // Update the order item fields
            eachOrderItem.Weight__c = eachOrderItem.ListPrice * eachOrderItem.Quantity / totalPriceSum;
//            eachOrderItem.Margin__c = (eachOrderItem.ListPrice - eachMarginGuidance.Cost__c) / eachOrderItem.ListPrice;
//            eachOrderItem.Margin__c = (eachOrderItem.TotalPrice - (eachMarginGuidance.Cost__c * eachOrderItem.Quantity)) / eachOrderItem.TotalPrice;
            eachOrderItem.Margin__c = (eachOrderItem.SalesPrice__c > 0) ? (eachOrderItem.SalesPrice__c - eachMarginGuidance.Cost__c) / eachOrderItem.SalesPrice__c :
                    -1 * (eachOrderItem.ListPrice - eachMarginGuidance.Cost__c) / eachOrderItem.ListPrice;
//            eachOrderItem.WeightedMargin__c = eachOrderItem.Margin__c * eachOrderItem.Weight__c;
            eachOrderItem.UpperGuidance__c = eachMarginGuidance.UpperGuidance__c;
            eachOrderItem.LowerGuidance__c = eachMarginGuidance.LowerGuidance__c;

            eachOrderItem.WeightedUpperGuidance__c = ((eachMarginGuidance.UpperGuidance__c / 100) * eachOrderItem.Weight__c);
            eachOrderItem.WeightedLowerGuidance__c = ((eachMarginGuidance.LowerGuidance__c / 100) * eachOrderItem.Weight__c);

            eachOrderItem.TotalCost__c = eachMarginGuidance.Cost__c * eachOrderItem.Quantity;
            eachOrderItem.Cost__c = eachMarginGuidance.Cost__c;
            /*if(! String.isBlank(String.Valueof(eachOrderItem.PricebookEntry.FloorPrice__c))){
            	eachOrderItem.TotalFloorPrice__c = eachOrderItem.PricebookEntry.FloorPrice__c * eachOrderItem.Quantity;
            	eachOrderItem.FloorPrice__c = eachOrderItem.PricebookEntry.FloorPrice__c;
            	eachOrderItem.TotalFloorPriceDeviation__c = (eachOrderItem.SalesPrice__c - eachOrderItem.PricebookEntry.FloorPrice__c) * eachOrderItem.Quantity;
            }*/

            // Associate margin guidance to the order item
            eachOrderItem.MarginGuidance__c = eachMarginGuidance.Id;
        }
    }

    /**
         * generateOrderItemMarginGuidanceMap     Generate a map of OrderItem records and their associated MarginGuidance__c records based on a given order and a list of MarginGuidance__c records.
         * @author ohanafi@salesforce.com | 16-02-2023
         *
         * @param
         *                  areaRegionCode - Area or Region code of the order's account.
         *                  order - The Order record to generate the map for.
         *                  marginGuidanceList - A list of MarginGuidance__c records to use for mapping.
         *
         * @return          A map of OrderItem records and their associated MarginGuidance__c records.
         *
         */
    private static Map<OrderItem, MarginGuidance__c> generateOrderItemMarginGuidanceMap(String areaRegionCode, Order order, List<MarginGuidance__c> marginGuidanceList) {
        // Init Order Item / Margin Guidance Map
        Map<OrderItem, MarginGuidance__c> orderItemMarginGuidanceMap = new Map<OrderItem, MarginGuidance__c>();

        for (OrderItem eachOrderItem : order.OrderItems) {
            Id itemProductId = eachOrderItem.Product2Id;

            for (MarginGuidance__c eachMarginGuidance : marginGuidanceList) {
                // We check if there's a margin guidance record with both matching area code and product id
                if (eachMarginGuidance.AreaCode__c == areaRegionCode && eachMarginGuidance.Product__c == itemProductId) {
                    orderItemMarginGuidanceMap.put(eachOrderItem, eachMarginGuidance);
                    break;

                    // Else we only check for the product id
                } else if (eachMarginGuidance.Product__c == itemProductId && eachMarginGuidance.AreaCode__c == 'All') {
                    orderItemMarginGuidanceMap.put(eachOrderItem, eachMarginGuidance);
                }
            }
        }

        return orderItemMarginGuidanceMap;
    }

}