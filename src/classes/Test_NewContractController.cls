/*-------------------------------------------------------------------------------------------------	
Author: 	naoussar@salesforce.com (Salesforce) 2022094 
History	
20220910   created (TFUS-000004611) 
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_NewContractController {
	@testSetup
    private static void testSetup() {
        List<User> userList = TestDataFactory.createUsers(1, 'Lightning Sales Rep');
        TestDataFactory.createBypassCustomSetting();
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
        List<Account> testAccountList = TestDataFactory.createAccounts(1, 'CIM_Account', userList[0].Id);
        testAccountList[0].OneAccount_Type__c = 'Competitor';
        update testAccountList;
    }
    
    
    @isTest
    private static void testEligibilityOfCreation() {
        Boolean isEligible;
        User testUser = [SELECT Id, User_Country__c FROM User where Alias='test1' LIMIT 1];
        Account acc = [SELECT Id FROM Account limit 1]; 
        testUser.User_Country__c = 'Germany';
        update testUser;
        System.runAs(testUser){
            isEligible = NewContractController.isUserEligibleForCustomContractCreation(acc.Id);
        }
        System.assertEquals(true,isEligible,'User is eligible for custom creation of contracts');
        
    }
}