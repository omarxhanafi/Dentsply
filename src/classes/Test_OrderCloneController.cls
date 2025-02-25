/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for OrderCloneController
 *
 * @History
 * 11-02-2025   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_OrderCloneController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create Account
        Account acc = new Account(Name = 'Test Account');
        insert acc;

        // Create Contract
        List<Contract> contract = TestDataFactory.returnContracts(1, 'DiscountContract', userList[0].Id, new List<Account>{acc});
        insert contract;

        contract[0].Status = 'Active';
        update contract[0];

        // Create test Order
        List<Pricebook2> pricebooks = TestDataFactory.returnPricebooks(1, 'Standard Price Book');
        pricebooks[0].IsActive = true;
        insert pricebooks;

        List<Order> testOrders = new List<Order>{
                new Order(
                        Name = 'Test Order',
                        Status = 'Created',
                        Pricebook2Id = pricebooks[0].Id,
                        AccountId = acc.Id,
                        EffectiveDate = Date.today(),
                        ContractId = contract[0].Id
                )
        };
        insert testOrders;

        // Create test OrderItems
        List<Product2> testProducts = TestDataFactory.returnProducts(1);
        insert testProducts;

        List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(1, pricebooks, testProducts);
        insert testPricebookEntries;

        List<OrderItem> testOrderItems = new List<OrderItem>{
                new OrderItem(
                        OrderId = testOrders[0].Id,
                        PricebookEntryId = testPricebookEntries[0].Id,
                        Quantity = 1,
                        UnitPrice = 100
                )
        };
        insert testOrderItems;
    }

    @isTest
    private static void testGetOrderDetails() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order testOrder = [SELECT Id FROM Order LIMIT 1];
            Test.startTest();
            Order retrievedOrder = OrderCloneController.getOrderDetails(testOrder.Id);
            Test.stopTest();

            System.assertNotEquals(null, retrievedOrder, 'Order should be retrieved');
            System.assertEquals(testOrder.Id, retrievedOrder.Id, 'Retrieved Order ID should match');
        }
    }

    @isTest
    private static void testCloneOrder() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Order testOrder = [SELECT Id FROM Order LIMIT 1];
            Test.startTest();
            Order clonedOrder = OrderCloneController.cloneOrder(testOrder.Id);
            Test.stopTest();

            clonedOrder = [SELECT Id, Status FROM Order WHERE Id = :clonedOrder.Id];

            System.assertNotEquals(null, clonedOrder, 'Cloned Order should not be null');
            System.assertNotEquals(testOrder.Id, clonedOrder.Id, 'Cloned Order should have a different ID');
            System.assertEquals('Created', clonedOrder.Status, 'Cloned Order should have status Created');
        }
    }
}
