/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Attendee Trigger Handler Class
Test class      Covered in Helper class's test class

History
30-03-2023     Create new class
----------------------------------------------------------------------------------------*/
public with sharing class AttendeeTriggerHandler extends TriggerHandler {

    private final List<CventEvents__Attendee__c> oldAttendeeList, newAttendeeList;
    private final Map<Id, CventEvents__Attendee__c> oldAttendeeMap, newAttendeeMap;

    /**
     * Construct
     */
    public AttendeeTriggerHandler() {
        oldAttendeeList = (List<CventEvents__Attendee__c>) Trigger.old;
        newAttendeeList = (List<CventEvents__Attendee__c>) Trigger.new;
        oldAttendeeMap = (Map<Id, CventEvents__Attendee__c>) Trigger.oldMap;
        newAttendeeMap = (Map<Id, CventEvents__Attendee__c>) Trigger.newMap;
    }

    /**
     * History:
     * Houssam  |   Added findMatchedAttendeeTemps to Mark Matched Temps
     * <author> |   <Change Description>
     */
    protected override void afterInsert()
    {
        AttendeeTriggerHelper.findMatchedAttendeeTemps(newAttendeeList);
    }
}