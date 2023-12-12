/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of WorkflowProfilingController
 *
 * @History
 * 12-12-2023   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_WorkflowProfilingController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    static void testGetWorkflows() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            Workflow__c testWorkflow = new Workflow__c(Name = 'Test Workflow', Countries__c = 'US');
            insert testWorkflow;

            Test.startTest();
            List<Workflow__c> workflows = WorkflowProfilingController.getWorkflows(testAccount[0].Id);
            Test.stopTest();

            // Assertions
            System.assertEquals(1, workflows.size());
        }
    }

    @isTest
    static void testGetWorkflowProfilingsByAccount() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            Workflow__c testWorkflow = new Workflow__c(Name = 'Test Workflow', Countries__c = 'US');
            insert testWorkflow;

            WorkflowProfiling__c testWorkflowProfiling = new WorkflowProfiling__c(Account__c = testAccount[0].Id, Workflow__c = testWorkflow.Id);
            insert testWorkflowProfiling;

            Test.startTest();
            List<WorkflowProfiling__c> workflowProfilings = WorkflowProfilingController.getWorkflowProfilingsByAccount(testAccount[0].Id);
            Test.stopTest();

            // Assertions
            System.assertEquals(1, workflowProfilings.size());
            System.assertEquals(testAccount[0].Id, workflowProfilings[0].Account__c);

        }
    }

    @isTest
    static void testCreateOrUpdateWorkflowProfilings() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            Workflow__c testWorkflow = new Workflow__c(Name = 'Test Workflow', Countries__c = 'US');
            insert testWorkflow;

            WorkflowProfiling__c testWorkflowProfiling = new WorkflowProfiling__c(Account__c = testAccount[0].Id, Workflow__c = testWorkflow.Id, Rating__c = 3);
            insert testWorkflowProfiling;

            testWorkflowProfiling.Rating__c = 5;
            List<WorkflowProfiling__c> newRecords = new List<WorkflowProfiling__c>{ testWorkflowProfiling };

            Test.startTest();
            WorkflowProfilingController.createOrUpdateWorkflowProfilings(newRecords);
            Test.stopTest();

            // Assertions
            List<WorkflowProfiling__c> insertedRecords = [SELECT Id, Rating__c FROM WorkflowProfiling__c WHERE Account__c = :testAccount[0].Id AND Workflow__c = :testWorkflow.Id];
            System.assertEquals(1, insertedRecords.size());
            System.assertEquals(5, insertedRecords[0].Rating__c);


        }
    }

    @isTest
    static void testDeleteWorkflowProfilings() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            Workflow__c testWorkflow = new Workflow__c(Name = 'Test Workflow', Countries__c = 'US');
            insert testWorkflow;

            WorkflowProfiling__c testWorkflowProfiling = new WorkflowProfiling__c(Account__c = testAccount[0].Id, Workflow__c = testWorkflow.Id);
            insert testWorkflowProfiling;

            List<Id> recordIdsToDelete = new List<Id>{ testWorkflowProfiling.Id };

            Test.startTest();
            WorkflowProfilingController.deleteWorkflowProfilings(recordIdsToDelete);
            Test.stopTest();

            // Assertions
            List<WorkflowProfiling__c> deletedRecords = [SELECT Id FROM WorkflowProfiling__c WHERE Id = :testWorkflowProfiling.Id];
            System.assertEquals(0, deletedRecords.size());


        }
    }
}