/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : ProcedureProfiling trigger helper
 * Test class        : Test_ProcedureProfilingTriggerHelper
 * History	
 * 03-02-2022         created, added checkWorkflowPerAccount method (#TFUS-000003966)
--------------------------------------------------------------------------------------------------*/
public  with sharing class ProcedureProfilingTriggerHelper {
	/*------------------------------------------------------------	
	Description: Checks that there's only one workflow profiling record per account
	Inputs: List<ProcedureProfiling__c> newProcedureProfilingList list of workflow to be inserted 
    -------------------------------------------------------------*/	
    public static void checkWorkflowPerAccount(List<ProcedureProfiling__c> newProcedureProfilingList) {
        Set<Id> accountIds = new Set<Id>();
        Map<Id, ProcedureProfiling__c> procedureProfilingPerAcc = new Map<Id, ProcedureProfiling__c>();
        for(ProcedureProfiling__c procedureProfiling: newProcedureProfilingList){
        	accountIds.add(procedureProfiling.Account__c);
    	}
        List<ProcedureProfiling__c> existingProcedureProfilingList = [SELECT id, Account__c FROM ProcedureProfiling__c WHERE Account__c IN: accountIds];
        if(!existingProcedureProfilingList.isEmpty()){
            for(ProcedureProfiling__c procedureProfilingItem: existingProcedureProfilingList){
                procedureProfilingPerAcc.put(procedureProfilingItem.Account__c, procedureProfilingItem);
            }
            for(ProcedureProfiling__c procedureProfilingItem: newProcedureProfilingList){
                if(procedureProfilingPerAcc.containsKey(procedureProfilingItem.Account__c)){
                    procedureProfilingItem.addError(Label.One_Workflow_Profiling_record_per_Account );
                }
            }
        } 
    }
}