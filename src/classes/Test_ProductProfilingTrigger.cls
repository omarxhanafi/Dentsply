/*-------------------------------------------------------------------------------------------------
 * Author            : ohanafi@salesforce.com
 * Description       : Product Profiling trigger test class
 * History
 * 01-03-2024         Created Test_ProductProfilingTrigger class (TFUS-000006225)
--------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public with sharing class Test_ProductProfilingTrigger {
    /*-------------------------------------------------------------------------------------------------------
    Company: Salesforce
    Description: Setup one user for the test class
    History :
    --------------------------------------------------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'Lightning Sales Rep');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    public static void testAssignUniqueKeyIdentifier() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];

        System.runAs(testUser){
            // Create test data
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            Non_ERP_Products__c nonERPProduct = new Non_ERP_Products__c(Name = 'Test Product');
            insert nonERPProduct;

            Product_Profiling__c testPPRecord = new Product_Profiling__c(
                    Account__c = testAccount[0].Id,
                    Product_Name__c = nonERPProduct.Id
            );
            insert testPPRecord;

            // Retrieve the record after assignment
            testPPRecord = [SELECT DEPUniqueKey__c FROM Product_Profiling__c WHERE Id = :testPPRecord.Id];

            // Assert the result
            System.assertEquals(
                    testPPRecord.DEPUniqueKey__c,
                    String.valueOf(testAccount[0].Id).substring(0, 15) + String.valueOf(nonERPProduct.Id).substring(0, 15)
            );
        }

    }

    @isTest
    public static void testPreventDeletion() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];

        System.runAs(testUser){
            // Create test data
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            Non_ERP_Products__c nonERPProduct = new Non_ERP_Products__c(Name = 'Test Product');
            insert nonERPProduct;

            Product_Profiling__c testPPRecord = new Product_Profiling__c(
                    Account__c = testAccount[0].Id,
                    Product_Name__c = nonERPProduct.Id,
                    Integrated__c = true
            );
            insert testPPRecord;

            Boolean deletionPrevented = false;

            Test.startTest();
            try {
                // Attempt to delete the record
                delete testPPRecord;
            } catch (DmlException e) {
                String expectedErrorMessage = 'You are not authorised to delete this Product Profiling Record, please contact your administrator.';
                System.assertEquals(expectedErrorMessage, e.getDmlMessage(0), 'Error message should match');
                deletionPrevented = true;
            }
            Test.stopTest();

            // Verify that the record is still present after deletion attempt
            testPPRecord = [SELECT Id FROM Product_Profiling__c WHERE Id = :testPPRecord.Id LIMIT 1];
            System.assertNotEquals(null, testPPRecord, 'Record should not have been deleted');

            // Assert that deletion was prevented
            System.assertEquals(true, deletionPrevented, 'Deletion should have been prevented');
        }
    }

}