/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : test ProcedureProfiling trigger handler
 * History	
 * 03-02-2022         created, added test for checkWorkflowPerAccount method (#TFUS-000003966)
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_ProcedureProfilingTriggerHandler {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
    } 
    
	@isTest
    public static void createProcedureProfilingforDifferentAcc(){
    	User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
        	List<ProcedureProfiling__c> procedureProfilingList = new List<ProcedureProfiling__c>();
            List<Account> accountList = TestDataFactory.createAccounts(2, 'CIM_Account', testUser.Id);
            ProcedureProfiling__c workflowProfiling1 = new ProcedureProfiling__c(Account__c = accountList[0].Id);
            insert workflowProfiling1;  
            
            for(Account acc : accountList){
            	for(Integer i=0; i<100; i++){
                	ProcedureProfiling__c workflowProfiling = new ProcedureProfiling__c(Account__c = acc.Id);
              	    procedureProfilingList.add(workflowProfiling);
                }
            }
            Test.startTest();
            try{
            	insert procedureProfilingList;
        	}catch(Exception ex){
            	Boolean expectedExceptionThrown =  ex.getMessage().contains(Label.One_Workflow_Profiling_record_per_Account) ? true : false;
				System.assertEquals(expectedExceptionThrown, true);
        	}
    		
            Test.stopTest();
            List<ProcedureProfiling__c> procedureProfilingInserted = [SELECT id, Account__c FROM ProcedureProfiling__c WHERE Account__c=: accountList[0].Id];
        	System.assertEquals(1, procedureProfilingInserted.size(),'Only one workflow is inserted');
        }
    }
    
}