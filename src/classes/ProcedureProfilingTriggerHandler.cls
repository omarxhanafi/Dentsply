/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : ProcedureProfiling trigger handler
 * Test class        : Test_ProcedureProfilingTriggerHandler
 * History	
 * 03-02-2022         created, added beforeInsert method (#TFUS-000003966)
--------------------------------------------------------------------------------------------------*/
public with sharing class ProcedureProfilingTriggerHandler extends TriggerHandler{
  	private List<ProcedureProfiling__c> oldProcedureProfilingList, newProcedureProfilingList;
    private Map<Id, ProcedureProfiling__c> oldProcedureProfilingMap, newProcedureProfilingMap;
    public ProcedureProfilingTriggerHandler() {
        oldProcedureProfilingList = (List<ProcedureProfiling__c>) Trigger.old;
        newProcedureProfilingList = (List<ProcedureProfiling__c>) Trigger.new;
        oldProcedureProfilingMap = (Map<Id, ProcedureProfiling__c>) Trigger.oldMap;
        newProcedureProfilingMap = (Map<Id, ProcedureProfiling__c>) Trigger.newMap;
    }
    
    protected override void beforeInsert() {
        ProcedureProfilingTriggerHelper.checkWorkflowPerAccount(newProcedureProfilingList);
    }
}