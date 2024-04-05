/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Event Campaign Entry Trigger Handler Class
Test class      EventCampaignEntryTriggerHelperTest

History
01-11-2023      Houssam ADIB    Create new class
----------------------------------------------------------------------------------------*/
public with sharing class EventCampaignEntryTriggerHandler extends TriggerHandler {

    private List<CventEvents__EventCampaignEntry__c> oldEntriesList, newEntriesList;
    private Map<Id, CventEvents__EventCampaignEntry__c> oldEntriesMap, newEntriesMap;

    /**
     * Construct
     */
    public EventCampaignEntryTriggerHandler() {
        oldEntriesList = (List<CventEvents__EventCampaignEntry__c>) Trigger.old;
        newEntriesList = (List<CventEvents__EventCampaignEntry__c>) Trigger.new;
        oldEntriesMap = (Map<Id, CventEvents__EventCampaignEntry__c>) Trigger.oldMap;
        newEntriesMap = (Map<Id, CventEvents__EventCampaignEntry__c>) Trigger.newMap;
    }

    /**
     * History:
     * Houssam  |
     * <author> |   <Change Description>
     */
    protected override void afterInsert()
    {
        EventCampaignEntryTriggerHelper.tickParentEventAs(newEntriesList, true);
    }

    /**
     * History:
     * Houssam  |
     * <author> |   <Change Description>
     */
    protected override void afterDelete()
    {
        EventCampaignEntryTriggerHelper.tickParentEventAs(oldEntriesList, false);
    }
}