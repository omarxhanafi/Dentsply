/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : test ProcedureProfiling trigger helper
 * History	
 * 03-02-2022         created, added test for testcheckUniqueWorkflowPerAccount method (#TFUS-000003966)
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_ProcedureProfilingTriggerHelper {

    @testSetup
    public static void setup() {
        User user = TestDataFactory.createUsers(1, '#System: System Administrator')[0]; 
        System.runas(user) {
            Account currentAccount = TestDataFactory.createAccounts(1, 'CIM_Account', user.Id)[0];
            
    		ProcedureProfiling__c workflowProfiling = new ProcedureProfiling__c(Account__c = currentAccount.Id);
            insert workflowProfiling;
            
            ProcedureProfiling__c workflowProfiling2 = new ProcedureProfiling__c(Account__c = currentAccount.Id, Atlantis__c  = true);
            insert workflowProfiling2;
        }
    }
    
    @isTest
    public static void testcheckUniqueWorkflowPerAccount(){
    User testUser = [SELECT Id FROM User WHERE Alias = 'test1'][0];
    System.runas(testUser) {
        
        List<Account> Accounts = TestDataFactory.createAccounts(2, 'CIM_Account', testUser.Id);
         Test.startTest(); 
    		ProcedureProfiling__c workflowProfiling = new ProcedureProfiling__c(Account__c = Accounts[0].Id);
            insert workflowProfiling;
            ProcedureProfiling__c workflowProfiling2 = new ProcedureProfiling__c(Account__c = Accounts[0].Id, Atlantis__c  = true);
            insert workflowProfiling2;
            ProcedureProfiling__c workflowProfiling3 = new ProcedureProfiling__c(Account__c = Accounts[1].Id, Atlantis__c  = true);
            insert workflowProfiling3;
        List<ProcedureProfiling__c> workflowProfilingList = [SELECT Id,Account__c FROM ProcedureProfiling__c ];
        
        try{
            ProcedureProfilingTriggerHelper.checkWorkflowPerAccount(workflowProfilingList);
        }catch(Exception ex){
            Boolean expectedExceptionThrown =  ex.getMessage().contains('only possible to create 1 Workflow Profiling record per Account') ? true : false;

            System.assertEquals(expectedExceptionThrown, true);
        }
        Test.stopTest();
    }   
    }
}