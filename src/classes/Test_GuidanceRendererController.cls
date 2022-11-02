/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : Test class of GuidanceRendererController
 * History	
 * 09-09-2022        : Created (#TFUS-000004603)
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_GuidanceRendererController {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
        List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id);
        insert testAccount;
        
        
    }
	@isTest
    public static void testGetGuidanceDetails(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) 
        {
            Account acc = [SELECT id,Country__c FROM Account LIMIT 1];
            acc.Country__c = 'US';
            update acc;
            ProcedureTracker__c testProcedureTracker = new ProcedureTracker__c(PracticeAccount__c = acc.Id,
                                                                               ObtainCreditCardInformation__c  = true);
            insert testProcedureTracker;
            
            Test.startTest();
                String contentOfGuidance = GuidanceRendererController.getGuidanceDetails(testProcedureTracker.Id,'Obtain Credit Card Information');
            Test.stopTest();
            System.assertNotEquals('',contentOfGuidance);
        }
        
                          
    }
}