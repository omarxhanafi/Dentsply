/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Attendee Trigger Helper Class
Test class      AttendeeTriggerHelperTest

History
30-03-2023     Create new helper class
----------------------------------------------------------------------------------------*/
public with sharing class AttendeeTriggerHelper
{
    /**
     * Updates MatchStatus__c field on Attendee Temp records based on whether the attendee is matched against a contact or not
     * @author hadib@salesforce.com | 30-03-2023
     *
     * @param newAttendees New Attendee records
     */
    public static void findMatchedAttendeeTemps(List<CventEvents__Attendee__c> newAttendees)
    {
        List<CventEvents__AttendeeTemp__c> matchedAttendeeTemps = new List<CventEvents__AttendeeTemp__c>();
        Set<String> attendeeStubs = new Set<String>();

        // Find attendee temps corresponding to new attendees with a non-null Contact field
        for (CventEvents__Attendee__c newAttendee : newAttendees) {
            if (newAttendee.CventEvents__Contact__c != null)
            {
                attendeeStubs.add(newAttendee.CventEvents__AttendeeStub__c);
            }
        }

        // Find attendee temps corresponding to attendee stubs and add to matchedAttendeeTemps
        if (!attendeeStubs.isEmpty()) {
            matchedAttendeeTemps = [SELECT Id, MatchStatus__c FROM CventEvents__AttendeeTemp__c WHERE CventEvents__pkg_AttendeeStub__c IN :attendeeStubs];
            updateAttendeeTempMatchStatus(matchedAttendeeTemps,'Matched');
        }
    }

    /**
     * Update MatchStatus__c field on the Attendee Temps records
     * @author hadib@salesforce.com | 30-03-2023
     *
     * @param attendeeTempsToUpdate Attendee Temp records to update
     * @param matchStatusValue      MatchStatus field value
     */
    public static void updateAttendeeTempMatchStatus(List<CventEvents__AttendeeTemp__c> attendeeTempsToUpdate, String matchStatusValue)
    {
        for (CventEvents__AttendeeTemp__c attendeeTemp : attendeeTempsToUpdate) {
            attendeeTemp.MatchStatus__c = matchStatusValue;
        }

        try {
            update attendeeTempsToUpdate;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'AttendeeTriggerHelper.updateAttendeeTempMatchStatus');
        }
    }
}