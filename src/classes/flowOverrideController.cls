/*------------------------------------------------------------
Author: 		Richard Trum (Glimt) 2023-12-01
Description:   	AuraEnabled class to get action override settings when overriding standard actions with a screen flow
Test class:     Test_flowOverrideController
History
<Date>      <Authors Name>     <Brief Description of Change>
20231201 	Richard Trum		TFUS-000006257

------------------------------------------------------------*/

public with sharing class flowOverrideController {
    
    @AuraEnabled(cacheable=false)
    public static ActionOverride__mdt getFlowOverride(String objname, String actionname) {

        List<ActionOverride__mdt> actionSettings = new List<ActionOverride__mdt>();
        try{
            actionSettings = [SELECT DeveloperName, Object__r.QualifiedApiName, FlowName__c, ActionName__c FROM ActionOverride__mdt WHERE Object__r.QualifiedApiName =: objname AND ActionName__c =: actionname LIMIT 1];
        }
        catch(DmlException e){
            DebugLog.addException(e, 'flowOverrideController.getFlowOverride');
        }

        ActionOverride__mdt actionSetting = new ActionOverride__mdt();

        if(actionSettings.size()>0){
            actionSetting = actionSettings[0];
        }

        return actionSetting;
    }
}