/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class of AccountFlagsController
 *
 * @History
 * 16-08-2023   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_AccountFlagsController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    private static void testGetAccountFlagsJSON() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {

            // Create test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            testAccount[0].Country__c = 'US';
            insert testAccount;

            // Create test custom pricebook
            List<Pricebook2> testPricebook = TestDataFactory.returnPricebooks(1, 'Test Price Book');
            testPricebook[0].IsActive = true;

            insert testPricebook[0];

            // Create test Service Contracts
            ServiceContract activeContract = new ServiceContract(
                    Name = 'Active Contract',
                    AccountId = testAccount[0].Id,
                    StartDate = Date.today().addDays(-30),
                    EndDate = Date.today().addDays(30),
                    Pricebook2Id = testPricebook[0].Id
            );

            ServiceContract expiredContract = new ServiceContract(
                    Name = 'Expired Contract',
                    AccountId = testAccount[0].Id,
                    StartDate = Date.today().addDays(-30),
                    EndDate = Date.today().addDays(-25),
                    Pricebook2Id = testPricebook[0].Id
            );

            insert new List<ServiceContract>{activeContract, expiredContract};

            // Create test Global SKU Mapping
            List<Product2> skuList = TestDataFactory.returnProducts(2);
            skuList[0].PG2_Code__c = 'DC10';
            skuList[1].GPP_Code__c = 'DT';
            insert skuList;

            // Create test products
            List<Product2> testProducts = TestDataFactory.returnProducts(2);
            testProducts[0].GlobalSKUMapping__c = skuList[0].Id;
            testProducts[1].GlobalSKUMapping__c = skuList[1].Id;
            insert testProducts;

            // Create test pricebook entry
            List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(2, testPricebook, testProducts);
            testPricebookEntries[0].UnitPrice = 100;
            testPricebookEntries[0].IsActive = true;
            testPricebookEntries[1].UnitPrice = 100;
            testPricebookEntries[1].IsActive = true;

            insert testPricebookEntries;

            // Create test Contract Line Item Records
            ContractLineItem testActiveContractLineItem = new ContractLineItem(
                    ServiceContractId = activeContract.Id,
                    StartDate = Date.today().addDays(-1),
                    EndDate = Date.today().addDays(1),
                    PricebookEntryId = testPricebookEntries[0].Id,
                    Quantity = 1,
                    UnitPrice = 100,
                    DEPUniqueKey__c = 'TEST'
            );
            ContractLineItem testExpiredContractLineItem = new ContractLineItem(
                    ServiceContractId = expiredContract.Id,
                    StartDate = Date.today().addDays(-2),
                    EndDate = Date.today().addDays(-1),
                    PricebookEntryId = testPricebookEntries[1].Id,
                    Quantity = 1,
                    UnitPrice = 100,
                    DEPUniqueKey__c = 'TST'
            );

            insert new List<ContractLineItem>{testActiveContractLineItem, testExpiredContractLineItem};

            // Create test Source Records
            List<Source_Record__c> testSourceRecords = TestDataFactory.returnSourceRecords(1);

            testSourceRecords[0].CIM_Account__c = testAccount[0].Id;
            testSourceRecords[0].Status__c = 'Active';
            testSourceRecords[0].Company_Code__c = 'BUYDS';
            testSourceRecords[0].SuresmileAlignerPlatform__c = true;
            testSourceRecords[0].Atlantis_Web_Order_Customer__c = 'AWO';
            testSourceRecords[0].Source_Id__c = '64';

            insert testSourceRecords[0];


            Test.startTest();

            String flagsJSON = AccountFlagsController.getAccountFlagsJSON(testAccount[0].Id);

            Test.stopTest();

            Map<String, Object> flagMap = (Map<String, Object>) JSON.deserializeUntyped(flagsJSON);

            Assert.areEqual(1, ((Map<String, Object>) flagMap.get('awo')).get('level'));
            Assert.areEqual(1, ((Map<String, Object>) flagMap.get('dsCom')).get('level'));
            Assert.areEqual(2, ((Map<String, Object>) flagMap.get('dsCoreAccess')).get('level'));
            Assert.areEqual(1, ((Map<String, Object>) flagMap.get('dsCoreCare')).get('level'));
        }
    }
}