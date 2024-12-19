/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for assetDetailsCtrl
 *
 * @History
 * 26-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_assetDetailsCtrl {

    @testSetup
    private static void setup() {
        // Create a test user
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;

        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    @isTest
    private static void testGetAsset() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Create a test account
            List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            insert testAccount;

            // Create a test contact
            List<Contact> testContact = TestDataFactory.returnContacts(2, 'ContactGlobal', testUser.Id);
            testContact[0].AccountId = testAccount[0].Id;
            insert testContact;

            // Create a test asset
            Asset testAsset = new Asset(
                    Name = 'Test Asset',
                    Status = 'Active',
                    ContactId = testContact[0].Id,
                    SerialNumber = 'SN12345'
            );
            insert testAsset;

            // Create a test WorkOrder referencing the Asset
            WorkOrder testWorkOrder = new WorkOrder(
                    AssetId = testAsset.Id,
                    Subject = 'Test Work Order',
                    Status = 'Open'
            );
            insert testWorkOrder;

            Test.startTest();

            Asset resultAsset = assetDetailsCtrl.getAsset(testWorkOrder.Id, 'WorkOrder');

            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, resultAsset, 'Resulting asset should not be null.');
            System.assertEquals('Test Asset', resultAsset.Name, 'Asset name should match.');
            System.assertEquals('Active', resultAsset.Status, 'Asset status should be Active.');
            System.assertEquals('SN12345', resultAsset.SerialNumber, 'Asset serial number should match.');
        }
    }
}
