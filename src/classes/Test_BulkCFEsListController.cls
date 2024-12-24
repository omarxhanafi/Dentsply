/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for BulkCFEsListController
 *
 * @History
 * 26-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public class Test_BulkCFEsListController {

    /**
    * Test setup
    */
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create test accounts
        List<Account> testAccounts = TestDataFactory.returnAccounts(2, 'CIM_Account', userList[0].Id);
        testAccounts[0].Country__c = 'IN';
        testAccounts[1].Country__c = 'US';

        insert testAccounts;
    }

    /**
    * Test method for Non-Indian Accounts
    */
    @isTest
    private static void testRedirectWithNonIndianAccount() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch non-Indian accounts
            List<Account> nonIndianAccounts = [SELECT Id FROM Account WHERE Country__c != 'IN'];

            Test.startTest();

            // Set the current page
            Test.setCurrentPage(Page.BulkCFEsAccounts);

            // Initialize the controller
            ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(nonIndianAccounts);
            ssc.setSelected(nonIndianAccounts);
            BulkCFEsListController controller = new BulkCFEsListController(ssc);

            PageReference result = controller.Redirect();

            Test.stopTest();

            // Assertions for non-Indian accounts
            System.assertEquals(null, result, 'PageReference should be null for non-Indian accounts.');
            System.assert(ApexPages.hasMessages(ApexPages.Severity.FATAL),
                    'A fatal error message should be present for non-Indian accounts.');
        }
    }

    /**
    * Test method for Indian Accounts
    */
    @isTest
    private static void testRedirectWithOnlyIndianAccounts() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch only Indian accounts
            List<Account> indianAccounts = [SELECT Id FROM Account WHERE Country__c = 'IN'];

            Test.startTest();

            // Set the current page
            Test.setCurrentPage(Page.BulkCFEsAccounts);

            // Initialize the controller
            ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(indianAccounts);
            ssc.setSelected(indianAccounts);
            BulkCFEsListController controller = new BulkCFEsListController(ssc);

            PageReference result = controller.Redirect();

            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, result, 'PageReference should not be null for only Indian accounts.');

            List<Id> accountIds = new List<Id>();
            for (Account acc : indianAccounts) {
                accountIds.add(acc.Id);
            }

            System.assertEquals('/apex/BulkCFEs?idArray=' + String.join(accountIds, ','),
                    result.getUrl(), 'Redirect URL should match expected value.');

            System.assert(!ApexPages.hasMessages(ApexPages.Severity.FATAL),
                    'No fatal error messages should be present.');
        }
    }
}
