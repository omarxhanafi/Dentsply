/*--------------------------------------------------------------------------------------------------------------------------
Author: 		Miguel Coimbra (Salesforce) 2020-06-10
Description:    Order Trigger Helper Class
Test Class:     Test_OrderTrigger
History 
Updated date:   Updated by:     Description:
20231005        Roberto         User Story TFUS-000006097 setERPStopFlag new method created
20230712        Roberto         TFUS-000006293 TFUS-000006294 
20230219		Roberto			TFUS-000006492
20250120        Omar            CPQ-230 - Separation of logic between regular orders and advanced orders (RLM)
--------------------------------------------------------------------------------------------------------------------------*/
public class OrderTriggerHelper {
    /*------------------------------------------------------------  
    Description:    User Story: #1833: Caculate the Allowed Discount for Turkish Orders (Of Type "Implants")
                    This method is called from the Order trigger before updating a new Order and is fired upon adding, editing or deleting 
                    a new Order Item (where the parent is updated) If the code on the Order Item trigger is removed. This logic is no longer called! 
    ------------------------------------------------------------*/
    
    public static void calculateAllowedDiscount(List<Order> ordersList){

        if (ordersList.isEmpty()) return ;

        Set<Id> newOrderIdsSet = (new Map<Id,SObject>(ordersList)).keySet();

        Map<Id, Id> pbId_dmIdMap= new Map<Id,Id>{};

        for (Order o : [SELECT Pricebook2.Discount_Model__c FROM Order WHERE  Country__c = 'TR' AND Order_Type__c = 'Implants' AND Id in: newOrderIdsSet]){
            pbId_dmIdMap.put(o.Pricebook2Id, o.Pricebook2.Discount_Model__c);
        }

        if (pbId_dmIdMap.isEmpty()) return ; 

        final String REVENUE_MATERIALS = 'Revenue: materials';
        final String PAYMENT_TYPE = 'Payment type';
        // Provide all related Discount Rows (associated with the relevant Discount Models 
        List<Discount_row__c> discountRowsList = [SELECT Id, Max__c, Min__c, Discount_Model__c, Discount_lever__c, Equals__c, Allowed_discount__c, Payment_terms_months__c FROM Discount_row__c WHERE
                                                        (Discount_lever__c =: REVENUE_MATERIALS OR Discount_lever__c =: PAYMENT_TYPE ) and Discount_Model__c in: pbId_dmIdMap.Values()];

        for (Order o: ordersList){
            // Order Amount global is calculated with the right value when a field referenced by a Roll Up Summary field is modified. (This happens for instance when a new value is added)
            Double OrderAmountglobal = o.TotalAmount ;
            if (String.isBlank(o.Payment_type__c)){
                o.Payment_type_discount__c = 0 ;
            }else{
                for (Discount_row__c dr: discountRowsList){
                    if (dr.Discount_Model__c == pbId_dmIdMap.get(o.Pricebook2Id) && PAYMENT_TYPE.equals(dr.Discount_Lever__c) && dr.Equals__c == o.Payment_type__c){
                        o.Payment_type_discount__c = dr.Allowed_Discount__c;
                        break ; 
                    }
                }
            }
            
            for (Discount_row__c dr: discountRowsList){
                if (dr.Discount_Model__c == pbId_dmIdMap.get(o.Pricebook2Id) && REVENUE_MATERIALS.equals(dr.Discount_Lever__c) 
                && dr.Max__c >= OrderAmountglobal && dr.Min__c <= OrderAmountglobal){
                    o.Allowed_Discount__c = dr.Allowed_Discount__c ;
                    o.Allowed_payment_terms_months__c = dr.Payment_terms_months__c ;
                    break ; 
                }
            }
        }     
    }
     /*------------------------------------------------------------  
    Description:    Code migrated from OrderSetoAccuntOwner (as a result,  OrderSetAccountOwner.trigger has been removed. )
                    Called before Insert and before Update                    
    Author:    Miguel Coimbra (20200615)
    ------------------------------------------------------------*/

    public static void setAccountOwnerAndRegionalManagerOnOrder(List<Order> newOrdersList){ 
        
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (!Test.isRunningTest() && !settings.OrderSetAccountOwnerIsEnabled__c)
            return; 

        Set<ID> relatedAccountIds = new Set<ID>();
        for (Order o : newOrdersList)
            if (o.AccountId != null)
                relatedAccountIds.add(o.AccountId);
        Map<ID, Account> accountMap = new Map<Id, Account>([SELECT Id, OwnerId, Owner.ManagerId FROM Account WHERE Id IN :relatedAccountIds]);

        for (Order o : newOrdersList)
        {
            if (o.AccountId != null)
            {
                Account a = accountMap.get(o.AccountId);
                if (a != null)
                {
                    o.Account_Owner__c = a.OwnerId; 
                    o.Regional_Manager__c = a.Owner.ManagerId; 
                }
            }
        }
    }

    /*------------------------------------------------------------  
    Description:    This is to apply rules regarding ERP integration
                      
    Author:    Roberto Narbona 2023/10/05
    ------------------------------------------------------------*/

    public static void setERPStopFlag(List<Order> newOrdersList){ 
        
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (!Test.isRunningTest() && !settings.OrderSetAccountOwnerIsEnabled__c)
            return; 

        Set<ID> relatedAccountIds = new Set<ID>();
        Set<ID> relatedPricebookIds = new Set<ID>();
        for (Order o : newOrdersList){
            if (o.AccountId != null)
                relatedAccountIds.add(o.AccountId);
            if (o.Pricebook2Id != null)
                relatedPricebookIds.add(o.Pricebook2Id);
        }
            
        Map<ID, Account> accountMap = new Map<Id, Account>([SELECT Id, Country__c, OneAccount_Type__c, Sub_Account_Type__c FROM Account WHERE Id IN :relatedAccountIds]);
        Map<ID, Pricebook2> pricebook2Map = new Map<Id, Pricebook2>([SELECT Id, CompanyCode__c, SendToERPOM__c, StopOrdersinERP__c FROM Pricebook2 WHERE Id IN :relatedPricebookIds]);


        
        for (Order o : newOrdersList)
        {
            Account account = new Account();
            CountryStopRules__mdt countryRules = new CountryStopRules__mdt();
            if (o.AccountId != null)
            {
                account = accountMap.get(o.AccountId);
                countryRules = CountryStopRules__mdt.getInstance(account.Country__c);
            }
            Pricebook2 orderPriceBook = new Pricebook2();
            if (o.Pricebook2Id != null){
                orderPriceBook = pricebook2Map.get(o.Pricebook2Id);
            }
            o.ERPStopFlag__c = false;
            if (account != null && orderPriceBook != null && orderPriceBook.SendToERPOM__c == true && countryRules != null)
                {
                    o.ERPStopFlag__c = calculateStopFlags(account, o, countryRules, orderPriceBook);
                }
            
        }
    }

    //This is to check if a quote can be create or if it should be etop in ERP for human interaction in ERP side
    public static Boolean calculateStopFlags(Account account, Order order, CountryStopRules__mdt countryRule, Pricebook2 pricebook){
        if(calculateSetFlag(account, countryRule, 'Set Flag'))
            return(true);
        if(countryRule.NotFranceIn116__c == true && account.Country__c != 'FR' && pricebook.CompanyCode__c == '116')
            return(true);  
        if(countryRule.HasOfferCode__c == true && order.Count_Offer_Codes__c > 0)
            return(true);
        if(countryRule.HasDiscount__c == true && order.Discount_Applied__c > 0)
            return(true);
        if(countryRule.HasParentKitProducts__c == true && order.ParentKitProduct__c > 0)
            return(true);
        if(countryRule.HasCustomerServiceCommunication__c == true && order.Communication_to_Customer_Service__c != null && order.Communication_to_Customer_Service__c != '')
            return(true);
        if(countryRule.HasPricebookStopOrder__c == true && pricebook.StopOrdersinERP__c == true)
            return(true);
        return(false);

    }

    
    
    /*------------------------------------------------------------  
    Description:    here are the account rules to calculate the ERP flag or not allow the order
                      
    Author:    Roberto Narbona 2023/13/07
    ------------------------------------------------------------*/
    public static Boolean calculateSetFlag(Account account, CountryStopRules__mdt countryRule, String stopQuoteOrSetFlag){
        if(calculateSetFlag(countryRule.MedicalPublic__c, stopQuoteOrSetFlag) == true  && isMedicalPublic(account) == true )
            return(true);
        if(calculateSetFlag(countryRule.EducationPublic__c, stopQuoteOrSetFlag) == true && isEducational(account) == true)
            return(true);
        if(calculateSetFlag(countryRule.DentalSupportOrganization__c, stopQuoteOrSetFlag) == true  && account.OneAccount_Type__c == 'Dental Support Organization' )
            return(true);             
        if(calculateSetFlag(countryRule.IsMedicalGeneral__c, stopQuoteOrSetFlag) == true  && account.OneAccount_Type__c == 'Medical' && account.Sub_Account_Type__c == 'General Hospital')
            return(true);
        return(false);
    }

    /*------------------------------------------------------------  
    Description:    here check if account is public medical
                      
    Author:    Roberto Narbona 2023/13/07
    ------------------------------------------------------------*/
    public static Boolean isMedicalPublic(Account account){
        if( account.OneAccount_Type__c == 'Medical' && (account.Sub_Account_Type__c == 'Private Hospital' || account.Sub_Account_Type__c == 'Public Health' ))
            return(true);
        return(false);
    }

    /*------------------------------------------------------------  
    Description:    here is to check if account is educational hospital or school
                      
    Author:    Roberto Narbona 2023/13/07
    ------------------------------------------------------------*/
    public static Boolean isEducational(Account account){
        
        if(account.OneAccount_Type__c == 'Education' && (account.Sub_Account_Type__c == 'Teaching Hospital' || account.Sub_Account_Type__c == 'Dental School'))
            return(true);
        return(false);
    }

    
    /*------------------------------------------------------------  
    Description:    here is to set if we need to evaluate the rule to Set Flag or rules to Stop Order creatation
                      
    Author:    Roberto Narbona 2023/13/07
    ------------------------------------------------------------*/
    public static Boolean calculateSetFlag(String fieldValue, String stopQuoteOrSetFlag){
        if(stopQuoteOrSetFlag == 'Set Flag' && (fieldValue == 'Set Flag' || fieldValue == 'Stop Order'))
            return(true);
        if(stopQuoteOrSetFlag == 'Stop Order' && fieldValue == 'Stop Order')
            return(true);
        return(false);
    }


    /*------------------------------------------------------------  
    Description:    This is to apply rules regarding ERP integration
                      
    Author:    Roberto Narbona 2023/10/05
    ------------------------------------------------------------*/

    public static void setShipmentAddress(List<Order> newOrdersList){ 
        
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (!Test.isRunningTest() && !settings.OrderSetAccountOwnerIsEnabled__c)
            return; 

        Set<ID> relatedShipmentAddressIds = new Set<ID>();

        for (Order o : newOrdersList){
            if (o.ShippingAddress__c != null)
            relatedShipmentAddressIds.add(o.ShippingAddress__c);
            
        }
            
        Map<ID, Address__c> addressMap = new Map<Id, Address__c>([SELECT Id, Street__c, City__c, StateProvince__c, PostalCode__c, Country__c FROM Address__c WHERE Id IN :relatedShipmentAddressIds]);

        for (Order o : newOrdersList)
        {
            Address__c addres = new Address__c();
            if (o.ShippingAddress__c != null)
            {
                addres = addressMap.get(o.ShippingAddress__c);
            }

            if(addres != null && o.ShippingAddress__c != null ){
                o.ShippingStreet = addres.Street__c;
                o.ShippingCity = addres.City__c;
                o.ShippingState = addres.StateProvince__c;
                o.ShippingPostalCode = addres.PostalCode__c;
                o.ShippingCountry = addres.Country__c;
            }
        }
    }

    /**
     * Sets the Shipping and Billing Address fields on Order records based on related Address__c records.
     *
     * @param newOrdersList List of Order records being inserted or updated.
     * @param oldOrderMap (Optional) Map of old Order records before the update.
     */
    public static void setShippingAndBillingAddress(List<Order> newOrdersList, Map<Id, Order> oldOrderMap) {
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (!Test.isRunningTest() && !settings.OrderSetAccountOwnerIsEnabled__c)
            return;

        // Collect all related Address IDs (both Shipping and Billing)
        Set<ID> relatedAddressIds = new Set<ID>();
        for (Order o : newOrdersList) {
            // In the case of an update, check if Shipping/Billing addresses have changed
            if (oldOrderMap != null && oldOrderMap.containsKey(o.Id)) {
                Order oldOrder = oldOrderMap.get(o.Id);
                if (o.ShippingAddress__c != oldOrder.ShippingAddress__c) {
                    relatedAddressIds.add(o.ShippingAddress__c);
                }
                if (o.BillingAddress__c != oldOrder.BillingAddress__c) {
                    relatedAddressIds.add(o.BillingAddress__c);
                }
            } else { // In the case of an insert: Always add
                if (o.ShippingAddress__c != null) {
                    relatedAddressIds.add(o.ShippingAddress__c);
                }
                if (o.BillingAddress__c != null) {
                    relatedAddressIds.add(o.BillingAddress__c);
                }
            }
        }

        // Query all related Address records
        if (relatedAddressIds.isEmpty()) return; // No changes, no need to query

        Map<ID, Address__c> addressMap = new Map<ID, Address__c>([
                SELECT Id, Street__c, City__c, StateProvince__c, PostalCode__c, Country__c
                FROM Address__c
                WHERE Id IN :relatedAddressIds
        ]);

        // Update Shipping and Billing Address fields on Orders
        for (Order o : newOrdersList) {
            // BeforeUpdate: Only update if changed
            Boolean isUpdate = oldOrderMap != null && oldOrderMap.containsKey(o.Id);
            Order oldOrder = isUpdate ? oldOrderMap.get(o.Id) : null;

            // Update Shipping Address if changed or if it's an insert
            if (!isUpdate || o.ShippingAddress__c != oldOrder.ShippingAddress__c) {
                Address__c shippingAddress = addressMap.get(o.ShippingAddress__c);
                if (shippingAddress != null) {
                    o.ShippingStreet = shippingAddress.Street__c;
                    o.ShippingCity = shippingAddress.City__c;
                    o.ShippingState = shippingAddress.StateProvince__c;
                    o.ShippingPostalCode = shippingAddress.PostalCode__c;
                    o.ShippingCountry = shippingAddress.Country__c;
                }
            }

            // Update Billing Address if changed or if it's an insert
            if (!isUpdate || o.BillingAddress__c != oldOrder.BillingAddress__c) {
                Address__c billingAddress = addressMap.get(o.BillingAddress__c);
                if (billingAddress != null) {
                    o.BillingStreet = billingAddress.Street__c;
                    o.BillingCity = billingAddress.City__c;
                    o.BillingState = billingAddress.StateProvince__c;
                    o.BillingPostalCode = billingAddress.PostalCode__c;
                    o.BillingCountry = billingAddress.Country__c;
                }
            }

            // If the related address is null, we empty the address fields
            if (o.ShippingAddress__c == null){
                o.ShippingStreet = null;
                o.ShippingCity = null;
                o.ShippingState = null;
                o.ShippingPostalCode = null;
                o.ShippingCountry = null;
            }

            if (o.BillingAddress__c == null){
                o.BillingStreet = null;
                o.BillingCity = null;
                o.BillingState = null;
                o.BillingPostalCode = null;
                o.BillingCountry = null;
            }
        }
    }


    /*------------------------------------------------------------  
    Description:    Method to evaluate approvals based on underlying order rows
                    Called after Insert and after Update                    
    Author:         Richard Trum (20220313)
    ------------------------------------------------------------*/

    public static void evaluateOrderLineApproval(List<Order> newOrdersList, Map<Id, Order> newOrdersMap){ 
        
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (!Test.isRunningTest() && !settings.OrderSetAccountOwnerIsEnabled__c){
            return; 
        }    

        Map<Id, Order> ordersMap = new Map<Id, Order>([SELECT Id, ApprovalLevelInt__c, UsedCouponsValue__c, Order_Amount_global__c, Total_Order_Discount__c, SourceRecord__c, SourceRecord__r.Source_Id__c, Pricebook2.SourceId__c, (SELECT Id, Quantity, UseCoupon__c, Offer_code_dna__c, Offer_code_dna__r.QuantityLimit__c, Total_Line_Item_Price__c, ApprovalLevelInt__c, PricebookEntry.Primary__c, PricebookEntry.ApprovalLevel1__c, PricebookEntry.ApprovalLevel2__c, PricebookEntry.ApprovalLevel3__c FROM OrderItems) FROM Order WHERE Id IN: newOrdersMap.keySet()]);

        for(Order o: newOrdersList){

            List<OrderItem> items = ordersMap.get(o.Id).OrderItems;
            Decimal approvalLevel = 0;

            Decimal secondaryOrderValue = 0;
            Decimal secondaryLevelOne = 0;
            Decimal secondaryLevelTwo = 0;
            Decimal secondaryLevelThree = 0;
            
            for(OrderItem n : items){
                
                if(n.PricebookEntry.Primary__c == false && (n.UseCoupon__c == false || (o.UsedCouponsValue__c > o.Order_Amount_global__c))){
                    if(n.Offer_code_dna__c == null || n.Offer_code_dna__r.QuantityLimit__c < n.Quantity){
                        secondaryOrderValue = secondaryOrderValue + Integer.valueOf(n.Total_Line_Item_Price__c);
                        
                        if(n.PricebookEntry.ApprovalLevel1__c != null){
                            secondaryLevelOne = secondaryLevelOne + n.PricebookEntry.ApprovalLevel1__c * n.Quantity;
                            secondaryLevelTwo = secondaryLevelTwo + n.PricebookEntry.ApprovalLevel2__c * n.Quantity;
                            secondaryLevelThree = secondaryLevelThree + n.PricebookEntry.ApprovalLevel3__c * n.Quantity;
                        }
                    }
                }

            }
            
            Decimal secondaryApprovalLevel = 0;

            //Only evaluate for order that do have products with an approval level assigned
            if(secondaryLevelOne != 0){            
            if(secondaryOrderValue < secondaryLevelOne){
                if(secondaryOrderValue < secondaryLevelTwo){
                    if(secondaryOrderValue < secondaryLevelThree){
                        secondaryApprovalLevel = 3;
                    }
                    else{
                        secondaryApprovalLevel = 2;
                    }
                }
                else{
                    secondaryApprovalLevel = 1;
                }
            }
            }

            o.ApprovalLevelSecondaryInt__c = secondaryApprovalLevel;

            for(OrderItem i : items){

                if(i.PricebookEntry.Primary__c == true){
            
                    if(i.ApprovalLevelInt__c > approvalLevel){
                        approvalLevel = i.ApprovalLevelInt__c;
                    }
                }
            }

            if(secondaryApprovalLevel > approvalLevel){
                approvalLevel = secondaryApprovalLevel;
            }
                
            //Adjust approval levels in case the discount percentage is high but the discount value is low
            	
                String sourceId = ordersMap.get(o.Id).Pricebook2.SourceId__c;
                
                if(sourceId == '1'){
                    
                    if(o.Total_Order_Discount__c <10000 && approvalLevel > 3){
                        approvalLevel = 3;
                    }
                    if(o.Total_Order_Discount__c <2000 && approvalLevel >2){
                        approvalLevel = 2;
                    }
                    if(o.Total_Order_Discount__c < 1000 && approvalLevel > 1){
                        approvalLevel = 1;
                    }
                    
                }
                
               	if(sourceId == '2'){
                    if(o.Total_Order_Discount__c <3500 && approvalLevel > 3){
                        approvalLevel = 3;
                    }
                    if(o.Total_Order_Discount__c <900 && approvalLevel > 2){
                        approvalLevel = 2;
                    }
                    if(o.Total_Order_Discount__c < 500 && approvalLevel > 1){
                        approvalLevel = 1;
                    }
                }

                //Check if shipping is for free

                if(o.Waive_Shipping_Charges__c == true && approvalLevel == 0){
                    approvalLevel = 1;
                }
                

            o.ApprovalLevelInt__c = approvalLevel;
        }

    }

}