/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for UpdateOpportunityOwnerCTRL.
 *
 * @History
 * 17-12-2024   Omar     Created test class
 */

@isTest
public class Test_UpdateOpportunityOwnerCTRL {

    @testSetup
    static void setup() {
        // Bypass custom setting
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    static void testUpdateOpportunityOwnerCTRL() {
        // Create a test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            List<Opportunity> oppList = TestDataFactory.returnOpportunities(2, 'Lightning_Pipeline_Opportunity', testUser.Id);
            insert oppList;

            // Create a StandardSetController with selected records
            ApexPages.StandardSetController controller = new ApexPages.StandardSetController(oppList);
            controller.setSelected(oppList);

            // Init the controller class
            UpdateOpportunityOwnerCTRL controllerClass = new UpdateOpportunityOwnerCTRL(controller);

            // Verify that the controller's methods are working
            System.assertEquals(controllerClass.getIsSuccess(), false);
            System.assertEquals(controllerClass.getMySelectedSize(), oppList.size());
            System.assertEquals(controllerClass.getMyRecordsSize(), oppList.size());
        }
    }
}
