/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test class covering
                QuoteTrigger,QuoteTriggerHandler,QuoteTriggerHelper
History
8-Sept-2022      Houssam ADIB    Create New Test Class
---------------------------------------------------------------------------------------*/
@IsTest
public with sharing class Test_QuoteTriggerHandler {

    /*------------------------------------------------------------
    Description:    Test setup
    ------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    /*------------------------------------------------------------
    Description:    Test setQuoteTemplate method and all its related helper class methods
    ------------------------------------------------------------*/
    @isTest
    private static void testSetQuoteTemplate() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Account> acc = TestDataFactory.returnAccounts(1, 'Non_ERP_Account', testUser.Id);
            acc[0].Country__c = 'BE';
            insert acc;

            Contact contact = TestDataFactory.returnContacts(1, 'ContactGlobal', testUser.Id).get(0);
            contact.AccountId = acc[0].Id;
            insert contact;

            List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].CurrencyIsoCode = 'USD';
            opp[0].AccountId = acc[0].Id;
            insert opp;

            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1, 'test PB');

            // Quotes
            Quote quote = TestDataFactory.returnQuotes(1).get(0);
            quote.OpportunityId = opp[0].Id;
            quote.Pricebook2Id = pricebook[0].Id;
            quote.UserCountry__c = 'Belgium';
            quote.ContactId = contact.Id;

            Test.startTest();
            insert quote;
            Test.stopTest();

            Quote quoteResult = [SELECT SelectQuoteTemplate__c FROM Quote WHERE Id= :quote.Id];
            QuoteCountrySetting__mdt quoteSetting = [   SELECT QuoteTemplate__c,AlternateQuoteTemplate__c FROM QuoteCountrySetting__mdt
                                                        WHERE CountryCode__c = 'BE'];

            System.assertEquals(quoteSetting.QuoteTemplate__c, quoteResult.SelectQuoteTemplate__c, 'Wrong quote Template value');
        }
    }

}