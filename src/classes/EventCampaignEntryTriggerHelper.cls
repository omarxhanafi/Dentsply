/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Event Campaign Entry Trigger Helper Class
Test class      EventCampaignEntryTriggerHelperTest

History
01-11-2023      Houssam ADIB    Create new class
----------------------------------------------------------------------------------------*/
public class EventCampaignEntryTriggerHelper {

    /**
     * @param entries       Event Campaign Entry record
     * @param isConverted   Value to put on isConverted field on the parent event
     */
    public static void tickParentEventAs(List<CventEvents__EventCampaignEntry__c> entries, Boolean isConverted)
    {
        CventManagement.tickParentEventAs(entries,isConverted);
    }
}