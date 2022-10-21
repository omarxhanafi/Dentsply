@isTest
/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test class covering
                QuoteProductBundleTrigger,QuoteProductBundleTriggerHandler,QuoteProductBundleTriggerHelper
History
2022-09-01      Houssam ADIB    Create New Test Class
----------------------------------------------------------------------------------------*/
public with sharing class Test_QuoteProductBundleTriggerHandler {

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
    Description:    Test the Synchronization between a product bundle and related child quote line items
    ------------------------------------------------------------*/
    @isTest
    private static void testQuoteLinesBundlesSynchronization()
    {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Account> acc = TestDataFactory.createAccounts(1, 'Non_ERP_Account' ,testUser.Id);
            List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].CurrencyIsoCode = 'USD';
            opp[0].AccountId = acc[0].Id;
            insert opp;

            // Product Bundle
            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            bundles[0].CurrencyIsoCode = 'USD';
            insert bundles;

            // Products
            List<Product2> products = TestDataFactory.createProducts(3);
            List<Bom__c> boms = TestDataFactory.returnBOMs(3,bundles[0].Id,products);
            Integer i=1;
            for (BOM__c bom : boms)
            {
                bom.SortOrder__c = i;
                i++;
            }
            insert boms;
            List<PricebookEntry> pricebookEntries = TestDataFactory.createPricebookEntries(3, pricebook, products);
            // Quote
            List<Quote> quote = TestDataFactory.returnQuotes(1);
            quote[0].OpportunityId = opp[0].Id;
            quote[0].Pricebook2Id = pricebook[0].Id;
            insert quote;

            // Quote Line Bundle
            List<QuoteProductBundle__c> quoteProductBundle = TestDataFactory.returnQuoteProductBundle(1);
            quoteProductBundle[0].Quote__c = quote[0].Id;
            quoteProductBundle[0].ProductBundle__c = bundles[0].Id;

            TestDataFactory.insertQuoteLineItems(products,quote[0],pricebookEntries);

            Quote quoteLinesBefore = [SELECT Id,(SELECT Id FROM QuoteLineItems) FROM Quote WHERE Id =:quote[0].Id];
            System.assertEquals(3, quoteLinesBefore.QuoteLineItems.size(), 'Wrong number of Quote has line items before starting the test');

            Test.startTest();
            insert quoteProductBundle;
            Test.stopTest();

            Quote quoteLinesAfterInsert = [SELECT Id,(SELECT Id,SortOrder FROM QuoteLineItems) FROM Quote WHERE Id =:quote[0].Id];
            System.assertEquals(12, quoteLinesAfterInsert.QuoteLineItems.size(), 'No quote line items has been generated after quote line insertion');

            delete quoteProductBundle;

            Quote quoteLinesAfterDelete = [SELECT Id,(SELECT Id FROM QuoteLineItems) FROM Quote WHERE Id =:quote[0].Id];
            System.assertEquals(3, quoteLinesAfterDelete.QuoteLineItems.size(), 'Quote lines items weren\'t deleted after quote line bundle deletion');

        }
    }

}