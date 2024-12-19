/*-------------------------------------------------------------------------------------------------------
Author:         Roberto
Description:    Test class covering
                PDFbutlerGetBomName
                
History
20240812     Roberto    Create New Test Class
----------------------------------------------------------------------------------------*/
@isTest
public with sharing class PDFbutlerGetBomNameTest {
    /*------------------------------------------------------------
    Description:    Test setup
    ------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        final List<User> userList = TestDataFactory.createUsers(1, '#System: System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    }
    /*------------------------------------------------------------
    Description:    Checking PDF butler actionable

    ------------------------------------------------------------*/
    @isTest
    private static void testGetBomNames()
    {
        final User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser) {
            final List<Account> acc = TestDataFactory.createAccounts(1, 'Non_ERP_Account' ,testUser.Id);
            final List<Opportunity> opp = TestDataFactory.returnOpportunities(1, 'Lightning_Pipeline_Opportunity', testUser.Id);
            opp[0].CurrencyIsoCode = 'USD';
            opp[0].AccountId = acc[0].Id;
            insert opp;

            // Product Bundle
            final List<Pricebook2> pricebook = TestDataFactory.createPricebooks(1,'test PB');
            final List<Product_bundle__c> bundles = TestDataFactory.returnBundles(1);
            bundles[0].Price_Book__c = pricebook[0].Id;
            bundles[0].CurrencyIsoCode = 'USD';
            insert bundles;

            // Products
            final List<Product2> products = TestDataFactory.createProducts(3);
            final List<Bom__c> boms = TestDataFactory.returnBOMs(3,bundles[0].Id,products);
            Integer ind=1;
            for (BOM__c bom : boms)
            {
                bom.SortOrder__c = ind;
                ind++;
            }
            insert boms;
            final List<PricebookEntry> pricebookEntries = TestDataFactory.createPricebookEntries(3, pricebook, products);
            // Quote
            final List<Quote> quote = TestDataFactory.returnQuotes(1);
            quote[0].OpportunityId = opp[0].Id;
            quote[0].Pricebook2Id = pricebook[0].Id;
            insert quote;

            // Quote Line Bundle
            final List<QuoteProductBundle__c> quoteProdBundle = TestDataFactory.returnQuoteProductBundle(1);
            quoteProdBundle[0].Quote__c = quote[0].Id;
            quoteProdBundle[0].ProductBundle__c = bundles[0].Id;

            TestDataFactory.insertQuoteLineItems(products,quote[0],pricebookEntries);
            insert quoteProdBundle;
            
            //2 Create docConfig
            final cadmus_core__Doc_Config__c doc_config = new cadmus_core__Doc_Config__c();
            doc_config.cadmus_core__Document_Title__c = 'TEST';
            doc_config.Name = 'TEST_DOC_CONFIG';
            doc_config.RecordTypeId = Schema.SObjectType.cadmus_core__Doc_Config__c.getRecordTypeInfosByName().get('Main Word Document').getRecordTypeId();
            insert doc_config;
            
            final cadmus_core__Data_Source__c dataSource = new cadmus_core__Data_Source__c();
            dataSource.Name = 'GetBomNameWithAPEX';
            dataSource.RecordTypeId = Schema.SObjectType.cadmus_core__Data_Source__c.getRecordTypeInfosByName().get('KEYVALUE').getRecordTypeId();
            dataSource.cadmus_core__Type__c = 'List of sObjects';
            insert dataSource;
            
            //3 Create Actionable
            final cadmus_core__Actionable__c actionable = new cadmus_core__Actionable__c();
            actionable.Name = 'TEST_ACTIONABLE';
            actionable.RecordTypeId = Schema.SObjectType.cadmus_core__Actionable__c.getRecordTypeInfosByName().get('Run Class').getRecordTypeId();
            insert actionable;
            //4 Create InputMap -> two vars recordId,userId
            final Map <String,Object> inputMap = new Map <String,Object> {
                'recordId' => quote[0].Id,
                'userId' => UserInfo.getUserId()
            }; 
            
                
            final cadmus_core.ConvertController.ConvertDataModel cdm = new cadmus_core.ConvertController.ConvertDataModel();
            cdm.docConfigId = doc_config.Id;
            cdm.objectId = quote[0].Id;
            
            Test.startTest();
            final PDFbutlerGetBomName instance = new PDFbutlerGetBomName();
            instance.execute(actionable, doc_config.Id, quote[0].Id, inputMap, cdm);
            Test.stopTest();
            System.assert(inputMap.containsKey(dataSource.Id), 'InputMap should contain the data source ID');

        }
    }

}