/*-------------------------------------------------------------------------------------------------------
Author: 		Ahmed LOUDRASSI (Salesforce) 20191113
Description:   	Event Trigger Helper Class
History	
20191113 	Ahmed LOUDRASSI			OrderSetAccountOwner triggers. (#)
12092019	Miguel					Added GDW Integration User creation into the setup method
18102020    Miguel                  Added testSetDiscountAllowedforTurkey User Story: #1833
12072024    Roberto                 Added Turkey support
07112024    Omar HANAFI             Fixing the test failures as part of the clean-up project
29012025    Omar HANAFI             Created test method for setShippingAndBillingAddress CPQ-117

--------------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public with sharing class Test_OrderTrigger {
	/*-------------------------------------------------------------------------------------------------------
    Company: Salesforce
    Description: Setup one user for the test class
    History :
    --------------------------------------------------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator'); 
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();        
    }

    @isTest
    private static void testSetup() {
        Test.startTest();
        List<User> testUserList = [SELECT Id FROM User WHERE Alias = 'test1'];
        Test.stopTest();
		
        System.assertEquals(1, testUserList.size(), 'Expected one user');
    }

       
    @isTest
    public static void testGetAddressRecords() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' limit 1];
        List<Account> accounts = TestDataFactory.createAccounts(1, 'CIM_Account', testUser.Id);
        Address__c ad = new Address__c(Name = 'Test', Account__c= accounts.get(0).Id, CustomerNumber__c = '555', CompanyCode__c = '057',Country__c = 'SV', 
                                       Street__c = 'Street', City__c = 'City', PostalCode__c='9809', StateProvince__c = 'Province');

        insert ad;
        List<Order> orders = TestDataFactory.returnOrders(1, 'Direct_global_order', accounts);
		orders[0].ShippingAddress__c = ad.Id;
        Test.startTest();
        insert orders[0];
        Test.stopTest();
        system.assertEquals(ad.City__c ,[SELECT Id, ShippingCity FROM Order WHERE Id =: orders[0].Id LIMIT 1].ShippingCity);
        system.assertEquals(ad.Country__c ,[SELECT Id, ShippingCountry FROM Order WHERE Id =: orders[0].Id LIMIT 1].ShippingCountry);
        system.assertEquals(ad.Street__c ,[SELECT Id, ShippingStreet FROM Order WHERE Id =: orders[0].Id LIMIT 1].ShippingStreet);
        system.assertEquals(ad.PostalCode__c ,[SELECT Id, ShippingPostalCode FROM Order WHERE Id =: orders[0].Id LIMIT 1].ShippingPostalCode);
        system.assertEquals(ad.StateProvince__c ,[SELECT Id, ShippingState FROM Order WHERE Id =: orders[0].Id LIMIT 1].ShippingState);
    }

    @isTest
    public static void testSetShippingAndBillingAddressOnInsert() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        // Create test accounts
        List<Account> accounts = TestDataFactory.createAccounts(1, 'CIM_Account', testUser.Id);

        // Create initial address record
        Address__c shippingAd = new Address__c(
                Name = 'Shipping Address',
                Account__c = accounts[0].Id,
                CustomerNumber__c = '555',
                CompanyCode__c = '057',
                Country__c = 'US',
                Street__c = '123 Main St',
                City__c = 'New York',
                PostalCode__c = '10001',
                StateProvince__c = 'NY'
        );

        Address__c billingAd = new Address__c(
                Name = 'Billing Address',
                Account__c = accounts[0].Id,
                CustomerNumber__c = '555',
                CompanyCode__c = '057',
                Country__c = 'US',
                Street__c = '456 Elm St',
                City__c = 'Los Angeles',
                PostalCode__c = '90001',
                StateProvince__c = 'CA'
        );

        insert new List<Address__c>{ shippingAd, billingAd };

        // Create an Order with the shipping and billing addresses
        List<Order> orders = TestDataFactory.returnOrders(1, 'Advanced_Order', accounts);

        orders[0].RecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Order' AND DeveloperName = 'Advanced_Order' LIMIT 1].Id;
        orders[0].ShippingAddress__c = shippingAd.Id;
        orders[0].BillingAddress__c = billingAd.Id;

        Test.startTest();
        insert orders[0];
        Test.stopTest();

        // Retrieve updated Order
        Order insertedOrder = [SELECT ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry,
                BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry
        FROM Order WHERE Id = :orders[0].Id LIMIT 1];

        // Assert Shipping Address fields
        system.assertEquals(shippingAd.Street__c, insertedOrder.ShippingStreet);
        system.assertEquals(shippingAd.City__c, insertedOrder.ShippingCity);
        system.assertEquals(shippingAd.StateProvince__c, insertedOrder.ShippingState);
        system.assertEquals(shippingAd.PostalCode__c, insertedOrder.ShippingPostalCode);
        system.assertEquals(shippingAd.Country__c, insertedOrder.ShippingCountry);

        // Assert Billing Address fields
        system.assertEquals(billingAd.Street__c, insertedOrder.BillingStreet);
        system.assertEquals(billingAd.City__c, insertedOrder.BillingCity);
        system.assertEquals(billingAd.StateProvince__c, insertedOrder.BillingState);
        system.assertEquals(billingAd.PostalCode__c, insertedOrder.BillingPostalCode);
        system.assertEquals(billingAd.Country__c, insertedOrder.BillingCountry);
    }

    @isTest
    public static void testSetShippingAndBillingAddressOnUpdate() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        // Create test accounts
        List<Account> accounts = TestDataFactory.createAccounts(1, 'CIM_Account', testUser.Id);

        // Create initial address record
        Address__c shippingAd = new Address__c(
                Name = 'Shipping Address',
                Account__c = accounts[0].Id,
                CustomerNumber__c = '555',
                CompanyCode__c = '057',
                Country__c = 'US',
                Street__c = '123 Main St',
                City__c = 'New York',
                PostalCode__c = '10001',
                StateProvince__c = 'NY'
        );

        Address__c billingAd = new Address__c(
                Name = 'Billing Address',
                Account__c = accounts[0].Id,
                CustomerNumber__c = '555',
                CompanyCode__c = '057',
                Country__c = 'US',
                Street__c = '456 Elm St',
                City__c = 'Los Angeles',
                PostalCode__c = '90001',
                StateProvince__c = 'CA'
        );

        insert new List<Address__c>{ shippingAd, billingAd };

        // Create an Order with the shipping and billing addresses
        List<Order> orders = TestDataFactory.returnOrders(1, 'Advanced_Order', accounts);

        orders[0].RecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Order' AND DeveloperName = 'Advanced_Order' LIMIT 1].Id;
        orders[0].ShippingAddress__c = shippingAd.Id;
        orders[0].BillingAddress__c = billingAd.Id;

        insert orders[0];

        // Create a new address to simulate an update
        Address__c newShippingAd = new Address__c(
                Name = 'New Shipping Address',
                Account__c = accounts[0].Id,
                CustomerNumber__c = '555',
                CompanyCode__c = '057',
                Country__c = 'FR',
                Street__c = '789 New St',
                City__c = 'Paris',
                PostalCode__c = '75001',
                StateProvince__c = 'Île-de-France'
        );

        insert newShippingAd;

        // Update order with new shipping address
        orders[0].ShippingAddress__c = newShippingAd.Id;

        Test.startTest();
        update orders[0];
        Test.stopTest();

        // Retrieve updated order again
        Order updatedOrder = [SELECT ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry
        FROM Order WHERE Id = :orders[0].Id LIMIT 1];

        // Assert updated Shipping Address fields
        system.assertEquals(newShippingAd.Street__c, updatedOrder.ShippingStreet);
        system.assertEquals(newShippingAd.City__c, updatedOrder.ShippingCity);
        system.assertEquals(newShippingAd.StateProvince__c, updatedOrder.ShippingState);
        system.assertEquals(newShippingAd.PostalCode__c, updatedOrder.ShippingPostalCode);
        system.assertEquals(newShippingAd.Country__c, updatedOrder.ShippingCountry);
    }


    @isTest
    public static void setERPStopFlag1() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' limit 1];
        List<Account> accounts = TestDataFactory.returnAccounts(6, 'CIM_Account', testUser.Id);
        accounts[0].OneAccount_Type__c = 'Medical';
        accounts[0].Sub_Account_Type__c = 'Public Health';
        accounts[0].Country__c = 'FR';
        
        accounts[1].OneAccount_Type__c = 'Dental Support Organization';
        accounts[1].Sub_Account_Type__c = 'Large Group';
        accounts[1].Country__c = 'FR';

        accounts[2].OneAccount_Type__c = 'Education';
        accounts[2].Sub_Account_Type__c = 'Teaching Hospital';
        accounts[2].Country__c = 'FR';

        accounts[3].OneAccount_Type__c = 'Dental Clinic';
        accounts[3].Sub_Account_Type__c = 'Endodontics';
        accounts[3].Country__c = 'FR';

        accounts[4].OneAccount_Type__c = 'Dental Clinic';
        accounts[4].Sub_Account_Type__c = 'Endodontics';
        accounts[4].Country__c = 'MO';

        accounts[5].OneAccount_Type__c = 'Education';
        accounts[5].Sub_Account_Type__c = 'Teaching Hospital';
        accounts[5].Country__c = 'PL';
        insert accounts;
        List<Pricebook2> pricebooks = TestDataFactory.returnPricebooks(1, 'AAAAatest');
        pricebooks.get(0).ShowPricingfromMicroServiceOM__c = true;
        pricebooks.get(0).ShowShippingAddresses__c = true;
        pricebooks.get(0).StopOrdersinERP__c = true;
        pricebooks.get(0).SendToERPOM__c = true;
        pricebooks.get(0).SourceId__c = '2';
        pricebooks.get(0).CompanyCode__c = '116';
        pricebooks.get(0).Pricebook_Channel__c = 'Direct';
        insert pricebooks;
        
        List<Order> orders = TestDataFactory.returnOrders(7, 'Direct_global_order', accounts);
		orders[0].Pricebook2Id = pricebooks[0].Id;
        orders[0].Communication_to_Customer_Service__c= 'hello';

        orders[1].Pricebook2Id = pricebooks[0].Id;
        orders[1].AccountId = accounts[1].Id;

        orders[2].Pricebook2Id = pricebooks[0].Id;
        orders[2].AccountId = accounts[2].Id;

        orders[3].Pricebook2Id = pricebooks[0].Id;
        orders[3].AccountId = accounts[3].Id;
        orders[3].Communication_to_Customer_Service__c= 'hello';

        orders[4].Pricebook2Id = pricebooks[0].Id;
        orders[4].AccountId = accounts[3].Id;
        
        orders[5].Pricebook2Id = pricebooks[0].Id;
        orders[5].AccountId = accounts[4].Id;
        
        orders[6].Pricebook2Id = pricebooks[0].Id;
        orders[6].AccountId = accounts[5].Id;

        insert orders;
        Test.startTest();
        update orders;
        Test.stopTest();
        System.assertEquals(True, [SELECT Id, ERPStopFlag__c FROM Order WHERE Id =: orders[0].Id LIMIT 1].ERPStopFlag__c);
    }

    

    
    
    @isTest
    public static void testOrderSetAccountOwner() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' limit 1];
        List<Account> accounts1 = TestDataFactory.createAccounts(1, 'CIM_Account', testUser.Id);
        
        List<Order> orders = TestDataFactory.returnOrders(1, 'Free_Good_Order', accounts1);
        Test.startTest();
        insert orders;
        Test.stopTest();

        System.assertEquals(accounts1.get(0).OwnerId, [SELECT Id, Account_Owner__c FROM Order LIMIT 1].Account_Owner__c);
    }
    @isTest
    private static void testSetDiscountAllowedforTurkey() {      
		List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        System.runAs(userList.get(0)){
        	User testUser = [SELECT Id FROM User WHERE Alias = 'test1' limit 1]; 
        	List<Pricebook2> pricebooksList = TestDataFactory.createPricebooks(1, 'TR Implants');
        	List<Product2> productsList = TestDataFactory.createProducts(1);
        	List<Discount_model__c> discountModelList = TestDataFactory.createDiscountModels(1, testUser.Id);
        	pricebooksList.get(0).Discount_Model__c = discountModelList.get(0).Id ; 
        	update pricebooksList ;   
        	List<PricebookEntry> pricebookEntriesList = TestDataFactory.createPricebookEntries(1, pricebooksList, productsList);
        	List<Discount_row__c> drs = TestDataFactory.createDiscountRows(discountModelList.get(0).Id);        
            List<Account> accountsList = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
            List<Order> ordersList = TestDataFactory.returnOrders(1, 'Free_Good_Order', accountsList);
            ordersList.get(0).Pricebook2Id = pricebooksList.get(0).Id;
            ordersList.get(0).Country__c = 'TR';
            ordersList.get(0).Order_Type__c = 'Implants';
            insert ordersList;
            List<OrderItem> orderItemsList = TestDataFactory.returnOrderItems(1, ordersList, pricebookEntriesList);        
            Test.startTest();
            insert orderItemsList;
            Order order= [SELECT Id, Allowed_Discount__c, Allowed_payment_terms_months__c, Payment_type_discount__c FROM Order WHERE Id = :ordersList.get(0).Id];
            System.assertEquals(1, order.Allowed_Discount__c); 
            order.Payment_Type__c = null ; 
            
            Test.stopTest();
            
        }
    }
    @isTest
    private static void testSetDiscountAllowedforTurkey1() {      
		List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        System.runAs(userList.get(0)){
        	User testUser = [SELECT Id FROM User WHERE Alias = 'test1' limit 1]; 
        	List<Pricebook2> pricebooksList = TestDataFactory.createPricebooks(1, 'TR Implants');
        	List<Product2> productsList = TestDataFactory.createProducts(1);
        	List<Discount_model__c> discountModelList = TestDataFactory.createDiscountModels(1, testUser.Id);
        	pricebooksList.get(0).Discount_Model__c = discountModelList.get(0).Id ; 
        	update pricebooksList ;   
        	List<PricebookEntry> pricebookEntriesList = TestDataFactory.createPricebookEntries(1, pricebooksList, productsList);
        	List<Discount_row__c> drs = TestDataFactory.createDiscountRows(discountModelList.get(0).Id);        
            List<Account> accountsList = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
            List<Order> ordersList = TestDataFactory.returnOrders(1, 'Free_Good_Order', accountsList);
            ordersList.get(0).Pricebook2Id = pricebooksList.get(0).Id;
            ordersList.get(0).Country__c = 'TR';
            ordersList.get(0).Order_Type__c = 'Implants';
            insert ordersList;
            List<OrderItem> orderItemsList = TestDataFactory.returnOrderItems(1, ordersList, pricebookEntriesList);        
            Test.startTest();
            insert orderItemsList;
            
            List<Discount_row__c> drToUpdateList = new List<Discount_row__c>{};
            for (Discount_row__c dr: drs){
                dr.Discount_lever__c = 'Payment type'; 
                dr.equals__c = 'DS credit card' ;
                dr.Allowed_Discount__c = 20 ; 
                drToUpdateList.add(dr);
            }
            update drToUpdateList ;
            ordersList.get(0).User_CountryPL__c = 'Turkey' ; 
            ordersList.get(0).Payment_Type__c = 'DS credit card' ; 
            
            update ordersList[0] ;
            Test.stopTest();
            order order= [SELECT Id, Allowed_Discount__c, Allowed_payment_terms_months__c, Payment_type_discount__c FROM Order WHERE Id = :ordersList.get(0).Id];
            System.assertEquals(20, order.Payment_type_discount__c); 
        }
    }
}