/**
 * @Author          Omar HANAFI (ohanafi@salesforce.com)
 * @Description     Test class for BatchUpdateProductsController.
 *
 * @History
 * 27-02-2025       Omar HANAFI           Created the test class.
 */
@isTest(seeAllData=false)
public without sharing class Test_BatchUpdateProductsController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    private static void testRunBatch() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create test ProductFamily__c
            ProductFamily__c family = new ProductFamily__c(Name = 'Test Family');
            insert family;

            // Create test Non_ERP_Products__c records
            List<Non_ERP_Products__c> nonErpProducts = new List<Non_ERP_Products__c>{
                    new Non_ERP_Products__c(
                            ProductFamily__c = family.Id,
                            Competitor_Product__c = false,
                            AssignmentRuleCodes__c = 'PG1,PG22,PG333,PG4444'
                    )
            };
            insert nonErpProducts;

            Test.startTest();

            // Run the batch
            Id jobId = BatchUpdateProductsController.runBatch();

            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, jobId, 'Job ID should not be null.');
        }
    }

    @isTest
    private static void testGetJobStatus() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create a test batch job
            Id jobId = Database.executeBatch(new BatchUpdateProducts(new Set<String>(), new Set<String>(), new Set<String>(), new Set<String>()), 200);

            Test.startTest();

            // Get the job status
            AsyncApexJob job = BatchUpdateProductsController.getJobStatus(jobId);

            Test.stopTest();

            // Verify that the job status was retrieved
            System.assertNotEquals(null, job, 'Job status should not be null.');
            System.assertEquals(jobId, job.Id, 'Job ID should match the retrieved job.');
        }
    }

    @isTest
    private static void testGetHistoricalJobs() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create a test BatchUpdateProductsLog__c record
            BatchUpdateProductsLog__c log = new BatchUpdateProductsLog__c(
                    JobId__c = '707000000000000',
                    StartTime__c = System.now(),
                    EndTime__c = System.now().addMinutes(5),
                    Duration__c = 300,
                    Status__c = 'Completed',
                    ProductCount__c = 10,
                    NumberOfErrors__c = 0,
                    JobItemsProcessed__c = 5
            );
            insert log;

            Test.startTest();

            // Get historical jobs
            List<BatchUpdateProductsLog__c> historicalJobs = BatchUpdateProductsController.getHistoricalJobs();

            Test.stopTest();

            // Assertions
            System.assertNotEquals(0, historicalJobs.size(), 'Historical jobs list should not be empty.');
            System.assertEquals(log.JobId__c, historicalJobs[0].JobId__c, 'Job ID should match the inserted log.');
        }
    }

    @isTest
    private static void testGetRunningJob() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create a test batch job
            Id jobId = Database.executeBatch(new BatchUpdateProducts(new Set<String>(), new Set<String>(), new Set<String>(), new Set<String>()), 200);

            Test.startTest();

            // Get the running job
            AsyncApexJob runningJob = BatchUpdateProductsController.getRunningJob();

            Test.stopTest();

            // Verify that the running job was retrieved
            System.assertNotEquals(null, runningJob, 'Running job should not be null.');
            System.assertEquals(jobId, runningJob.Id, 'Job ID should match the running job.');
        }
    }
}
