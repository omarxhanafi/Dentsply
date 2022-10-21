/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona
Description:    Test classes for AddBundles Class
--------------------------------------------------------------------------------------------------------*/

@isTest(seeAllData=false)
public with sharing class AddBundlesTest {
    @testSetup
    private static void setup() {
        List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        System.runas(userList.get(0)) {
            
        }
        TestDataFactory.createBypassCustomSetting();
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
    }

    @isTest
    private static void testSetup() {
        Test.startTest();
        List<User> testUserList = [SELECT Id FROM User WHERE Alias = 'test1'];
        Test.stopTest();
        
        System.assertEquals(1, testUserList.size(), 'Expected one user');
    }

    @isTest 
    private static void getPricebookBundles() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            insert bundles;
            
            Test.startTest();
            List<Product_bundle__c> bundlesOnPricebook = AddBundles.getPricebookBundles(pricebook[0].Id);
            Test.stopTest();
            System.assertEquals(1, bundlesOnPricebook.size(), 'We expect one bundle');
        }
    }

    @isTest 
    private static void getPriceBooks() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            
            Test.startTest();
            List<Pricebook2> pricebookChoices = AddBundles.getPriceBooks();
            Test.stopTest();
            System.assertEquals(1, pricebookChoices.size(), 'We expect one pricebook choice');
        }
    }

    @isTest 
    private static void insertQuoteBundles() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            insert bundles;
            List<Account> acc = TestDataFactory.createAccounts(1, 'Non_ERP_Account' ,testUser.Id);
            List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].AccountId = acc[0].Id;
            insert opp;
            List<Quote> quote = TestDataFactory.returnQuotes(1);
            quote[0].OpportunityId = opp[0].Id;
            insert quote;
            List<QuoteProductBundle__c> quoteProductBundle = TestDataFactory.returnQuoteProductBundle(1);
            quoteProductBundle[0].Quote__c = quote[0].Id;
            quoteProductBundle[0].ProductBundle__c = bundles[0].Id;
            
            Test.startTest();
            Boolean bundlesOnPricebook = AddBundles.insertQuoteBundles(quoteProductBundle);
            Test.stopTest();
            System.assertEquals(true, bundlesOnPricebook, 'product quote bundles inserted');
        }
    }

    @isTest 
    private static void updateRecord() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {

            List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            insert bundles;
            List<Account> acc = TestDataFactory.createAccounts(1, 'Non_ERP_Account' ,testUser.Id);
            List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].AccountId = acc[0].Id;
            insert opp;
            List<Quote> quote = TestDataFactory.returnQuotes(1);
            quote[0].OpportunityId = opp[0].Id;
            insert quote;
            
            
            Test.startTest();
            Boolean bundlesOnPricebook = AddBundles.updateRecord(quote[0].Id, pricebook[0].Id);
            Test.stopTest();
            System.assertEquals(false, bundlesOnPricebook, 'quote has been updated');
        }
    }

}