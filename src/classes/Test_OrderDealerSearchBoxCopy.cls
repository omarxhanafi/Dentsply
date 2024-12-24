/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for OrderDealerSearchBoxCopy.
 *
 * @History
 * 28-11-2024   Omar     Created test class
 */

@isTest
public class Test_OrderDealerSearchBoxCopy {

    /**
    * Test method for getOrdersByAccountId
    */
    @testSetup
    private static void setupTestData() {

        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create test Accounts
        List<Account> testAccounts = TestDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id);
        testAccounts[0].Name = 'Test Account 1';
        testAccounts[0].Country__c = 'US';
        testAccounts[0].OneAccount_Type__c = 'Distributor';
        insert testAccounts;

        // Create test Product, Pricebook and Pricebook Entry
        List<Pricebook2> testPriceBooks = TestDataFactory.createPricebooks(1, 'Turkey PREP Pricebook');
        List<Product2> testProducts = TestDataFactory.createProducts(1);
        List<PricebookEntry> testPricebookEntries = TestDataFactory.createPricebookEntries(1, testPriceBooks, testProducts);

        // Create test Order
        List<Order> testOrders = TestDataFactory.returnOrders(1, 'Direct_global_order', new List<Account>{testAccounts[0]});
        testOrders[0].Name = 'Test Order 1';
        testOrders[0].EffectiveDate = Date.today();
        testOrders[0].Pricebook2Id = testPriceBooks[0].Id;
        insert testOrders;

        // Create test Order Item
        List<OrderItem> orderItems = TestDataFactory.returnOrderItems(1, testOrders, testPricebookEntries);
        insert orderItems;

        // Create Preferred Dealer Items for Account 1
        Preferred_dealer_item__c dealer1 = new Preferred_dealer_item__c(Account__c = testAccounts[0].Id, Dealer__c = testAccounts[0].Id, Default_dealer__c = true);
        insert dealer1;
    }

    /**
    * Test method for saveDealer
    */
    @isTest
    private static void testSaveDealer() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch test data
            Account testAccount = [SELECT Id FROM Account WHERE Name = 'Test Account 1' LIMIT 1];
            Order order1 = [SELECT Id FROM Order WHERE Name = 'Test Order 1' LIMIT 1];

            Test.startTest();
            // Invoke saveDealer method
            List<Preferred_dealer_item__c> result = OrderDealerSearchBoxCopy.saveDealer(new List<Account>{testAccount}, order1.Id);
            Test.stopTest();

            // Assertions
            System.assertEquals(1, result.size(), 'Expected one Preferred Dealer item.');
        }
    }

    /**
    * Test method for CheckPermission
    */
    @isTest
    private static void testCheckPermission() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Test.startTest();
            Boolean hasPermission = OrderDealerSearchBoxCopy.CheckPermission();
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, hasPermission, 'Permission check should return a value.');
        }
    }

    /**
    * Test method for getAllPdeList
    */
    @isTest
    private static void testGetAllPdeList() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order order1 = [SELECT Id FROM Order WHERE Name = 'Test Order 1' LIMIT 1];

            Test.startTest();
            List<Preferred_dealer_item__c> pdeList = OrderDealerSearchBoxCopy.getAllPdeList(order1.Id);
            Test.stopTest();

            // Assertions
            System.assertEquals(1, pdeList.size(), 'Expected 1 preferred dealer item associated with the Order.');
        }
    }

    /**
    * Test method for getUpdateFromOrder
    */
    @isTest
    private static void testGetUpdateFromOrder() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order order1 = [SELECT Id FROM Order WHERE Name = 'Test Order 1' LIMIT 1];

            Test.startTest();
            Order result = OrderDealerSearchBoxCopy.getUpdateFromOrder(order1.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, result, 'Result should not be null');
            System.assertEquals(order1.Id, result.Id, 'Order Id should match');
        }
    }

    /**
    * Test method for fetchLookUpValues
    */
    @isTest
    private static void testFetchLookUpValues() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order order1 = [SELECT Id FROM Order WHERE Name = 'Test Order 1' LIMIT 1];

            Test.startTest();
            OrderDealerSearchBoxCopy.AccountDataTableWrapper wrapper =
                    OrderDealerSearchBoxCopy.fetchLookUpValues(1, 10, 'Test', order1.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, wrapper, 'Wrapper should not be null.');
            System.assert(wrapper.accountList.size() > 0, 'Expected accounts in the returned wrapper.');
        }
    }

    /**
    * Test method for updateDealerInfoToOrder
    */
    @isTest
    private static void testUpdateDealerInfoToOrder() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Preferred_dealer_item__c dealer = [SELECT Id FROM Preferred_dealer_item__c LIMIT 1];
            Order order = [SELECT Id, Name FROM Order LIMIT 1];

            Test.startTest();
            Order updatedOrder = OrderDealerSearchBoxCopy.updateDealerInfoToOrder(dealer.Id, order);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, updatedOrder.Distributor__c, 'Distributor should be updated.');
        }
    }

    /**
    * Test method for updateOrder
    */
    @isTest
    private static void testUpdateOrder() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order order = [SELECT Id FROM Order LIMIT 1];
            order.Status = 'Activated';

            Test.startTest();
            Order updatedOrder = OrderDealerSearchBoxCopy.updateOrder(order);
            Test.stopTest();

            // Assertions
            System.assertEquals('Activated', updatedOrder.Status, 'Order status should be updated.');
        }
    }

    /**
    * Test method for Initialize
    */
    @isTest
    private static void testInitialize() {
        // Retrieve the test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order order = [SELECT Id FROM Order LIMIT 1];

            Test.startTest();
            Order initializedOrder = OrderDealerSearchBoxCopy.Initialize(order.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, initializedOrder, 'Initialized Order should not be null.');
        }
    }
}
