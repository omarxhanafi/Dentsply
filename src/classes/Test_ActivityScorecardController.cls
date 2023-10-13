/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of ActivityScorecardController
 *
 * @History
 * 22-06-2023   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_ActivityScorecardController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    private static void testGetAccountActivityScorecard() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);

            insert testAccount;

            // Create test event
            Event testEvent = new Event(
                    Subject = 'Test Event',
//                    ActivityDate = Date.today().addDays(1),
                    ActivityDateTime = Datetime.now().addDays(1),
                    WhatId = testAccount[0].Id,
                    DurationInMinutes = 60
            );
            insert testEvent;

            // Create a test task
            Task testTask = new Task(
                    Subject = 'Test Task',
                    ActivityDate = Date.today().addDays(-1),
                    WhatId = testAccount[0].Id,
                    Type = 'Meeting'
            );
            insert testTask;

            Test.startTest();

            String scorecardJSON = ActivityScorecardController.getAccountActivityScorecard(testAccount[0].Id);

            Test.stopTest();

            Map<String, Object> resultMap = (Map<String, Object>) JSON.deserializeUntyped(scorecardJSON);

            System.assertEquals(1, (Integer)resultMap.get('futureEventsCount'));
        }
    }
}