/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Scheduled Job that runs every hour to sync new API Changes to the Temp Attendees
Test class:     AttendeeTriggerHelperTest

History
20-03-2023     Create new class
----------------------------------------------------------------------------------------*/
global class ConvertUnmatchedTempsToLeadsSchedulable implements Schedulable {
    global void execute(SchedulableContext sc)
    {
        try
        {
            List<DynamicMapping__mdt> mappings = MappingManagement.getMapping(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD, false);

            // 1-Initiate the Set with the Required fields not mapped dynamically but statically in the code
            Set<String> allFields = new Set<String>{
                    'CventEvents__pkg_AttendeeStub__c',
                    'CventEvents__pkg_AttendeeStatus__c',
                    'MatchStatus__c',
                    'CventEvents__pkg_EventStub__c',
                    'CventEvents__pkg_Attended__c',
                    'Doyouhaveanintraoralscannerinyour__c',
                    'Whichsolutionsareyouinterestedin__c'
            };

            // 2-Add the Dynamic ones
            DynamicMapping__mdt mapping;
            for (Integer i = 0, j = mappings.size(); i < j; i++) {
                mapping = mappings[i];
                allFields.add(mapping.SourceFieldApiName__c);
            }

            // 3-Build the query
            Set<String> convertedEventsStubs = new Set<String>();

            Map<String, CventEvents__Event__c> stubToEvent = new Map<String, CventEvents__Event__c>();
            Map<String, Campaign> stubToConvertedCampaign = new Map<String, Campaign>();

            CventManagement.findConvertedEvents(stubToEvent,stubToConvertedCampaign);

            convertedEventsStubs = stubToEvent.keySet();
            Set<String> existingAttendeesStubs = CventManagement.getExistingAttendeesStubForConvertedEvents(convertedEventsStubs);

            String unmatchedStatus = 'Unmatched';
            String fieldsApiNames = String.join(new List<String>(allFields), ',');
            String queryString = 'SELECT ' + fieldsApiNames
                                +' FROM CventEvents__AttendeeTemp__c'
                                +' WHERE CventEvents__pkg_EventStub__c IN :convertedEventsStubs'
                                +      ' AND MatchStatus__c = :unmatchedStatus'
                                +      ' AND CventEvents__pkg_AttendeeStub__c NOT IN :existingAttendeesStubs';

            List<CventEvents__AttendeeTemp__c> unmatchedTemps = Database.query(queryString);

            if(!unmatchedTemps.isEmpty())
            {
                Map<String, List<CventEvents__AttendeeTemp__c>> tempsToProcess = CventManagement.assortByEventStub(unmatchedTemps);
                CventManagement.convertUnmatchedTempsToLeadsAndAttendees(stubToConvertedCampaign, stubToEvent, tempsToProcess);
            }

        }
        catch (Exception e) {
            DebugLog.addException(e,'ConvertUnmatchedTempsToLeadsSchedulable');
        }
    }
}