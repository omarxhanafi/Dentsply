/*------------------------------------------------------------  
Author:         Richard Trum 2021-02-23    
Description:    Standard Lead Trigger Handler Class. 
History 
<Date>      <Authors Name>     <Brief Description of Change>
20210223    Richard Trum      Created trigger framework for standard leads
------------------------------------------------------------*/

public class StandardLeadTriggerHandler extends TriggerHandler {
    private List<Lead> oldLeadList, newLeadList;
    private Map<Id, Lead> oldLeadMap, newLeadMap;
    
    public StandardLeadTriggerHandler() {
        oldLeadList = (List<Lead>) Trigger.old;
        newLeadList = (List<Lead>) Trigger.new;
        oldLeadMap = (Map<Id, Lead>) Trigger.oldMap;
        newLeadMap = (Map<Id, Lead>) Trigger.newMap;
    }

    /**
     * After Insert Context
     */
    protected override void afterInsert() {
        StandardLeadTriggerHelper.processLeads(newLeadMap, null);
    }

    /**
     * After Update Context
     */
    protected override void afterUpdate() {
        StandardLeadTriggerHelper.updateCampaignMembers(oldLeadMap,newLeadMap);
        StandardLeadTriggerHelper.processLeads(newLeadMap, oldLeadMap);
    }
}