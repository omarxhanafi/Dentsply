/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for QuoteCloneController
 *
 * @History
 * 11-02-2025   Omar     Created test class
 */

@isTest(seeAllData=false)
public without sharing class Test_QuoteCloneController {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create Account
        Account acc = new Account(Name = 'Test Account');
        insert acc;

        // Create Opportunity
        Opportunity opp = new Opportunity(
                Name = 'Test Opportunity',
                StageName = 'Prospecting',
                CloseDate = Date.today().addDays(30),
                AccountId = acc.Id
        );
        insert opp;

        // Create test Quote
        List<Pricebook2> pricebooks = TestDataFactory.returnPricebooks(1, 'Standard Price Book');
        pricebooks[0].IsActive = true;
        insert pricebooks;

        List<Quote> testQuotes = new List<Quote>{
                new Quote(
                        Name = 'Test Quote',
                        Status = 'Draft',
                        Pricebook2Id = pricebooks[0].Id,
                        OpportunityId = opp.Id,
                        StartDate = Date.today()
                )
        };
        insert testQuotes;

        // Create test QuoteLineItems
        List<Product2> testProducts = TestDataFactory.returnProducts(1);
        insert testProducts;

        List<PricebookEntry> testPricebookEntries = TestDataFactory.returnPricebookEntries(1, pricebooks, testProducts);
        insert testPricebookEntries;

        List<QuoteLineItem> testQLIs = new List<QuoteLineItem>{
                new QuoteLineItem(
                        QuoteId = testQuotes[0].Id,
                        PricebookEntryId = testPricebookEntries[0].Id,
                        Quantity = 1,
                        UnitPrice = 100
                )
        };
        insert testQLIs;
    }

    @isTest
    private static void testGetQuoteDetails() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Quote testQuote = [SELECT Id FROM Quote LIMIT 1];
            Test.startTest();
            Quote retrievedQuote = QuoteCloneController.getQuoteDetails(testQuote.Id);
            Test.stopTest();

            System.assertNotEquals(null, retrievedQuote, 'Quote should be retrieved');
            System.assertEquals(testQuote.Id, retrievedQuote.Id, 'Retrieved Quote ID should match');
        }
    }

    @isTest
    private static void testCloneQuote() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            Quote testQuote = [SELECT Id FROM Quote LIMIT 1];
            Test.startTest();
            Quote clonedQuote = QuoteCloneController.cloneQuote(testQuote.Id);
            Test.stopTest();

            clonedQuote = [SELECT Id, Status FROM Quote WHERE Id = :clonedQuote.Id];

            System.assertNotEquals(null, clonedQuote, 'Cloned Quote should not be null');
            System.assertNotEquals(testQuote.Id, clonedQuote.Id, 'Cloned Quote should have a different ID');
            System.assertEquals('Draft', clonedQuote.Status, 'Cloned Quote should have status Draft');
        }
    }
}
