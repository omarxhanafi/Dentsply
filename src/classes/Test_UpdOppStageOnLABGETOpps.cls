@isTest
private class Test_UpdOppStageOnLABGETOpps
{
    static testMethod void testUpdOppStageOnLABGETOpps ()
    {
        // Create a suitable test account.
        Account testAccount = new Account();
        testAccount.Country__c = 'SE';
        testAccount.Name = 'Tcp_TestAccount';
        testAccount.Atlantis_Web_Order_Customer__c = false;     
        insert testAccount;
        
        RecordType rt = [SELECT Id, Name, DeveloperName, SobjectType FROM RecordType WHERE RecordType.DeveloperName = 'Lightning_Pipeline_Opportunity']; //'GET_Lab_Atlantis'];
                
        // Create an open GET Lab Atlantis opportunity on the above account.
        Date CDate = date.newinstance(2010,12,31);
        Opportunity AtlOpp = new Opportunity(Name='Test Atl Op', StageName='Positioning Atlantis', RecordTypeId=rt.Id, AccountID=testAccount.Id, CloseDate=CDate, Amount=555, CurrencyISOCode='SEK' );
        insert AtlOpp;
        
        Account testAcc = [select id from Account where id=:testAccount.Id];
        
        Opportunity testOpp = [select id, StageName, RecordTypeId, Account.Name from Opportunity where id =:AtlOpp.Id]; //AWO_Customer__c
        System.debug('2:: Opportunity AWO Customer?' + testOpp.RecordTypeId + testOpp.StageName + testOpp.Id); //+ testOpp.AWO_Customer__c
        
        test.startTest();
        
        testAccount.Atlantis_Web_Order_Customer__c = TRUE;
        update testAccount;
        
        test.stopTest();
        
        // Retrieve the opportunity & account.
        testOpp = [select id, StageName, RecordTypeId, Account.Name from Opportunity where id =:AtlOpp.Id]; //AWO_Customer__c
        System.debug('3:: Opportunity AWO Customer?' + testOpp.RecordTypeId + testOpp.StageName + testOpp.Id); //+ testOpp.AWO_Customer__c
        
        testAcc = [select id from Account where id=:testAccount.Id];
    }
 }