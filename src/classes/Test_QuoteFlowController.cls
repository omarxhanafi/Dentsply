/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test class covering
                QuoteFlowController
History
2022-08-22      Houssam ADIB    Create New Test Class
---------------------------------------------------------------------------------------*/
@isTest
public with sharing class Test_QuoteFlowController {

    /*------------------------------------------------------------
    Description:    Test setup
    ------------------------------------------------------------*/
    @testSetup
    private static void setup()
    {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }

    /*------------------------------------------------------------
    Description:    Test the clone feature of a quote with child records
    ------------------------------------------------------------*/
    @IsTest
    private static void testCloneQuote()
    {
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
            List<Quote> originalQuote = TestDataFactory.returnQuotes(1);
            originalQuote[0].OpportunityId = opp[0].Id;
            originalQuote[0].Pricebook2Id = pricebook[0].Id;
            insert originalQuote[0];

            // Quote Line Bundle
            List<QuoteProductBundle__c> quoteProductBundle = TestDataFactory.returnQuoteProductBundle(1);
            quoteProductBundle[0].Quote__c = originalQuote[0].Id;
            quoteProductBundle[0].ProductBundle__c = bundles[0].Id;
            insert quoteProductBundle;

            TestDataFactory.insertQuoteLineItems(products,originalQuote[0],pricebookEntries);

            Quote quoteAfterInsert = [SELECT Id, (SELECT Id FROM QuoteLineItems),(SELECT Id FROM Quote_Product_Bundles__r) FROM Quote WHERE Id = :originalQuote[0].Id];
            System.assertNotEquals(0, quoteAfterInsert.QuoteLineItems.size(), 'No quote line items has been generated after quote line insertion');

            Test.startTest();
            List<Id> clonedQuoteId = QuoteFlowController.cloneQuote(new List<Id>{originalQuote[0].Id});
            Test.stopTest();

            Quote clonedQuote = [SELECT Id, (SELECT Id FROM QuoteLineItems),(SELECT Id FROM Quote_Product_Bundles__r) FROM Quote WHERE Id = :clonedQuoteId];

            //Then
            System.assertEquals(quoteAfterInsert.Quote_Product_Bundles__r.size(),clonedQuote.Quote_Product_Bundles__r.size(),
                    'Unexpected size of related product bundles on the cloned quote');
            System.assertEquals(quoteAfterInsert.QuoteLineItems.size(),clonedQuote.QuoteLineItems.size(),
                    'Unexpected size of related quote line items on the cloned quote');

        }

    }

}