/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of BatchCreateProcedureTrackers
 *
 * @History
 * 21-12-2022   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_BatchCreateProcedureTrackers {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, 'System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    private static void testBatchCreateProcedureTrackers() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test accounts
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'BE';

            insert testAccount[0];

            // Create test products
            List<Product2> testProduct = TestDataFactory.returnProducts(1);
            testProduct[0].Article__c = 'DIGI-500152';

            insert testProduct[0];

            // Create test sales analytics records
            Sales_Analytics__c testSalesAnalytics = new Sales_Analytics__c(
                    Account__c = testAccount[0].Id,
                    Product__c = testProduct[0].Id,
                    Invoice_Date__c = Date.today().addDays(-5),
                    Quantity__c = 1
            );

            insert testSalesAnalytics;

            // Get a random territory
            Territory2 testTerritory = [SELECT Id FROM Territory2][0];

            // Create test object territory associations
            ObjectTerritory2Association testObjectTerritoryAssociation = new ObjectTerritory2Association(ObjectId = testAccount[0].Id, Territory2Id = testTerritory.Id, AssociationCause = 'Territory2Manual');

            insert testObjectTerritoryAssociation;

            // Create test user territory associations
            UserTerritory2Association testUserTerritoryAssociation = new UserTerritory2Association(UserId = testUser.Id, Territory2Id = testTerritory.Id, RoleInTerritory2 = 'Sales Rep (Main Contact)');

            // Get the batch job
            BatchCreateProcedureTrackers batch = new BatchCreateProcedureTrackers();

            // Create a new batch job
            Test.startTest();

            // Setup objects should be inserted in a different transaction in order to avoid the MIXED_DML_OPERATION error
            insert testUserTerritoryAssociation;

            Database.executeBatch(batch, 1);

            Test.stopTest();

            // Verify that the batch created the correct number of procedure tracker records
            List<ProcedureTracker__c> procedureTrackers = [SELECT Id FROM ProcedureTracker__c];

            System.assertEquals(1, procedureTrackers.size());
        }
    }
}