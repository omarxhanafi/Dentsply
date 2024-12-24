/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for ActivityHistoryController.
 *
 * @History
 * 19-12-2024   Omar     Created test class
 */

@isTest
public class Test_ActivityHistoryController {

    // Test setup
    @testSetup
    static void setup() {
        // Bypass custom setting
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create Hide_Mass_email_from_view_all_activities__c record
        Hide_Mass_email_from_view_all_activities__c hideRecord = new Hide_Mass_email_from_view_all_activities__c(Name = 'USA');
        insert hideRecord;
    }

    // Test the getActivityHistory method where customer-facing activities are filtered based on the Hide_Mass_email_from_view_all_activities__c
    @isTest
    static void testGetActivityHistoryHideCustomerFacing() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            Account testAccount = new Account(Name = 'Test Account 1');
            insert testAccount;

            // Create a task with Customer_Facing_Event__c = true
            Task testTask = new Task(
                    Subject = 'Customer Facing Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    OwnerId = testUser.Id,
                    Status = 'Completed',
                    Customer_Facing_Event__c = true
            );
            insert testTask;

            // Call the method with a country that matches Hide_Mass_email_from_view_all_activities__c
            List<ActivityHistory> results = ActivityHistoryController.getActivityHistory(
                    testAccount.Id,
                    false,
                    0
            );

            // Assert that only customer-facing activities are returned
            System.assertEquals(1, results.size(), 'Only customer-facing activities should be returned.');
            System.assertEquals('Customer Facing Task', results[0].Subject, 'The subject should match the task created.');
        }
    }

    // Tests the getActivityHistory method where the user's country is not part of Hide_Mass_email_from_view_all_activities__c.
    @isTest
    static void testGetActivityHistoryHideCustomerFacingElse() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            Account testAccount = new Account(Name = 'Test Account 2');
            insert testAccount;

            User currentUser = [SELECT Id, User_Country__c FROM User WHERE Id = :testUser.Id LIMIT 1];
            currentUser.User_Country__c = 'USA';
            update currentUser;

            // Create a task with Customer_Facing_Event__c = true
            Task testTask = new Task(
                    Subject = 'Customer Facing Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    Status = 'Completed',
                    Customer_Facing_Event__c = true
            );
            insert testTask;

            // Call the method
            List<ActivityHistory> results = ActivityHistoryController.getActivityHistory(
                    testAccount.Id,
                    false,
                    0
            );

            // Assert that customer-facing tasks are returned
            System.assertEquals(1, results.size(), 'Only customer-facing tasks should be returned.');
            System.assertEquals('Customer Facing Task', results[0].Subject, 'The subject should match the created task.');
        }
    }


    // Test that the getActivityHistory method filters activities owned by the current user when myActivityFilter is true.
    @isTest
    static void testGetActivityHistoryUserOwnedActivities() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            Account testAccount = new Account(Name = 'Test Account 3');
            insert testAccount;

            // Create a task owned by the user
            Task testTask = new Task(
                    Subject = 'User Owned Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    OwnerId = testUser.Id,
                    Status = 'Completed'
            );
            insert testTask;

            // Call the method with myActivityFilter = true
            List<ActivityHistory> results = ActivityHistoryController.getActivityHistory(
                    testAccount.Id,
                    true,
                    0
            );

            // Assert that only activities owned by the user are returned
            System.assertEquals(1, results.size(), 'Only activities owned by the user should be returned.');
            System.assertEquals('User Owned Task', results[0].Subject, 'The subject should match the task created.');
        }
    }



    // Test the getActivityHistory method for user-owned activities that are also customer-facing when the hide setting is active
    @isTest
    static void testGetActivityHistoryUserOwnedAndCustomerFacing() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            Account testAccount = new Account(Name = 'Test Account 4');
            insert testAccount;

            // Create task
            Task testTask = new Task(
                    Subject = 'Customer Facing Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    OwnerId = testUser.Id,
                    Status = 'Completed',
                    Customer_Facing_Event__c = true
            );
            insert testTask;

            // Call the method with Hide_Mass_email_from_view_all_activities__c
            List<ActivityHistory> results = ActivityHistoryController.getActivityHistory(
                    testAccount.Id,
                    true,
                    0
            );

            // Assert that only the customer-facing task is returned
            System.assertEquals(1, results.size(), 'Only customer-facing tasks owned by the user should be returned.');
            System.assertEquals('Customer Facing Task', results[0].Subject, 'The subject should match the task created.');
        }
    }

    // Test the getActivityHistory method for user-owned activities that are also customer-facing when the hide setting is inactive
    @isTest
    static void testGetActivityHistoryUserOwnedAndCustomerFacingElse() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Setup test data
            Account testAccount = new Account(Name = 'Test Account 5');
            insert testAccount;

            // Add the user's country to Hide_Mass_email_from_view_all_activities__c
            Hide_Mass_email_from_view_all_activities__c hideRecord = new Hide_Mass_email_from_view_all_activities__c(Name = 'TestCountry');
            insert hideRecord;

            User currentUser = [SELECT Id, User_Country__c FROM User WHERE Id = :testUser.Id LIMIT 1];
            currentUser.User_Country__c = 'USA';
            update currentUser;

            // Create tasks
            Task task1 = new Task(
                    Subject = 'Non-Customer Facing Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    OwnerId = testUser.Id,
                    Status = 'Completed'
            );
            Task task2 = new Task(
                    Subject = 'Customer Facing Task',
                    ActivityDate = Date.today(),
                    WhatId = testAccount.Id,
                    OwnerId = testUser.Id,
                    Status = 'Completed',
                    Customer_Facing_Event__c = true
            );
            insert new List<Task>{task1, task2};

            // Call the method
            List<ActivityHistory> results = ActivityHistoryController.getActivityHistory(
                    testAccount.Id,
                    true,
                    0
            );

            // Assert that only the customer-facing task is returned
            System.assertEquals(1, results.size(), 'Only customer-facing tasks owned by the user should be returned.');
            System.assertEquals('Customer Facing Task', results[0].Subject, 'The subject should match the created customer-facing task.');
        }
    }

}
