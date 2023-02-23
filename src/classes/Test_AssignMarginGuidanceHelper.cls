/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of AssignMarginGuidanceHelper
 *
 * @History
 * 20-02-2023   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_AssignMarginGuidanceHelper {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    private static void testCalculateMargins() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Name = 'Test Account';
            testAccount[0].DC_ETM_Code__c = 'D01';

            insert testAccount[0];

            // Create test product
            List<Product2> testProduct = TestDataFactory.returnProducts(1);
            testProduct[0].Name = 'Test Account';
            testProduct[0].Article__c = 'A1';
            testProduct[0].IsActive = true;

            insert testProduct[0];


            // Create test custom pricebook
            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;
            testPricebook[0].MarginGuidanceCalculation__c = true;
            insert testPricebook[0];

            // Create test pricebook entry
            List<PricebookEntry> testPricebookEntry = TestDataFactory.returnPricebookEntries(1, testPricebook, testProduct);
            testPricebookEntry[0].UnitPrice = 100;
            testPricebookEntry[0].IsActive = true;

            insert testPricebookEntry[0];

            // Create test order
            List<Order> testOrder = TestDataFactory.returnOrders(1, 'Direct_global_order', testAccount);

            testOrder[0].AccountId = testAccount[0].Id;
            testOrder[0].Pricebook2Id = testPricebook[0].Id;
            testOrder[0].EffectiveDate = Date.today();
            testOrder[0].Status = 'Created';
            testOrder[0].Country__c = 'US';

            insert testOrder[0];

            // Create test order item
            List<OrderItem> testOrderItem = TestDataFactory.returnOrderItems(1, testOrder, testPricebookEntry);
            testOrderItem[0].Product2Id = testProduct[0].Id;
            testOrderItem[0].Quantity = 2;
            testOrderItem[0].UnitPrice = 100;
            testOrderItem[0].ListPrice = 100;

            insert testOrderItem[0];

            // Create test margin guidance
            MarginGuidance__c testMargin = new MarginGuidance__c(
                    Cost__c = 37,
                    AreaCode__c = 'D01',
                    Product__c = testProduct[0].Id,
                    LowerGuidance__c = 64,
                    UpperGuidance__c = 68
            );

            insert testMargin;

            Test.startTest();

            AssignMarginGuidanceHelper.calculateMargin(testOrder[0].Id);

            Test.stopTest();

            List<OrderItem> orderItems = [
                    SELECT Margin__c, Weight__c, MarginGuidance__c, WeightedMargin__c, UpperGuidance__c, LowerGuidance__c, WeightedLowerGuidance__c, WeightedUpperGuidance__c
                    FROM OrderItem
            ];

            System.assertEquals(1, orderItems.size());
            System.assertNotEquals(null, orderItems[0].MarginGuidance__c);
            System.assertEquals(1, orderItems[0].Weight__c);

        }
    }
}