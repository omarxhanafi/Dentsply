/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test Class Covering EventCampaignEntry Trigger, Handler, and Helper.

History
01-11-2023      Houssam ADIB    Create new class
----------------------------------------------------------------------------------------*/
@isTest
public class EventCampaignEntryTriggerHelperTest {

    @TestSetup
    private static void setup(){
        TestDataFactory.createBypassCustomSetting();
    }

    /**
     * Test method to convert events and assert that the 'isConverted__c' flag is set to true.
     */
    @IsTest
    private static void testConvertEvents() {
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event =       TestDataFactory.createCventEvent(eventCode, true);
            quickCreateCampaignFromCventController.ResultWrapper resultOne;

            // When
            Test.startTest();
            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            Test.stopTest();

            // Then Verify that the Event is marked as converted
            event = [SELECT isConverted__c FROM CventEvents__Event__c WHERE Id = :event.Id];
            System.assertEquals(true, event.isConverted__c,'Is Converted Flag is wrong on the converted Event.');
        }
    }

    /**
     * Test method to unconvert events and assert that the 'isConverted__c' flag is set to false.
     */
    @IsTest
    private static void testUnconvertEvents() {
        TestDataFactory.assignPermissionSet(UserInfo.getUserId(),'Global_Campaigns_CVENT_Campaigns');
        System.runAs(new User(Id=UserInfo.getUserId()))
        {
            //Given
            String eventCode = 'P7N2MG8Y827';
            CventEvents__Event__c event =       TestDataFactory.createCventEvent(eventCode, true);
            quickCreateCampaignFromCventController.ResultWrapper resultOne;

            // When
            Test.startTest();
            // Switch ON
            resultOne = quickCreateCampaignFromCventController.createCampaignFromCvent(eventCode,'',false);
            Campaign resultedCampaign = [ SELECT Id FROM Campaign WHERE Id= :(String)resultOne.result];
            // Needs to be Switched Off after deleting the campaign
            delete resultedCampaign;
            Test.stopTest();

            // Then Verify that the Event is marked as not converted
            event = [SELECT isConverted__c FROM CventEvents__Event__c WHERE Id = :event.Id];
            System.assertEquals(false, event.isConverted__c,'Is Converted Flag was not switched off.');
        }
    }
}