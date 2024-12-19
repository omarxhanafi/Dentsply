/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for EventPathController.
 *
 * @History
 * 10-12-2024   Omar     Created test class for EventPathController.
 */

@isTest
public class Test_EventPathController {

    // Setup method to create necessary data
    @testSetup
    static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    // Test for setEventStatus method
    @isTest
    static void testSetEventStatus() {
        // Create test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create the test event
            List<Event> eventList = TestDataFactory.returnEvents(1, testUser.Id);
            insert eventList;

            Test.startTest();

            // Call the method to test
            EventPathController.setEventStatus(eventList[0].Id, 'Completed');

            Test.stopTest();

            // Query the event to verify the status update
            Event updatedEvent = [SELECT Event_Status__c FROM Event WHERE Id = :eventList[0].Id];

            // Assert that the status has been updated
            System.assertEquals('Completed', updatedEvent.Event_Status__c, 'Event status should be updated to Completed');
        }
    }
}
