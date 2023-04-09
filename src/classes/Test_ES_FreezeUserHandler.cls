/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for the Email Service handler to freeze users based on federation id
 *
 * @History
 * 17-03-2023   Omar     Created Test Freeze User Handler class
 */

@isTest(seeAllData=false)
public without sharing class Test_ES_FreezeUserHandler {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, 'System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

    }

    @isTest
    private static void testHandleInboundEmail() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser) {

            // Create a test user to freeze
            List<User> frozenUserList = TestDataFactory.createUsers(1, 'Lightning Sales Rep');
            frozenUserList[0].FederationIdentifier = 'testFederationId';
            update frozenUserList;

            // Create a test inbound email
            Messaging.InboundEmail email = new Messaging.InboundEmail();
            email.plainTextBody = '*Action:*DeleteAttribute*From:*INTERNAL\\testFederationId*To:*';

            // Call the email service handler
            ES_FreezeUserHandler handler = new ES_FreezeUserHandler();
            Messaging.InboundEnvelope envelope = new Messaging.InboundEnvelope();

            Test.startTest();
            Messaging.InboundEmailResult result = handler.handleInboundEmail(email, envelope);
            Test.stopTest();


            // Verify that the email service handler returned a successful result
            System.assertEquals(true, result.success);

            // Verify that the test user was frozen
            User frozenUser = [SELECT Id, CRM_team_comments__c FROM User WHERE FederationIdentifier = 'testFederationId' LIMIT 1];
            UserLogin ulogin = [SELECT Id, IsFrozen, UserId FROM UserLogin WHERE UserId = :frozenUser.Id];

            System.assertEquals(true, ulogin.IsFrozen);
            System.assert(frozenUser.CRM_team_comments__c.contains('Frozen on'));

        }

    }
}
