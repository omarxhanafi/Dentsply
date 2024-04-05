/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test Covering main functionalities of CVENT Custom solution we built to convert Events to campaigns

History
01-12-2022     Create new class
----------------------------------------------------------------------------------------*/
@isTest
public without sharing class CreateCampaignFromCventControllerTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
    }

    @isTest
    private static void testInvalidCode(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            quickCreateCampaignFromCventController.ResultWrapper result = new quickCreateCampaignFromCventController.ResultWrapper();
            String invalidCode = '';

            // When
            Test.startTest();
            result = quickCreateCampaignFromCventController.createCampaignFromCvent(invalidCode,'',false);
            Test.stopTest();

            //Then
            System.assertEquals('Error', result.status, 'Unexpected result returned');
        }
    }

    @isTest
    private static void testNotFoundCode(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            quickCreateCampaignFromCventController.ResultWrapper result = new quickCreateCampaignFromCventController.ResultWrapper();
            String notFoundCode = '123123123123';

            // When
            Test.startTest();
            result = quickCreateCampaignFromCventController.createCampaignFromCvent(notFoundCode,'',false);
            Test.stopTest();

            //Then
            System.assertEquals('Not Found', result.status, 'Unexpected result returned');
        }
    }

    @isTest
    private static void testConvertEventOnly(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            quickCreateCampaignFromCventController.ResultWrapper result;

            // When
            Test.startTest();
            result = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            result = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            Test.stopTest();

            //Then
            Id campaignId;
            try {
                campaignId = (Id) result.result;
            }
            catch (Exception e) {
                System.assert(false, 'Invalid Campaign Id');
            }
            List<Campaign> campaignResult = [SELECT Id FROM Campaign WHERE Id = :campaignId];
            System.assert(!campaignResult.isEmpty(), 'Campaign not found');
        }
    }

    @isTest
    private static void testAlreadyConvertedError(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            quickCreateCampaignFromCventController.ResultWrapper resultOne;
            quickCreateCampaignFromCventController.ResultWrapper resultTwo;

            // When
            Test.startTest();
            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            resultTwo = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            Test.stopTest();

            //Then
            //System.assertEquals('Existing', resultTwo.status, 'Unexpected Result Status');
        }
    }

    @isTest
    private static void testEventWithUnmatchedTemp(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            CventEvents__AttendeeTemp__c temp = TestDataFactory.createAttendeeTemp('AttendeeStubId', event.CventEvents__pkg_EventStub__c, true);
            quickCreateCampaignFromCventController.ResultWrapper resultOne;
            quickCreateCampaignFromCventController.ResultWrapper resultTwo;

            // When
            Test.startTest();
            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            resultTwo = quickCreateCampaignFromCventController.convertTempAttendeesToLeads(eventCode);
            Test.stopTest();

            //Then
            System.assertNotEquals(0, resultTwo?.attendeeWrappers?.size(), 'No Leads generated for unmatched Attendees');
        }
    }

    @isTest
    private static void testEventWitMatchedTemp(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            CventEvents__AttendeeTemp__c temp = TestDataFactory.createAttendeeTemp('AttendeeStubId', event.CventEvents__pkg_EventStub__c, true);
            Contact contact = new Contact(LastName = 'Test', CventEvents__ContactStub__c = temp.CventEvents__pkg_ContactStub__c);
            insert contact;
            CventEvents__Attendee__c attendee = TestDataFactory.createAttendee(contact, event, temp, null, true);
            Id originalAttendeeId = attendee.Id;
            quickCreateCampaignFromCventController.ResultWrapper resultOne;
            quickCreateCampaignFromCventController.ResultWrapper resultTwo;
            quickCreateCampaignFromCventController.ResultWrapper resultThree;

            // When
            Test.startTest();
            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            resultTwo = quickCreateCampaignFromCventController.convertTempAttendeesToLeads(eventCode);
            resultThree = quickCreateCampaignFromCventController.createNewAttendeesFromLeads(resultTwo?.attendeeWrappers);
            Test.stopTest();

            //Then
            CventEvents__Attendee__c recreatedAttendee = [SELECT Id FROM CventEvents__Attendee__c WHERE CventEvents__Contact__c = :contact.Id];
            System.assertNotEquals(originalAttendeeId, recreatedAttendee.Id, 'Attendee hasn\'t been recreated');
        }
    }


}