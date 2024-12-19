/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for updateContract controller.
 *
 * @History
 * 17-12-2024   Omar     Created test class for Test_UpdateContract.
 */
@isTest
public class Test_UpdateContract {

    @testSetup
    static void setupTestData() {
        // Bypass settings and insert test user
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    static void testNavFlow() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create a test Account
            List<Account> testAccounts = testDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccounts;

            // Create a test Contract
            List<Contract> testContracts = TestDataFactory.returnContracts(1, 'Purchasing_Contract_Turnover', testUser.Id, testAccounts);
            insert testContracts;

            // Create StandardController
            ApexPages.StandardController stdController = new ApexPages.StandardController(testContracts[0]);

            // Init the updateContract controller
            updateContract controller = new updateContract(stdController);
            controller.contr = testContracts[0];

            // Verify stepname is initially null
            System.assertEquals(null, controller.stepname, 'Stepname should initially be null.');

            Test.startTest();

            // Call navFlow() method to update stepname
            controller.navFlow();

            Test.stopTest();

            // Verify stepname is updated correctly
            System.assertEquals('FLOW', controller.stepname, 'Stepname should be set to FLOW.');
        }

    }
}
