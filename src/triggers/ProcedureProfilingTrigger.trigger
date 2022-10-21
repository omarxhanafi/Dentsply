/*------------------------------------------------------------	
Author: 	naoussar@salesforce.com 31-01-2022	
Description:   	Trigger for ProcedureProfiling__c (Following Trigger Framework)(#TFUS-000003966)
------------------------------------------------------------*/
trigger ProcedureProfilingTrigger on ProcedureProfiling__c (before insert) {
 new ProcedureProfilingTriggerHandler().run();
}