@IsTest
public with sharing class AttendeeTempTriggerHelperTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
    }

    @isTest
    private static void testConvertedEventReceivedNewUpdatesInTemp(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            CventEvents__AttendeeTemp__c temp = TestDataFactory.createAttendeeTemp('AttendeeStubId', event.CventEvents__pkg_EventStub__c, true);

            quickCreateCampaignFromCventController.ResultWrapper resultOne;
            quickCreateCampaignFromCventController.ResultWrapper resultTwo;
            quickCreateCampaignFromCventController.ResultWrapper resultThree;

            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            resultTwo = quickCreateCampaignFromCventController.convertTempAttendeesToLeads(eventCode);
            resultThree = quickCreateCampaignFromCventController.createNewAttendeesFromLeads(resultTwo.attendeeWrappers);

            // When
            Test.startTest();
            TriggerHandler.clearBypass('AttendeeTempTriggerHandler');
            temp.CventEvents__pkg_AttendeeStatus__c = 'Accepted';
            temp.CventEvents__pkg_Email__c = 'newemail@gmail.com';
            update temp;
            Test.stopTest();

            Lead lead = [SELECT Id, Email FROM Lead WHERE AttendeeStub__c = 'AttendeeStubId'];
            CventEvents__Attendee__c attendee = [SELECT Id, CventEvents__Status__c FROM CventEvents__Attendee__c WHERE CventEvents__AttendeeStub__c = 'AttendeeStubId'];
            //Then
            System.assertEquals('newemail@gmail.com', lead?.Email, 'Lead Email Not Synced');
            System.assertEquals('Accepted', attendee?.CventEvents__Status__c, 'Attendee Status Not Synced');
        }
    }
}