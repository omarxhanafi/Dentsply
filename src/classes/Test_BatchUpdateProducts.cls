/**
 * Created by ohanafi on 09/04/2024.
 */

@isTest(seeAllData=false)
public without sharing class Test_BatchUpdateProducts {
    @testSetup
    private static void setup() {
        // AdinSettings values are visible to test methods even if seeAllData is set to false.
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, 'System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }
    @isTest
    private static void testBatchUpdateProducts() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {

            Product2 testProduct = TestDataFactory.returnProducts(1)[0];
            testProduct.PG1_Code__c = 'PG1Code1';

            insert testProduct;

            // Initialize the batch class
            Set<String> pg1Codes = new Set<String>{'PG1Code1', 'PG1Code2'};
            Set<String> pg2Codes = new Set<String>{'PG2Code1', 'PG2Code2'};
            Set<String> pg3Codes = new Set<String>{'PG3Code1', 'PG3Code2'};
            Set<String> pg4Codes = new Set<String>{'PG4Code1', 'PG4Code2'};

            Test.startTest();

            Database.executeBatch(new BatchUpdateProducts(pg1Codes, pg2Codes, pg3Codes, pg4Codes));

            Test.stopTest();
        }

    }
}
