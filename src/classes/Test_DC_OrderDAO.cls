/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for DC_OrderDAO.
 *
 * @History
 * 28-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public class Test_DC_OrderDAO {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create a test account
        List<Account> testAccounts = TestDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id);
        insert testAccounts;

        // Create test orders
        List<Order> testOrders = TestDataFactory.returnOrders(2, 'Direct_global_order', testAccounts);
        insert testOrders;
    }

    @isTest
    private static void testGetOrdersByAccountId() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the test account
            Account testAccount = [SELECT Id FROM Account WHERE Name LIKE 'TestAccount%' LIMIT 1];

            Test.startTest();
            // Retrieve orders for the test account
            List<Order> orders = DC_OrderDAO.getOrdersByAccountId(testAccount.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(0, orders.size(), 'There should be orders returned for the test account.');
            System.assertEquals(2, orders.size(), 'There should be exactly 2 orders for the test account.');
        }
    }

}
