/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test class covering
                QuoteLineItemTrigger,QuoteLineItemTriggerHandler,QuoteLineItemTriggerHelper
History
2022-09-01      Houssam ADIB    Create New Test Class
---------------------------------------------------------------------------------------*/
@IsTest
public with sharing class Test_QuoteLineItemTriggerHandler {

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
    Description:    Test CheckAndUpdateQuoteLineItem method and all its related helper class methods
    ------------------------------------------------------------*/
    @isTest
    private static void testCheckAndUpdateQuoteLineItems() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Account> acc = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
            List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].CurrencyIsoCode = 'USD';
            opp[0].AccountId = acc[0].Id;
            insert opp;

            // Product Bundle
            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1, 'test PB');
            List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            bundles[0].CurrencyIsoCode = 'USD';
            insert bundles;

            // Products
            List<Product2> products = TestDataFactory.createProducts(3);
            List<PricebookEntry> pricebookEntries = TestDataFactory.createPricebookEntries(3, pricebook, products);
            TestDataFactory.createBoms(1, bundles[0].Id, products);

            // Quotes
            List<Quote> quotes = TestDataFactory.returnQuotes(2);
            for (Quote quote : quotes) {
                quote.OpportunityId = opp[0].Id;
                quote.Pricebook2Id = pricebook[0].Id;
            }
            insert quotes;

            // Quote Line Bundle
            List<QuoteProductBundle__c> quoteProductBundle = TestDataFactory.returnQuoteProductBundle(1);
            quoteProductBundle[0].Quote__c = quotes[0].Id;
            quoteProductBundle[0].ProductBundle__c = bundles[0].Id;
            insert quoteProductBundle;

            // Sync Quote with Opp
            opp[0].SyncedQuoteId = quotes[0].Id;
            update opp[0];

            Quote quoteAfterInsert = [SELECT Id, (SELECT Id,OpportunityLineItemId FROM QuoteLineItems) FROM Quote WHERE Id = :quotes[0].Id];
            System.assertNotEquals(0, quoteAfterInsert.QuoteLineItems.size(), 'No quote line items has been generated after quote line insertion');

            Test.startTest();
            // Mock the standard generation of quote line items for a new quote
            List<QuoteLineItem> quoteLineItems = TestDataFactory.returnQuoteLineItems(products,quotes[1],pricebookEntries);
            for(Integer i=0;i<quoteLineItems.size();i++)
            {
                quoteLineItems[i].OpportunityLineItemId = quoteAfterInsert.QuoteLineItems[i].OpportunityLineItemId;
            }
            insert quoteLineItems;
            Test.stopTest();

            // Check the new quote line items generated and quote line bundles
            Quote SecondQuoteAfterInsert = [SELECT Id, (SELECT Id,QuoteProductBundle__c,CanBeDeleted__c FROM QuoteLineItems),(SELECT Id FROM Quote_Product_Bundles__r) FROM Quote WHERE Id = :quotes[1].Id];
            System.assertNotEquals(0, SecondQuoteAfterInsert.QuoteLineItems.size(), 'No quote line items has been generated after new quote insertion');
            System.assertNotEquals(0, SecondQuoteAfterInsert.Quote_Product_Bundles__r.size(), 'No quote line bundles has been generated after new quote insertion');

            // Check the deletion blockage of the quote line item linked to a quote line bundle
            Boolean exceptionRaised = false;
            try {
                delete SecondQuoteAfterInsert.QuoteLineItems;
            }catch (Exception ex)
            {
                exceptionRaised = true;
            }
            System.assert(exceptionRaised,'No Exception raised during quote line item deletion');
        }
    }
}