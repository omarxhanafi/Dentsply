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
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<Account> testAccount = TestDataFactory.returnAccounts(1, 'CIM_Account', userList[0].Id);
        insert testAccount;
        
        
    }
	@isTest
    public static void testGetGuidanceDetails(){
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