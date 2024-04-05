/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Attendee Temp Trigger Helper Class
Test class      AttendeeTempTriggerHelperTest

History
20-03-2023      Create new helper class
29-01-2024      TFUS-000005641 - Add Contact Type on campaign member
----------------------------------------------------------------------------------------*/

public with sharing class AttendeeTempTriggerHelper {

    /**
     * Synchronize the changes of Temp records so they reflect to their Attendees/Leads
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param oldTempAttendeeMap Old Map of Temp Records before update
     * @param newTempAttendeeMap New Map of Temp Records after update
     */
    public static void synchronizeChanges(  Map<Id, CventEvents__AttendeeTemp__c> oldTempAttendeeMap,
                                            Map<Id, CventEvents__AttendeeTemp__c> newTempAttendeeMap)
    {
        List<AttendeeWrapper> changedTempAttendeesToBeSynced = new List<AttendeeWrapper>();
        List<DynamicMapping__mdt> mappings = MappingManagement.getMapping(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD,true);

        for (CventEvents__AttendeeTemp__c tempAttendee : newTempAttendeeMap.values())
        {
            AttendeeWrapper attendeeWrapper = new AttendeeWrapper();
            if(!String.isBlank(tempAttendee.CventEvents__pkg_AttendeeStub__c))
            {
                CventEvents__AttendeeTemp__c oldTempAttendee = oldTempAttendeeMap.get(tempAttendee.Id);

                if(tempAttendee.MatchStatus__c != 'Unmatched') // Process Only (Matched + Converted to Lead)
                {
                    if(mappedFieldHasChanged(tempAttendee, oldTempAttendee,mappings))
                    {
                        attendeeWrapper.tempAttendee = tempAttendee;
                        changedTempAttendeesToBeSynced.add(attendeeWrapper);
                    }
                }
            }
        }

        // We detected changes in mapped fields
        if(!changedTempAttendeesToBeSynced.isEmpty())
        {
            Set<String> attendeesStubs = extractStubs(changedTempAttendeesToBeSynced);

            List<CventEvents__Attendee__c> attendees = [    SELECT  Id,CventEvents__AttendeeStub__c,CventEvents__Lead__c
                                                            FROM    CventEvents__Attendee__c
                                                            WHERE   CventEvents__AttendeeStub__c IN :attendeesStubs];

            Set<Id> leadsToSync = findAndPopulateAttendeeByStubAndReturnLeadsToSync(attendees, changedTempAttendeesToBeSynced);

            findAndPopulateLeads(leadsToSync, changedTempAttendeesToBeSynced);

            synchronize(changedTempAttendeesToBeSynced,mappings);
        }
    }

    /**
     * The method returns a Boolean value indicating whether or not there have been changes in the mapped fields.
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param tempAttendee      New values of the Temp record
     * @param oldTempAttendee   old Temp record
     * @param mappings          Fields mapped
     *
     * @return Boolean - indicating whether or not there have been changes in the mapped fields
     */
    public static Boolean mappedFieldHasChanged(CventEvents__AttendeeTemp__c tempAttendee, CventEvents__AttendeeTemp__c oldTempAttendee,
            List<DynamicMapping__mdt> mappings)
    {
        Boolean mappedFieldHasChanged = false;

        for(DynamicMapping__mdt mapping : mappings)
        {
            if(tempAttendee.get(mapping.SourceFieldApiName__c) != oldTempAttendee.get(mapping.SourceFieldApiName__c))
            {
                mappedFieldHasChanged = true;
                break;
            }
        }

        // Manual Field mapped statically for Temp -> Attendee
        if( tempAttendee.CventEvents__pkg_AttendeeStatus__c         != oldTempAttendee.CventEvents__pkg_AttendeeStatus__c
            || tempAttendee.CventEvents__pkg_Attended__c            != oldTempAttendee.CventEvents__pkg_Attended__c
            || tempAttendee.CventEvents__pkg_ContactTypeName__c     != oldTempAttendee.CventEvents__pkg_ContactTypeName__c )
        {
            mappedFieldHasChanged = true;
        }
        return mappedFieldHasChanged;
    }

    /**
     * Synchronizes the new changes received in the temps records to their related records (lead or attendee)
     * @author hadib@salesforce.com | 20-03-2023
     * `
     * @param changedTempAttendeesToBeSynced    List of Attendees wrapper
     * @param mappings                          List fields mappings
     */
    public static void synchronize(List<AttendeeWrapper> changedTempAttendeesToBeSynced, List<DynamicMapping__mdt> mappings)
    {
        List<Lead> leadsToUpdate = new List<Lead>();
        List<CventEvents__Attendee__c> attendeesToUpdate = new List<CventEvents__Attendee__c>();

        for (AttendeeWrapper wrapper : changedTempAttendeesToBeSynced)
        {
            if(wrapper.lead != null)
            {
                for (DynamicMapping__mdt mapping : mappings)
                {
                    Object targetValue = wrapper.tempAttendee.get(mapping.SourceFieldApiName__c);
                    wrapper.lead.put(mapping.TargetFieldApiName__c, targetValue);
                }
                leadsToUpdate.add(wrapper.lead);
            }

            if(wrapper.attendee != null)
            {
                wrapper.attendee.CventEvents__Status__c     = wrapper.tempAttendee.CventEvents__pkg_AttendeeStatus__c;
                wrapper.attendee.CventEvents__Attended__c   = wrapper.tempAttendee.CventEvents__pkg_Attended__c;
                wrapper.attendee.ContactType__c             = wrapper.tempAttendee.CventEvents__pkg_ContactTypeName__c;
                attendeesToUpdate.add(wrapper.attendee);
            }
        }

        updateLeads(leadsToUpdate);

        updateAttendees(attendeesToUpdate);
    }

    /**
     * Updates the attendees records with the new changes received
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param attendeesToUpdate Attendees records
     */
    public static void updateAttendees(List<CventEvents__Attendee__c> attendeesToUpdate)
    {
        if(!attendeesToUpdate.isEmpty())
        {
            try {
                update attendeesToUpdate;
            }
            catch (Exception e) {
                DebugLog.addException(e, 'AttendeeTempTriggerHandler.sync(attendees)');
            }
        }
    }

    /**
     * Updates the leads with the new changes received
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param leadsToUpdate     Leads to update
     */
    public static void updateLeads(List<Lead> leadsToUpdate)
    {
        if(!leadsToUpdate.isEmpty())
        {
            try {
                update leadsToUpdate;
            }
            catch (Exception e) {
                DebugLog.addException(e, 'AttendeeTempTriggerHandler.sync(leads)');
            }
        }
    }

    /**
     * Searches for matching Lead records based on a set of Lead ID
     * And updates an AttendeeWrapper object with the corresponding Lead object for each attendee.
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param leadsToSync                       Set of Leads Ids
     * @param changedTempAttendeesToBeSynced    Attendees Wrappers
     */
    public static void findAndPopulateLeads(Set<Id> leadsToSync, List<AttendeeWrapper> changedTempAttendeesToBeSynced)
    {
        List<Lead> leads = [SELECT Id FROM Lead WHERE Id IN :leadsToSync];
        for (Lead lead : leads) {
            for (AttendeeWrapper attendeeWrapper : changedTempAttendeesToBeSynced) {
                if (attendeeWrapper.attendee.CventEvents__Lead__c == lead.Id) {
                    attendeeWrapper.lead = lead;
                    break;
                }
            }
        }
    }

    /**
     * Checks for attendees and matches them with changed AttendeeWrapper objects,
     * and if there is a related Lead record, it adds the Lead's ID to a set.
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param attendees                         List of Attendees records
     * @param changedTempAttendeesToBeSynced    The changed Temp records
     *
     * @return Set<Id> - Id of Leads to synchronize
     */
    public static Set<Id> findAndPopulateAttendeeByStubAndReturnLeadsToSync(List<CventEvents__Attendee__c> attendees, List<AttendeeWrapper> changedTempAttendeesToBeSynced)
    {
        Set<Id> leadsToSync = new Set<Id>();
        for (CventEvents__Attendee__c att : attendees) {
            for (AttendeeWrapper attendeeWrapper : changedTempAttendeesToBeSynced) {
                if (attendeeWrapper.tempAttendee.CventEvents__pkg_AttendeeStub__c == att.CventEvents__AttendeeStub__c) {
                    attendeeWrapper.attendee = att;
                    if(att.CventEvents__Lead__c != null)
                    {
                        leadsToSync.add(att.CventEvents__Lead__c);
                    }
                    break;
                }
            }
        }
        return leadsToSync;
    }

    /**
     * Extracts the set of attendees stubs from attendee wrappers
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param changedTempAttendeesToBeSynced List of attendees wrappers
     *
     * @return Set<String> - Set of Attendees Stubs
     */
    public static Set<String> extractStubs(List<AttendeeWrapper> changedTempAttendeesToBeSynced)
    {
        Set<String> attendeesStubs = new Set<String>();
        for (AttendeeWrapper att : changedTempAttendeesToBeSynced) {
            attendeesStubs.add(att.tempAttendee.CventEvents__pkg_AttendeeStub__c);
        }
        return attendeesStubs;
    }

}