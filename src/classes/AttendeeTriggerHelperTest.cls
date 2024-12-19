/**
 * Created by hadib on 31/3/2023.
 */

@isTest
public without sharing class AttendeeTriggerHelperTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
    }

    @isTest
    private static void testConvertedEventReceivedNewMatchedAttendee(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            // Convert Event to Campaign
            quickCreateCampaignFromCventController.ResultWrapper resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            // Create Temp Attendee and match it with a contact
            CventEvents__AttendeeTemp__c temp = TestDataFactory.createAttendeeTemp('AttendeeStubId', event.CventEvents__pkg_EventStub__c, true);
            Contact contact = new Contact(LastName = 'Test', CventEvents__ContactStub__c = temp.CventEvents__pkg_ContactStub__c);
            insert contact;

            // When
            Test.startTest();
            CventEvents__Attendee__c attendee = TestDataFactory.createAttendee(contact, event, temp, null, true);
            Test.stopTest();

            // Then
            CventEvents__AttendeeTemp__c tempStatus = [SELECT Id, MatchStatus__c FROM CventEvents__AttendeeTemp__c WHERE Id = :temp.Id];
            System.assertEquals('Matched', tempStatus.MatchStatus__c, 'Wrong Attendee Temp Status');
        }
    }

    @IsTest
    private static void testConvertedEventReceivedNewUnMatchedAttendee(){
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            // Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event = TestDataFactory.createCventEvent(eventCode, true);
            // Convert Event to Campaign
            quickCreateCampaignFromCventController.ResultWrapper resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);

            Campaign c = [ SELECT Id, OwnerId FROM Campaign WHERE Id = :(Id)resultOne.result];
            c.OwnerId = [ SELECT Id FROM User WHERE Name='Christian Schneider'].Id;

            update c;
            Campaign c2 = [ SELECT Id, OwnerId FROM Campaign WHERE Id = :(Id)resultOne.result];

            // Create Temp Attendee and match it with a contact
            CventEvents__AttendeeTemp__c tempMatched = TestDataFactory.createAttendeeTemp('AttendeeStubId', event.CventEvents__pkg_EventStub__c, true);
            Contact contact = new Contact(LastName = 'Test', CventEvents__ContactStub__c = tempMatched.CventEvents__pkg_ContactStub__c);
            insert contact;

            // UnMatched
            CventEvents__AttendeeTemp__c tempUnmatched = TestDataFactory.createAttendeeTemp('AttendeeStubIdTwo', event.CventEvents__pkg_EventStub__c, true);

            // When
            Test.startTest();
            CventEvents__Attendee__c attendee = TestDataFactory.createAttendee(contact, event, tempMatched, null, true);
            String jobId = System.schedule('Test_Schedulable_Job_' + Datetime.now().format('yyyyMMddHHmmss'), '0 0 * * * ?', new ConvertUnmatchedTempsToLeadsSchedulable());
            Test.stopTest();


            List<Lead> leadGenerated = [ SELECT Id,OwnerId FROM Lead WHERE AttendeeStub__c='AttendeeStubIdTwo'];
            CventEvents__AttendeeTemp__c tempMatchedStatus = [SELECT Id, MatchStatus__c FROM CventEvents__AttendeeTemp__c WHERE Id = :tempMatched.Id];
            CventEvents__AttendeeTemp__c tempUnmatchedStatus = [SELECT Id, MatchStatus__c FROM CventEvents__AttendeeTemp__c WHERE Id = :tempUnMatched.Id];

            // Then
            System.assertNotEquals(0, leadGenerated.size(), 'No lead generated for the new Attendee Temp upon execution of ConvertUnmatchedTempsToLeads Schedulable');
            System.assertEquals(c2.OwnerId, leadGenerated[0].OwnerId, 'Lead generated with wrong Owner');
        }
    }
}