/*-------------------------------------------------------------------------------------------------------
Author: 		LOUDRASSI Ahmed (Salesforce) 2020-02-25
Description:    OrderItem Trigger Helper Class
Test Class:     
History 
Kevin Ruibin Do 20210419    Updated totalAmountOfSamplesAndFreeProducts to also set value when there are no free products
Richard Trum	20200804	Changed setDiscountAllowedforTurkey to use the Contract field Discount__c instead of Discount_End_year__c
Miguel Coimbra	20200511	Added descriptions
Roberto Narbona 20231218    TFUS-000006230 ne method setOfferCodeAppliedNumber
Roberto			20240219	TFUS-000006492
----------------------------------------------------------------------------------------*/
public class OrderItemTriggerHelper {
    /*------------------------------------------------------------  
    Description:    define Order Discount Percent to max 100 (as per logic defined on Order Management 2.0)
    Inputs:         @param newOrderItemList
    ------------------------------------------------------------*/
    public static void set100PercentForFOC(List<OrderItem> newOrderItemtList) {
        Set<ID> orderIds = new Set<ID>();
        for(OrderItem orderItem: newOrderItemtList) {
            orderIds.add(orderItem.OrderId);
        }
        Map<Id,Order> parentOrders = new Map<ID, Order>([SELECT Id, Pricebook2Id, Pricebook_Name__c, Pricebook2.ShowApprovalLevelOrderLine__c FROM Order WHERE ID IN :orderIds]); 
        for (OrderItem orderItem: newOrderItemtList) {
            Order parentOrder = parentOrders.get(orderItem.OrderId);
            if (parentOrder.Pricebook2Id != null && (String.isNotBlank(orderItem.Free_of_Charge_Delivery__c) || (orderItem.UseCoupon__c == true && orderItem.AvailableCouponCode__c != null))) { //|| (parentOrder.Pricebook2.ShowApprovalLevelOrderLine__c == true && orderItem.Offer_code_dna__c != null)
                orderItem.Discount_Percent__c = 100;
            }

            if(String.isNotBlank(parentOrder.Pricebook2Id) && (orderItem.UseCoupon__c == true && orderItem.AvailableCouponCode__c == null) ){
                orderItem.Discount_Percent__c = 0;
                orderItem.UseCoupon__c = false;
            }

        }
    }
    /*------------------------------------------------------------  
    Description:   
    Inputs:         @param newOrderItemList
    ------------------------------------------------------------*/
    public static void totalAmountOfSamplesAndFreeProducts(List<OrderItem> newOrderItemtList) { 
        for(OrderItem orderItem: newOrderItemtList) {
            setOfferCodeAppliedNumber(orderItem);
            if(orderItem.Quantity > 0) {
                // Amount Samples
                if(String.isBlank(orderItem.Account_for_Sample_in_AX__c)) {
                    orderItem.Value_of_Samples_for_Sales_Rep__c = 0;
                } else {
                    orderItem.Value_of_Samples_for_Sales_Rep__c = orderItem.UnitPrice * orderItem.Quantity;
                }
                // Value of Free Products
                if(orderItem.Discount_Percent__c == 100) {
                    orderItem.Value_of_free_product__c = orderItem.UnitPrice * orderItem.Quantity;
                } else {
                    orderItem.Value_of_free_product__c = 0;
                }
            }
        } 
    }
    
    /*------------------------------------------------------------  
    Description:   Check if there is an offer code if yes set offer code applied number to 1
                   Migrate prcess builder entries "Offer Code selected" and "Offer Code Deselected"
    Inputs:         @param orderItem
    ------------------------------------------------------------*/
    public static void setOfferCodeAppliedNumber(OrderItem orderItem) { 
        orderItem.Offer_Code_Applied_Number__c = String.isBlank(orderItem.Offer_Code_dna__c) ? 0 : 1;
    }

    	
    /*------------------------------------------------------------  
    Description:    
    Inputs:         @param newOrderItemList
    ------------------------------------------------------------*/
    public static void orderProductEvaluation(List<OrderItem> newOrderItemtList) { 
        Set<ID> orderIds = new Set<ID>();
        for(OrderItem orderItem: newOrderItemtList) {
            orderIds.add(orderItem.OrderId);
        }
        Map<Id,Order> parentOrders = new Map<ID, Order>([SELECT Id, User_CountryPL__c FROM Order WHERE ID IN :orderIds]); 
        for(OrderItem orderItem: newOrderItemtList) {
            if(String.isNotBlank(parentOrders.get(orderItem.OrderId).User_CountryPL__c)) {
                // ORDER: Update SIMPLANT Evaluation
                orderItem.SIMPLANT_Line_Item__c = 'SIMPLANT'.equals(orderItem.PricebookEntry.Product2.Brand__c) ? 1 : 0;
                // ORDER: Update MTF Evaluation
                orderItem.MTF_EvaluationNumber__c = orderItem.MTF_Evaluation__c == 1 ? 1 : 0;
                // ORDER: Discount Approval Evaluation
                orderItem.DiscountApproval_Line_Item__c  = 'NO APPROVAL NEEDED'.equals(orderItem.Discount_Approval_Eval__c) ? 0 : 1; 
                // ORDER: Update NON-SIMPLANT Evaluation
                orderItem.Non_SIMPLANT_Evaluation__c = 'SIMPLANT'.equals(orderItem.PricebookEntry.Product2.Brand__c) ? 0 : 1;
                // SIMPLANT Software Line Item Eval
                orderItem.SIMPLANT_Software_Line_Item__c = orderItem.SIMPLANT_Software_Evaluation__c;
                // Update # of Items at 100% Discount
                orderItem.Number_of_Items_at_100_Discount__c = orderItem.Item_at_100__c;
            }
        }
    }
    /*------------------------------------------------------------  
    Description:    Method migrated from Process Builder on Order Product 
    Inputs:         @param newOrderItemList
    ------------------------------------------------------------*/
    public static void setDiscountAllowedforTurkey(List<OrderItem> newOrderItemtList) { 
        Set<ID> orderIds = new Set<ID>();
        for(OrderItem orderItem: newOrderItemtList) {
            orderIds.add(orderItem.OrderId);
        }
        Map<Id,Order> parentOrders = new Map<ID, Order>
            ([SELECT Id, Pricebook2Id, Country__c, Discount_to_be_used__c, 
              Allowed_discount__c, Order_Type__c, Contract.Discount_End_year__c, Contract.Discount__c FROM Order WHERE ID IN :orderIds]); 
        Map<Id,Order> ordersToUpdate = new Map<Id,Order> ();
        for(OrderItem orderItem: newOrderItemtList) {
            Order parentOrder = parentOrders.get(orderItem.OrderId);
            if('TR'.equals(parentOrder.Country__c) &&
              	String.isNotBlank(parentOrder.Pricebook2Id) &&
              	'Implants'.equals(parentOrder.Order_Type__c)) {
               	if(String.isNotBlank(parentOrder.ContractId)) {
                	parentOrder.Discount_to_be_used__c = parentOrder.Contract.Discount__c;
                } else {
                    parentOrder.Discount_to_be_used__c = 0;
                }
                if(!ordersToUpdate.containsKey(parentOrder.Id)) {
                    ordersToUpdate.put(parentOrder.Id, parentOrder);
                }
            }
        }
        update ordersToUpdate.values();
    }
    /*Set if product is related with parent kit */
    public static void setParentKitProduct(List<OrderItem> newOrderItemtList) { 
        Set<ID> productsIds = new Set<ID>();
        for(OrderItem orderItem: newOrderItemtList) {
            productsIds.add(orderItem.Product2Id);
        }
        Map<Id,Product2> parentProducts = new Map<ID, Product2>([SELECT Id, ParentKit__c FROM Product2 WHERE ID IN :productsIds]); 
        for(OrderItem orderItem: newOrderItemtList) {
            orderItem.ParentKit__c = parentProducts.get(orderItem.Product2Id).ParentKit__c;
        }
    }
    
    /*Set Floor Price */
    public static void setFloorPrice(List<OrderItem> newOrderItemtList) { 
        Set<ID> pricebookEntryIds = new Set<ID>();
        for(OrderItem orderItem: newOrderItemtList) {
            pricebookEntryIds.add(orderItem.PricebookEntryId);
        }
        Map<Id,PricebookEntry> pricebookEntries = new Map<ID, PricebookEntry>([SELECT Id, FloorPrice__c FROM PricebookEntry WHERE ID IN :pricebookEntryIds]); 
        for(OrderItem orderItem: newOrderItemtList) {
            Decimal floorPrice = pricebookEntries.get(orderItem.PricebookEntryId).FloorPrice__c;
            if(! String.isBlank(String.Valueof(floorPrice))){
            	orderItem.TotalFloorPrice__c = floorPrice * orderItem.Quantity;
            	orderItem.FloorPrice__c = floorPrice;
            	orderItem.TotalFloorPriceDeviation__c = (orderItem.SalesPrice__c - floorPrice) * orderItem.Quantity;
            }
        }
    }

}