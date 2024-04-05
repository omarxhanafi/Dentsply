/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Platform Event Trigger Helper
Test class      NotificationEventTest

History
01-01-2024      Create new class
----------------------------------------------------------------------------------------*/
public with sharing class NotificationTriggerHelper {

    /**
     * This methods logs an exception instantly if the type field is 'Exception',
     * even if the transaction rollbacks on the failing process.
     * @param newNotificationList List of new Platform event notifications
     * @author hadib@salesforce.com - 01-01-2024
     */
    public static void logExceptionInstantly(List<Notification__e> newNotificationList)
    {
        List<DebugLog__c> debugLogs = new List<DebugLog__c>();
        for(Notification__e notification : newNotificationList)
        {
            if(notification.Type__c == NotificationEventPublisher.EXCEPTION_TYPE)
            {
                debugLogs.add(DebugLog.returnError(notification.Context__c, notification.Type__c, notification.Message__c, notification.AdditionalInfo__c));
            }
        }

        if(!debugLogs.isEmpty())
        {
            Database.insert(debugLogs,false);
        }
    }
}