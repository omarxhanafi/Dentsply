/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Cvent Management Class
Test class:     MappingManagementTest

History
20-03-2023     Houssam ADIB - Create new class
29-01-2024     Houssam ADIB - TFUS-000006858 - Map new fields from Temp to attendee ( static mapping ) and fix contact type not flowing
----------------------------------------------------------------------------------------*/
public without sharing class CventManagement {

    public static final String SOURCE_OBJECT_EVENT      = 'CventEvents__Event__c';
    public static final String TARGET_OBJECT_CAMPAIGN   = 'Campaign';

    public static final String SOURCE_OBJECT_TEMP       = 'CventEvents__AttendeeTemp__c';
    public static final String TARGET_OBJECT_LEAD       = 'Lead';

    public static final String CONVERTED_TO_LEAD       = 'Converted to Lead';

    /**
     * Searches for the Cvent Event record using the code field (CventEvents__pkg_Code__c)
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param cventCode             The Cvent Event Code
     *
     * @return List<CventEvents__Event__c> - Query Result
     */
    public static List<CventEvents__Event__c> findCventByCode(String cventCode)
    {
        List<CventEvents__Event__c> events = new List<CventEvents__Event__c>();
        events = [  SELECT Id,CventEvents__pkg_EventStub__c FROM CventEvents__Event__c
        WHERE CventEvents__pkg_Code__c = :cventCode];

        return events;
    }

    /**
     * Retrieve Matched Attendees for a particular event
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param sourceCvent Event
     *
     * @return Map<String,List<CventEvents__Attendee__c> - Map of attendees to their attendee stubs
     */
    public static Map<String,CventEvents__Attendee__c> getMatchedAttendees(CventEvents__Event__c sourceCvent)
    {
        Map<String,CventEvents__Attendee__c>  matchedAttendeesMap = new Map<String,CventEvents__Attendee__c>();

        for(CventEvents__Attendee__c attendee : [
                SELECT Id, Name, CventEvents__AttendeeName__c, CventEvents__AttendeeStub__c,
                        CventEvents__Company__c, CventEvents__CurrencyCode__c, CventEvents__CurrencyName__c,
                        CventEvents__Status__c, CventEvents__Email__c, CventEvents__EventStartDate__c,
                        CventEvents__EventStartTime__c, CventEvents__EventCheckInDate__c,
                        CventEvents__EventTimeZone__c, CventEvents__EventTitle__c, CventEvents__Event__c,
                        CventEvents__Lead__c, CventEvents__IsFreeloader__c, CventEvents__IsGroupLeader__c,
                        CventEvents__UnsubscribedFromEvent__c, CventEvents__Contact__c, CventEvents__Attended__c, ContactType__c
                FROM CventEvents__Attendee__c
                WHERE CventEvents__Event__c = :sourceCvent.Id])
        {
            matchedAttendeesMap.put(attendee.CventEvents__AttendeeStub__c,attendee);
        }

        return matchedAttendeesMap;
    }

    /**
     * Find exising Leads generated for unmatched attendees
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @return Map<String, Lead> - Maps stub to lead
     */
    public static Map<String, Lead> getStubToLead()
    {
        List<Lead> existingLeads = [SELECT Id, AttendeeStub__c FROM Lead WHERE AttendeeStub__c != NULL      ];
        Map<String, Lead> stubToLead = new Map<String, Lead>();
        Lead lead;
        for (Integer i = 0, j = existingLeads.size(); i < j; i++) {
            lead = existingLeads[i];
            stubToLead.put(lead.AttendeeStub__c, lead);
        }
        return stubToLead;
    }

    /**
     * Links the event with its generated campaign record
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param eventId       event Id
     * @param campaignId    campaign Id
     */
    public static void linkCampaignWithEvent(Id eventId, Id campaignId)
    {
        CventEvents__EventCampaignEntry__c link = new CventEvents__EventCampaignEntry__c();
        link.CventEvents__Event__c = eventId;
        link.CventEvents__Campaign__c = campaignId;
        insert link;
    }

    /**
     * Convert Unmatched Attendees to Leads
     * Makes sure not to duplicate leads using old existing stubToLead map
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param unmatchedAttendees            unmatched Attendees
     * @param newTempsConvertedToLeads      new unmatched Attendees converted to leads
     * @param sourceCvent                   Event
     * @param mappings                      Fields Mapping (mdt)
     * @param stubToLead                    AttendeeStub -> Lead Map
     * @param eventCampaigns                Existing converted campaign
     * @param attendeeWrappers              Attendees Wrappers
     *
     * @return List<Lead> - New Leads
     */
    public static List<Lead> InstantiateLeadsForUnmatchedTemps(     List<CventEvents__AttendeeTemp__c> unmatchedAttendees,
                                                                    List<CventEvents__AttendeeTemp__c> newTempsConvertedToLeads,
                                                                    CventEvents__Event__c sourceCvent,
                                                                    List<DynamicMapping__mdt> mappings,
                                                                    Map<String,Lead> stubToLead,
                                                                    Map<String,Campaign> eventCampaigns,
                                                                    List<AttendeeWrapper> attendeeWrappers )
    {
        List<Lead> newLeads = new List<Lead>();
        CventEvents__AttendeeTemp__c temp;
        Id leadRecordType = GlobalUtils.getRecordTypeId('Lead', 'CVENT_Lead');

        for (Integer i = 0, j = unmatchedAttendees.size(); i < j; i++)
        {
            // Wrappers will be used to generate attendees & members
            temp = unmatchedAttendees[i];
            AttendeeWrapper attendeeWrapper = new AttendeeWrapper();
            attendeeWrapper.event = sourceCvent;
            attendeeWrapper.matched = false;
            attendeeWrapper.tempAttendee = temp;

            if(stubToLead.containsKey(temp.CventEvents__pkg_AttendeeStub__c))
            {
                // If we already have one in the database generated before
                attendeeWrapper.lead = stubToLead.get(temp.CventEvents__pkg_AttendeeStub__c);
                if (temp.MatchStatus__c != CONVERTED_TO_LEAD)
                {
                    temp.MatchStatus__c = CONVERTED_TO_LEAD;
                    newTempsConvertedToLeads.add(temp);
                }
            }
            else
            {
                // Never been generated before, We create a new lead
                DynamicMapping__mdt mapping;
                Lead lead = new Lead();
                lead.Status = 'New';
                lead.RecordTypeId = leadRecordType;

                if(eventCampaigns.containsKey(sourceCvent.CventEvents__pkg_EventStub__c))
                {
                    lead.OwnerId = eventCampaigns.get(sourceCvent.CventEvents__pkg_EventStub__c).OwnerId;
                }

                // For each mapping, we get a field value and put it in the lead
                for (Integer x = 0, y = mappings.size(); x < y; x++)
                {
                    mapping = mappings[x];
                    Object targetValue = temp.get(mapping.SourceFieldApiName__c);
                    lead.put(mapping.TargetFieldApiName__c, targetValue);
                }

                lead.AttendeeStub__c = temp.CventEvents__pkg_AttendeeStub__c; // System field required not brought from mappings
                newLeads.add(lead);

                temp.MatchStatus__c = CONVERTED_TO_LEAD;
                newTempsConvertedToLeads.add(temp);

                attendeeWrapper.lead = lead;
            }

            attendeeWrappers.add(attendeeWrapper);
        }
        return newLeads;
    }


    /**
     * Partition And Process Wrappers to end up with 2 Lists:
     * 1-List of new attendees to insert (newAttendees)
     * 2-List of attendees that needs to be recreated to trigger campaign members creation by cvent app
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param attendeeWrappers                  Input:  Attendees Wrappers
     * @param attendeesToReCreateInLaterStage   Output: Attendees to recreate
     * @param newAttendees                      Output: Attendees to insert
     */
    public static void partitionAndProcessWrapper(List<AttendeeWrapper> attendeeWrappers, List<CventEvents__Attendee__c> attendeesToReCreateInLaterStage, List<CventEvents__Attendee__c> newAttendees)
    {
        AttendeeWrapper wrapper;

        for (Integer i = 0, j = attendeeWrappers.size(); i < j; i++)
        {
            wrapper = attendeeWrappers[i];

            CventEvents__Attendee__c attendee = new CventEvents__Attendee__c();
            if (!wrapper.matched)
            {
                // Create New Attendee for unmatched Temps. (+Static Cvent Fields.)
                attendee.CventEvents__Lead__c           = wrapper.lead.Id;
                attendee.CventEvents__Event__c          = wrapper.event.Id;
                attendee.CventEvents__Status__c         = wrapper.tempAttendee.CventEvents__pkg_AttendeeStatus__c;
                attendee.CventEvents__AttendeeStub__c   = wrapper.tempAttendee.CventEvents__pkg_AttendeeStub__c;
                attendee.CventEvents__Attended__c       = wrapper.tempAttendee.CventEvents__pkg_Attended__c;
                attendee.ContactType__c                 = wrapper.tempAttendee.CventEvents__pkg_ContactTypeName__c;
                attendee.IntraoralScannerInUse__c       = wrapper.tempAttendee.Doyouhaveanintraoralscannerinyour__c;
                attendee.SolutionsInterest__c           = wrapper.tempAttendee.Whichsolutionsareyouinterestedin__c;
            }
            else
            {
                // Clone deletes ones
                attendee = (wrapper.attendee).clone(false, true);
                attendeesToReCreateInLaterStage.add(wrapper.attendee);
            }
            newAttendees.add(attendee);
        }
    }

    /**
     * Triggers the conversion of Temp Records to Lead+Attendee for an event
     * @param stubToConvertedCampaign       Campaigns generated in a map by Event Stub
     * @param stubToEvent                   Events converted in a map by Event Stub
     * @param eventAndNewTempAttendees      Map of Converted Events To their unmatched Temps needing conversion to lead+attendee
     */
    public static void convertUnmatchedTempsToLeadsAndAttendees(Map<String, Campaign> stubToConvertedCampaign,
                                                                Map<String, CventEvents__Event__c> stubToEvent,
                                                                Map<String,List<CventEvents__AttendeeTemp__c>> eventAndNewTempAttendees)
    {
        if (!eventAndNewTempAttendees.isEmpty())
        {
            // Find existing leads by stub in case we already generated leads for temps
            Map<String, Lead> stubToLead = CventManagement.getStubToLead();

            List<DynamicMapping__mdt> mappings = MappingManagement.getMapping(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD,false);

            List<AttendeeWrapper> attendeeWrappers = new List<AttendeeWrapper>();
            List<Lead> newLeads = new List<Lead>();
            List<CventEvents__Attendee__c> newAttendees = new List<CventEvents__Attendee__c>();
            List<CventEvents__AttendeeTemp__c> newTempsConvertedToLeads = new List<CventEvents__AttendeeTemp__c>();

            for (String eventStub : eventAndNewTempAttendees.keySet()) {
                List<CventEvents__AttendeeTemp__c> eventTemps = eventAndNewTempAttendees.get(eventStub);
                newLeads.addAll(CventManagement.InstantiateLeadsForUnmatchedTemps(eventTemps,                     // All the Event unmatched Temps
                        newTempsConvertedToLeads,       // new Temps Converted To Leads.
                        stubToEvent.get(eventStub),     // Event
                        mappings,                       // Fields Mappings
                        stubToLead,                     // Existing Leads to avoid duplicates
                        stubToConvertedCampaign,        // Will be used to get campaign information
                        attendeeWrappers               // Forms an output. Will be used to insert Attendees
                        ));
            }

            // New Leads Insertion
            insertLeads(newLeads);

            List<CventEvents__Attendee__c> attendeesToReCreateInLaterStage = new List<CventEvents__Attendee__c>();
            CventManagement.partitionAndProcessWrapper(
                    attendeeWrappers,                   // Wrappers as an input
                    attendeesToReCreateInLaterStage,    // No recreation in this context, we only process new unmatched temps attendees
                    newAttendees);                      // Will be populate with new attendees to insert

            // New Attendees Insertion
            insertAttendees(newAttendees);

            CventManagement.updateTempStatus(newTempsConvertedToLeads);
        }
    }

    /**
     * Inserts New Leads
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param newLeads New Leads
     */
    public static void insertLeads(List<Lead> newLeads)
    {
        try {
            if (!newLeads.isEmpty()) {
                insert newLeads;
            }
        }
        catch (Exception e) {
            DebugLog.addException(e, 'CventManagement.triggerConvertTempAttendeesToLeads.Leads');
        }
    }

    /**
     * Inserts New Attendees
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param newAttendees  New Attendees
     */
    public static void insertAttendees(List<CventEvents__Attendee__c> newAttendees)
    {
        try {
            if (!newAttendees.isEmpty()) {
                insert newAttendees;
            }
        }
        catch (Exception e) {
            DebugLog.addException(e, 'CventManagement.triggerConvertTempAttendeesToLeads.Attendees');
        }
    }

    /**
    * Assort the map of Temp to a new map (EventStub -> List of child Temps)
    * @author hadib@salesforce.com | 20-03-2023
    *
    * @param unmatchedTemps Map of Temp Attendees
    *
    * @return Map<String, List<CventEvents__AttendeeTemp__c>> - Temp record to process
    */
    public static Map<String, List<CventEvents__AttendeeTemp__c>> assortByEventStub(List<CventEvents__AttendeeTemp__c>  unmatchedTemps)
    {
        Map<String, List<CventEvents__AttendeeTemp__c>> eventStubToTempAttendees = new Map<String, List<CventEvents__AttendeeTemp__c>>();

        CventEvents__AttendeeTemp__c temp;
        for (Integer i = 0, j = unmatchedTemps.size(); i < j; i++) {
            temp = unmatchedTemps[i];

            String key = temp.CventEvents__pkg_EventStub__c;
            if (eventStubToTempAttendees.containsKey(key)) {
                eventStubToTempAttendees.get(key).add(temp);
            }
            else {
                eventStubToTempAttendees.put(key, new List<CventEvents__AttendeeTemp__c>{temp});
            }
        }
        return eventStubToTempAttendees;
    }

    /**
     * Populate two maps with the converted event / campaigns
     * @author hadib@salesforce.com | 30-03-2023
     */
    public static void findConvertedEvents(Map<String, CventEvents__Event__c> stubToEvent, Map<String, Campaign> stubToConvertedCampaign)
    {
        CventEvents__EventCampaignEntry__c[] entries = [    SELECT   Id,CventEvents__Event__c,CventEvents__Campaign__c,
                                                                    CventEvents__Event__r.CventEvents__pkg_EventStub__c,
                                                                    CventEvents__Campaign__r.OwnerId
                                                            FROM    CventEvents__EventCampaignEntry__c ];

        // Gather all stubs in the entries
        for(CventEvents__EventCampaignEntry__c entry : entries)
        {
            stubToEvent.put(entry.CventEvents__Event__r.CventEvents__pkg_EventStub__c,entry.CventEvents__Event__r);
            stubToConvertedCampaign.put(entry.CventEvents__Event__r.CventEvents__pkg_EventStub__c,entry.CventEvents__Campaign__r);
        }
    }

    /**
     * Retrieves the existing attendees stubs for converted events
     * @author hadib@salesforce.com | 06-04-2023
     * @param convertedEventsStubs Set of converted events stubs
     *
     * @return Set of attendees stubs
     */
    public static Set<String> getExistingAttendeesStubForConvertedEvents(Set<String> convertedEventsStubs)
    {
        Set<String> existingAttendeesStubs = new Set<String>();

        List<CventEvents__Attendee__c> existingAttendees = [SELECT Id,CventEvents__AttendeeStub__c
                                                            FROM CventEvents__Attendee__c
                                                            WHERE CventEvents__Event__r.CventEvents__pkg_EventStub__c IN :convertedEventsStubs];

        CventEvents__Attendee__c attendee;
        for (CventEvents__Attendee__c existingAttendee : existingAttendees)
        {
            attendee = existingAttendee;
            if(attendee.CventEvents__AttendeeStub__c != null)
            {
                existingAttendeesStubs.add(attendee.CventEvents__AttendeeStub__c);
            }
        }

        return existingAttendeesStubs;
    }

    /**
     * Sets MatchStatus__c for the temp record and set it to 'Converted to Lead' Was set in InstantiateLeadsForUnmatchedTemps function
     * @author hadib@salesforce.com | 01-11-2023
     *
     * @param newTempsConvertedToLeads new Temps Converted To Leads
     */
    public static void updateTempStatus(List<CventEvents__AttendeeTemp__c> newTempsConvertedToLeads)
    {
        try {
            update newTempsConvertedToLeads;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'quickCreateCampaignFromCventController.updateTempStatus');
        }
    }

    /**
     * Switch On or Off the isConverted__c checkbox on the Cvent Event Record based on their conversion state
     * @author hadib@salesforce.com | 01-11-2023
     *
     * @param entries       Event Campaign Entry record
     * @param isConverted   Value to put on isConverted field on the parent event
     */
    public static void tickParentEventAs(List<CventEvents__EventCampaignEntry__c> entries, Boolean isConverted)
    {
        Set<Id> eventIds = new Set<Id>();

        for (CventEvents__EventCampaignEntry__c entry : entries) {
            eventIds.add(entry.CventEvents__Event__c);
        }

        List<CventEvents__Event__c> eventsToUpdate = [SELECT Id, IsConverted__c FROM CventEvents__Event__c WHERE Id IN :eventIds];

        for (CventEvents__Event__c event : eventsToUpdate) {
            event.IsConverted__c = isConverted;
        }

        if (!eventsToUpdate.isEmpty()) {
            try {
                update eventsToUpdate;
            }
            catch (Exception e) {
                DebugLog.addException(e,'Error in updating events "Is converted" field.');
            }
        }
    }
}