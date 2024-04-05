/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Attendee Temp Trigger Handler Class
Test class      Covered in Helper class's test class

History
20-03-2023     Create new class
----------------------------------------------------------------------------------------*/
    public with sharing class AttendeeTempTriggerHandler extends TriggerHandler {

        private final List<CventEvents__AttendeeTemp__c> oldTempAttendeeList, newTempAttendeeList;
        private final Map<Id, CventEvents__AttendeeTemp__c> oldTempAttendeeMap, newTempAttendeeMap;

        /**
         * Construct
         */
        public AttendeeTempTriggerHandler() {
            oldTempAttendeeList = (List<CventEvents__AttendeeTemp__c>) Trigger.old;
            newTempAttendeeList = (List<CventEvents__AttendeeTemp__c>) Trigger.new;
            oldTempAttendeeMap = (Map<Id, CventEvents__AttendeeTemp__c>) Trigger.oldMap;
            newTempAttendeeMap = (Map<Id, CventEvents__AttendeeTemp__c>) Trigger.newMap;
        }

        /**
         * History:
         * Houssam  |   Added synchronizeChanges to Synchronize the changes of Temp records so they reflect to their Attendees/Leads
         * <author> |   <Change Description>
         */
        protected override void afterUpdate()
        {
            AttendeeTempTriggerHelper.synchronizeChanges(oldTempAttendeeMap,newTempAttendeeMap);
        }
    }