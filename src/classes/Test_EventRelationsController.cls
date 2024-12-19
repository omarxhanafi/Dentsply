/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for EventRelationsController.
 *
 * @History
 * 10-12-2024   Omar     Created test class for EventRelationsController.
 */

@isTest
private class Test_EventRelationsController {

    // Test setup
    @testSetup
    static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    // Test method for EventRelationsController
    @isTest
    static void testEventRelationsController() {
        // Create test data or mock if needed

        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {

            // Init the controller
            EventRelationsController controller = new EventRelationsController();

            Test.startTest();

            // Set the State property
            controller.State = new EventRelationPickerState();
            controller.State.EventId = 'TestValue';

            Test.stopTest();

            // Assert the value is correctly set
            System.assertEquals('TestValue', controller.State.EventId, 'The State field should be set to "TestValue"');
        }
    }
}
