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
    static void testGetProductFamilyListByWorkflowId() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            // Create and insert test Workflow
            Workflow__c testWorkflow = new Workflow__c(Name = 'Test Workflow');
            insert testWorkflow;

            // Create and insert Product Families
            ProductFamily__c family1 = new ProductFamily__c(Name = 'Family 1');
            ProductFamily__c family2 = new ProductFamily__c(Name = 'Family 2');
            insert new List<ProductFamily__c>{family1, family2};

            // Create and insert Workflow Lines with Order
            WorkflowLine__c line1 = new WorkflowLine__c(Workflow__c = testWorkflow.Id, ProductFamily__c = family1.Id, Order__c = 1);
            WorkflowLine__c line2 = new WorkflowLine__c(Workflow__c = testWorkflow.Id, ProductFamily__c = family2.Id, Order__c = 2);
            insert new List<WorkflowLine__c>{line1, line2};

            // Create and insert Non ERP Products
            Non_ERP_Products__c product1 = new Non_ERP_Products__c(Name = 'Product 1', ProductFamily__c = family1.Id);
            Non_ERP_Products__c product2 = new Non_ERP_Products__c(Name = 'Product 2', ProductFamily__c = family2.Id);
            insert new List<Non_ERP_Products__c>{product1, product2};

            // Create and insert Product Profilings
            Product_Profiling__c profiling1 = new Product_Profiling__c(Product_Name__c = product1.Id, Account__c = testAccount[0].Id, Inactive__c = false);
            Product_Profiling__c profiling2 = new Product_Profiling__c(Product_Name__c = product2.Id, Account__c = testAccount[0].Id, Inactive__c = true);
            insert new List<Product_Profiling__c>{profiling1, profiling2};

            // Testing the method
            Test.startTest();
            List<WorkflowProfilingController.ProductFamilyWrapper> result = WorkflowProfilingController.getProductFamilyListByWorkflowId(testWorkflow.Id, testAccount[0].Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, result, 'Result should not be null');
            System.assertEquals(2, result.size(), 'Result should have 2 families');

        }
    }

}