/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test Class Covering: NotificationTrigger, NotificationTriggerHandler, NotificationEventPublisher

History
01-01-2024      Create new test class
----------------------------------------------------------------------------------------*/
@IsTest
public with sharing class NotificationEventTest
{
    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
    }

    @isTest
    public static void testNotificationPublisher()
    {
        // Given PE trigger is active
        Test.startTest();
        // When
        NotificationEventPublisher.publishNotification(NotificationEventPublisher.CVENT_CONTEXT
                ,NotificationEventPublisher.CVENT_TYPE
                ,'Validations'
                ,'This is a notification message to inform that validations has Started..');
        Test.stopTest();
        // Then Assert if debug log is created
        List<DebugLog__c> debugLogs = [SELECT Id FROM DebugLog__c WHERE Severity__c = 'ERROR'];
        System.assertEquals(debugLogs.size(),0,'Error logs logged of type Error');
    }

    @isTest
    public static void testNotificationPublisherWithAdditionalInfos()
    {
        // Given PE trigger is active
        Test.startTest();
        // When
        NotificationEventPublisher.publishNotification( NotificationEventPublisher.EXCEPTION_CONTEXT,   NotificationEventPublisher.EXCEPTION_TYPE,
                'Error','getMembersCount',       'additionalInfo');

        Test.stopTest();
        // Then Assert if debug log is created
        List<DebugLog__c> debugLogs = [SELECT Id FROM DebugLog__c WHERE Severity__c = 'ERROR'];
        System.assertNotEquals(debugLogs.size(),0,'No error logs logged of type Error');
    }
}