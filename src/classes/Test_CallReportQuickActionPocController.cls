/**
 * @description       : Test class for CallReportQuickActionPocController
 * @author            : kdoruibin@salesforce.com
 * @group             : 
 * @last modified on  : 09-09-2021
 * @last modified by  : kdoruibin@salesforce.com
 * Modifications Log 
 * Ver   Date         Author                     Modification
 * 1.1   09-09-2021   kdoruibin@salesforce.com   added system.runAs()
 * 2.0   14-08-2024   ohanafi@salesforce.com     TFUS-000006884 - Co_travel__c translation bug fix
**/
@isTest(seeAllData=false)
public without sharing class Test_CallReportQuickActionPocController {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
        List<Event> eventList = TestDataFactory.returnEvents(1, userList.get(0).Id); 
        List<Account> accountsList = TestDataFactory.createAccounts(1, 'Non_ERP_Account', userList.get(0).Id);
        List<Contact> contactList = TestDataFactory.returnContacts(1, 'Contact_D', userList.get(0).Id);
        contactList.get(0).AccountId = accountsList.get(0).Id;
        insert contactList;
        eventList.get(0).WhoId = contactList.get(0).Id;
        insert eventList;
    }

    @isTest
    private static void testSetup() {
        Test.startTest();
        List<User> testUserList = [SELECT Id FROM User WHERE Alias = 'test1'];
        List<Account> testAccountList = [SELECT Id FROM Account WHERE Ownerid = :testUserList[0].Id];
        List<Contact> testContactList = [SELECT Id FROM Contact WHERE OwnerId = :testUserList[0].Id];
        Test.stopTest();
        
        System.assertEquals(1, testUserList.size(), 'Expected one User');
        System.assertEquals(1, testAccountList.size(), 'Expected one Account');
        System.assertEquals(1, testContactList.size(), 'Expected one Contact');
    }

    @isTest
    private static void testCreateEvent() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        Account testAccount = [SELECT Id FROM Account WHERE Ownerid = :testUser.Id LIMIT 1];
        Contact testContact = [SELECT Id FROM Contact WHERE Ownerid = :testUser.Id LIMIT 1];

        Call_Report__c callReportToInsert = new Call_Report__c(
            StartDateTime__c = Datetime.newInstance(2015, 20 , 12, 00, 00, 00)
            , EndDateTime__c = Datetime.newInstance(2015, 20 , 12, 01, 00, 00)
            , Call_Notes__c = 'test123'
            , EventWhoIds__c = '["' + testContact.Id + '"]'
        );
        
        Id createdEventId;
        Test.startTest();
        System.runAs(testUser) {
            insert callReportToInsert;
            createdEventId = CallReportQuickActionPocController.createEvent(callReportToInsert.Id, testContact.Id, 'Manager', false);
        }
        System.assertEquals(Schema.Event.SObjectType, createdEventId.getSobjectType());
        Test.stopTest();
    }

    /**
     * testGetPickListValuesIntoMap Test method for CallReportQuickActionPocController.getPickListValuesIntoMap()
     */
    @isTest
    private static void testGetPickListValuesIntoMap() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {
            Test.startTest();
            // Call the method and store the result in a map
            Map<String, String> pickListValuesMap = CallReportQuickActionPocController.getPickListValuesIntoMap();

            // Assert that the map is not empty
            System.assertNotEquals(0, pickListValuesMap.size(), 'Expected non-empty map of picklist values');

            Test.stopTest();
        }
    }

    /**
     * testGetProcedureTrackerDataList Test method for CallReportQuickActionPocController.getProcedureTrackerDataList()
     */
    @isTest
    private static void testGetProcedureTrackerDataList() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            List<Account> testAccountList = [SELECT Id FROM Account WHERE Ownerid = :testUser.Id];
            testAccountList[0].Country__c = 'US';
            update testAccountList[0];


            // Create a ProcedureTracker__c record
            ProcedureTracker__c procedureTracker = new ProcedureTracker__c(
                    PracticeAccount__c = testAccountList[0].Id,
                    RecordTypeId = Schema.SObjectType.ProcedureTracker__c.getRecordTypeInfosByName().get('Clear Aligners - US').getRecordTypeId()
            );
            insert procedureTracker;

            Test.startTest();

            // Call the method and retrieve the ProcedureTracker__c record by its ID
            ProcedureTracker__c result = CallReportQuickActionPocController.getProcedureTrackerDataList(procedureTracker.Id);

            // Assert that the returned record is not null
            System.assertNotEquals(null, result, 'Expected non-null ProcedureTracker__c record');

            Test.stopTest();
        }
    }


}