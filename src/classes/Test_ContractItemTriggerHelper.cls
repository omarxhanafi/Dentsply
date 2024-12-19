/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for ContractItemTriggerHelper.
 *
 * @History
 * 27-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public class Test_ContractItemTriggerHelper {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        List<Account> accounts = TestDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id);
        insert accounts;

        List<Contract> contracts = TestDataFactory.returnContracts(2, 'DiscountContract', userList[0].Id, accounts);
        insert contracts;

        contracts[0].Status = 'Draft';
        contracts[1].Status = 'Activated';
        update contracts;

        List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, userList[0].Id);
        discountModels[0].Name = 'Implants';
        insert discountModels;

        List<ContractItem__c> contractItemDraft= TestDataFactory.returnContractItems(discountModels, 'Standard', contracts[0]);
        List<ContractItem__c> contractItemActivated= TestDataFactory.returnContractItems(discountModels, 'Standard', contracts[1]);
        insert contractItemDraft;
        insert contractItemActivated;
    }

    @isTest
    private static void testCanBeDeletedWithNoDeleteTrue() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the contract items
            List<ContractItem__c> contractItems = [SELECT Id, NoDelete__c FROM ContractItem__c WHERE NoDelete__c = true];

            // Attempt to delete the contract items (this will trigger the before delete logic)
            Test.startTest();
            try {
                delete contractItems;
                // If it reaches here, the deletion was not prevented, which is an issue
                System.assert(false, 'Contract items with NoDelete__c should not be deleted.');
            } catch (DmlException e) {
                // Check that the correct error message was added
                System.assert(e.getMessage().contains(ContractItemTriggerHelper.PREVENT_DELETION_MESSAGE),
                        'The correct error message should be present for preventing deletion.');
            }
            Test.stopTest();
        }
    }

    @isTest
    private static void testCanBeDeletedWithNoDeleteFalse() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the contract items where NoDelete__c is false
            List<ContractItem__c> contractItems = [SELECT Id, NoDelete__c FROM ContractItem__c WHERE NoDelete__c = false];

            // Attempt to delete the contract items (this should succeed since NoDelete__c is false)
            Test.startTest();
            delete contractItems;
            Test.stopTest();

            // Verify that the deletion was successful, no exception should be thrown
            System.assertEquals(0, [SELECT count() FROM ContractItem__c WHERE Id IN :contractItems],
                    'Contract items with NoDelete__c = false should be deleted.');
        }
    }
}
