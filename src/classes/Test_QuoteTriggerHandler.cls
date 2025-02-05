/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test class covering
                QuoteTrigger,QuoteTriggerHandler,QuoteTriggerHelper
History
8-Sept-2022      Houssam ADIB    Create New Test Class
29-Jan-2025      Omar HANAFI     Created test method for setShippingAndBillingAddress CPQ-117
-------------------------------------------------------------------------------------------------------*/
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

    @isTest
    public static void testSetShippingAndBillingAddressOnInsert() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

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

            // Create initial address record
            Address__c shippingAd = new Address__c(
                    Name = 'Shipping Address',
                    Account__c = acc[0].Id,
                    CustomerNumber__c = '555',
                    CompanyCode__c = '057',
                    Country__c = 'US',
                    Street__c = '123 Main St',
                    City__c = 'New York',
                    PostalCode__c = '10001',
                    StateProvince__c = 'NY'
            );

            Address__c billingAd = new Address__c(
                    Name = 'Billing Address',
                    Account__c = acc[0].Id,
                    CustomerNumber__c = '555',
                    CompanyCode__c = '057',
                    Country__c = 'US',
                    Street__c = '456 Elm St',
                    City__c = 'Los Angeles',
                    PostalCode__c = '90001',
                    StateProvince__c = 'CA'
            );

            insert new List<Address__c>{ shippingAd, billingAd };

            // Create a Quote with the shipping and billing addresses
            Quote quote = new Quote(
                    Name = 'Test Quote',
                    OpportunityId = opp[0].Id,
                    UserCountry__c = 'Belgium',
                    ContactId = contact.Id,
                    RecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Quote' AND DeveloperName = 'Advanced_Quote' LIMIT 1].Id,
                    ShippingAddress__c = shippingAd.Id,
                    BillingAddress__c = billingAd.Id
            );

            Test.startTest();
            insert quote;
            Test.stopTest();

            // Retrieve updated Quote
            Quote insertedQuote = [SELECT ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry,
                    BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry
            FROM Quote WHERE Id = :quote.Id LIMIT 1];

            // Assert Shipping Address fields
            system.assertEquals(shippingAd.Street__c, insertedQuote.ShippingStreet);
            system.assertEquals(shippingAd.City__c, insertedQuote.ShippingCity);
            system.assertEquals(shippingAd.StateProvince__c, insertedQuote.ShippingState);
            system.assertEquals(shippingAd.PostalCode__c, insertedQuote.ShippingPostalCode);
            system.assertEquals(shippingAd.Country__c, insertedQuote.ShippingCountry);

            // Assert Billing Address fields
            system.assertEquals(billingAd.Street__c, insertedQuote.BillingStreet);
            system.assertEquals(billingAd.City__c, insertedQuote.BillingCity);
            system.assertEquals(billingAd.StateProvince__c, insertedQuote.BillingState);
            system.assertEquals(billingAd.PostalCode__c, insertedQuote.BillingPostalCode);
            system.assertEquals(billingAd.Country__c, insertedQuote.BillingCountry);
        }
    }

    @isTest
    public static void testSetShippingAndBillingAddressOnUpdate() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

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

            // Create initial address record
            Address__c shippingAd = new Address__c(
                    Name = 'Shipping Address',
                    Account__c = acc[0].Id,
                    CustomerNumber__c = '555',
                    CompanyCode__c = '057',
                    Country__c = 'US',
                    Street__c = '123 Main St',
                    City__c = 'New York',
                    PostalCode__c = '10001',
                    StateProvince__c = 'NY'
            );

            Address__c billingAd = new Address__c(
                    Name = 'Billing Address',
                    Account__c = acc[0].Id,
                    CustomerNumber__c = '555',
                    CompanyCode__c = '057',
                    Country__c = 'US',
                    Street__c = '456 Elm St',
                    City__c = 'Los Angeles',
                    PostalCode__c = '90001',
                    StateProvince__c = 'CA'
            );

            insert new List<Address__c>{ shippingAd, billingAd };

            // Create a Quote with the shipping and billing addresses
            Quote quote = new Quote(
                    Name = 'Test Quote',
                    OpportunityId = opp[0].Id,
                    UserCountry__c = 'Belgium',
                    ContactId = contact.Id,
                    RecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Quote' AND DeveloperName = 'Advanced_Quote' LIMIT 1].Id,
                    ShippingAddress__c = shippingAd.Id,
                    BillingAddress__c = billingAd.Id
            );

            insert quote;

            // Create a new address to simulate an update
            Address__c newShippingAd = new Address__c(
                    Name = 'New Shipping Address',
                    Account__c = acc[0].Id,
                    CustomerNumber__c = '555',
                    CompanyCode__c = '057',
                    Country__c = 'FR',
                    Street__c = '789 New St',
                    City__c = 'Paris',
                    PostalCode__c = '75001',
                    StateProvince__c = 'Île-de-France'
            );

            insert newShippingAd;

            // Update order with new shipping address
            quote.ShippingAddress__c = newShippingAd.Id;

            Test.startTest();
            update quote;
            Test.stopTest();

            // Retrieve updated quote again
            Quote updatedQuote = [SELECT ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry
            FROM Quote WHERE Id = :quote.Id LIMIT 1];

            // Assert updated Shipping Address fields
            system.assertEquals(newShippingAd.Street__c, updatedQuote.ShippingStreet);
            system.assertEquals(newShippingAd.City__c, updatedQuote.ShippingCity);
            system.assertEquals(newShippingAd.StateProvince__c, updatedQuote.ShippingState);
            system.assertEquals(newShippingAd.PostalCode__c, updatedQuote.ShippingPostalCode);
            system.assertEquals(newShippingAd.Country__c, updatedQuote.ShippingCountry);

        }
    }
}