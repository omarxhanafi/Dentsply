/*------------------------------------------------------------
Author:         Kevin Do (Salesforce) 2019-09-26
Description:    Test Class for all AccountTriggerHelper methods.
History
<Date>      <Authors Name>      <Brief Description of Change>
20190924    Kevin Do            Migrated test methods from DC_UT_AccountTrigger and AccountSetPayerLookupTest.
20200326    Kevin Do            Added tests for setAccountSubSegmentation method (#TFUS-000001698)
20210405    Nisreen AlSaleh     Added test for creatEntitlement method  (#TFUS-000001231)
20220906    Tobias Nygren       Removed tests for default owner (TFUS-000004729)
20220906    Nisreen AlSaleh     Update creatEntitlement test method (TFUS-000004769)
20230224    Roberto Narbona     Cleanup story (TFUS-000003722)
20241107    Omar Hanafi         Fixing the test failures as part of the clean-up project
------------------------------------------------------------*/

@isTest(seeAllData=false)
public class Test_AccountTrigger {

    /*-------------------------------------------------------------------------------------------------------
    Company: Salesforce
    Description: Setup one user for the test class
    History :
    --------------------------------------------------------------------------------------------------------*/
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
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

    /*-------------------------------------------------------------------------------------------------------
    Company: Salesforce
    Description: Test method for AccountTriggerHelper.setPostalCodeInfoAndEtmCode
                 Migrated from DC_UT_AccountTrigger
    History :
    --------------------------------------------------------------------------------------------------------*/
    @isTest
    private static void testSetPostalCodeInfoAndEtmCode() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        List<Account> testAccountList = TestDataFactory.returnAccounts(3, 'Non_ERP_Account', testUser.Id);
        Account testAccount0 = testAccountList[0];
        Account testAccount1 = testAccountList[1];
        Account testAccount2 = testAccountList[2];

        String testDcEtmCode = 'Test_DC_ETM_Code';
        Postal_Codes__c postalCode = new Postal_Codes__c(Name='BillingPostalCode1', DC_ETM_Code__c=testDcEtmCode);
        insert postalCode;

        for (Account account : testAccountList) {
            account.Postal_Code_Info__c = postalCode.Id;
            account.BillingPostalCode = 'BillingPostalCode2';
        }

        Test.startTest();
        // Test inserting Account referencing non-existing Postal_Codes__c.
        insert testAccountList;

        // Test updating Account referencing existing Postal_Codes__c record.
        testAccount1.BillingPostalCode = 'BillingPostalCode1';
        update testAccount1;

        // Test updating Account referencing null Postal_Codes__c.
        testAccount2.BillingPostalCode = null;
        update testAccount2;
        Test.stopTest();

        testAccount0 = [SELECT Id, DC_ETM_Code__c FROM Account WHERE Id = :testAccount0.Id LIMIT 1];
        testAccount1 = [SELECT Id, DC_ETM_Code__c FROM Account WHERE Id = :testAccount1.Id LIMIT 1];
        testAccount2 = [SELECT Id, DC_ETM_Code__c FROM Account WHERE Id = :testAccount2.Id LIMIT 1];

        System.assertEquals(null, testAccount0.DC_ETM_Code__c, 'Expected null');
        System.assertEquals(testDcEtmCode, testAccount1.DC_ETM_Code__c, 'Expected Test_DC_ETM_Code');
        System.assertEquals(null, testAccount2.DC_ETM_Code__c, 'Expected null');
    }

    @isTest
    public static void testBulkAccountInsertion() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        User integrationUser = [SELECT Id FROM User WHERE Alias = 'GdwIntg' LIMIT 1];
        List<Account> accounts1 = TestDataFactory.bulkAccountReturn('Account', 100, integrationUser.Id);
        Test.startTest();
        insert accounts1;
        Test.stopTest();
        System.assertEquals(100,[SELECT Id FROM Account].size());
    }

    @isTest
    public static void testSetAccountSubSegmentationInsert() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        List<AccountSubSegmentationMatrix__mdt> accSubSegList = new List<AccountSubSegmentationMatrix__mdt>([
            SELECT Country__c, ControllingField__c, TargetField__c, MediumThresholdMax__c, MediumThresholdMin__c, LowThresholdMIN__c
            FROM AccountSubSegmentationMatrix__mdt
            LIMIT 1
        ]);

        if (accSubSegList.isEmpty()) return;

        List<Account> testAccountList = TestDataFactory.returnAccounts(10, 'Non_ERP_Account', testUser.Id);
        for (Account accountRecord : testAccountList) {
            accountRecord.Name = 'INSERT ' + accountRecord.Name;
            accountRecord.Country__c = accSubSegList[0].Country__c;
        }
        testAccountList[0].put(accSubSegList[0].ControllingField__c, accSubSegList[0].MediumThresholdMax__c + 1);
        testAccountList[1].put(accSubSegList[0].ControllingField__c, accSubSegList[0].MediumThresholdMax__c);
        testAccountList[2].put(accSubSegList[0].ControllingField__c, accSubSegList[0].MediumThresholdMin__c);
        testAccountList[3].put(accSubSegList[0].ControllingField__c, accSubSegList[0].MediumThresholdMin__c - 1);
        testAccountList[4].put(accSubSegList[0].ControllingField__c, accSubSegList[0].LowThresholdMIN__c - 1);

        Test.startTest();
        insert testAccountList;
        Test.stopTest();

        String assertQuery = 'SELECT Count() FROM Account WHERE '+accSubSegList[0].TargetField__c;
        System.assertEquals(1, Database.countQuery(assertQuery+'=\'High\''));
        System.assertEquals(2, Database.countQuery(assertQuery+'=\'Medium\''));
        System.assertEquals(1, Database.countQuery(assertQuery+'=\'Low\''));
        System.assertEquals(1, Database.countQuery(assertQuery+'=\'N/A\''));
    }

    @IsTest
    public static void testSetAccountSubSegmentationUpdate() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        List<AccountSubSegmentationMatrix__mdt> accSubSegList1 = new List<AccountSubSegmentationMatrix__mdt>([
            SELECT Country__c, ControllingField__c, TargetField__c, MediumThresholdMax__c, MediumThresholdMin__c
            FROM AccountSubSegmentationMatrix__mdt
            LIMIT 1
        ]);
        List<AccountSubSegmentationMatrix__mdt> accSubSegList2 = new List<AccountSubSegmentationMatrix__mdt>([
            SELECT Country__c, ControllingField__c, TargetField__c, MediumThresholdMax__c, MediumThresholdMin__c
            FROM AccountSubSegmentationMatrix__mdt
            WHERE Country__c != :accSubSegList1[0].Country__c 
                AND TargetField__c != :accSubSegList1[0].TargetField__c
                AND ControllingField__c != :accSubSegList1[0].ControllingField__c
            LIMIT 1
        ]);

        if (accSubSegList1.isEmpty() || accSubSegList2.isEmpty()) return;
        
        List<Account> testAccountList = TestDataFactory.returnAccounts(10, 'Non_ERP_Account', testUser.Id);
        for (Account accountRecord : testAccountList) {
            accountRecord.Name = 'INSERT ' + accountRecord.Name;
            accountRecord.Country__c = accSubSegList1[0].Country__c;
        }
        testAccountList[0].put(accSubSegList1[0].ControllingField__c, accSubSegList1[0].MediumThresholdMax__c + 1);
        testAccountList[1].put(accSubSegList1[0].ControllingField__c, accSubSegList1[0].MediumThresholdMax__c);
        testAccountList[2].put(accSubSegList1[0].ControllingField__c, accSubSegList1[0].MediumThresholdMin__c);
        testAccountList[3].put(accSubSegList1[0].ControllingField__c, accSubSegList1[0].MediumThresholdMin__c - 1);
        insert testAccountList;

        for (Integer i = 0; i < 3; i++) {
            testAccountList[i].Country__c = accSubSegList2[0].Country__c;
            testAccountList[i].put(accSubSegList1[0].ControllingField__c, null);
        }
        testAccountList[0].put(accSubSegList2[0].ControllingField__c, accSubSegList2[0].MediumThresholdMax__c + 1);
        testAccountList[1].put(accSubSegList2[0].ControllingField__c, accSubSegList2[0].MediumThresholdMin__c);
        testAccountList[2].put(accSubSegList2[0].ControllingField__c, accSubSegList2[0].MediumThresholdMin__c - 1);        
        testAccountList[3].Country__c = null;

        Test.startTest();
        update testAccountList;
        Test.stopTest();

        String assertQuery1 = 'SELECT Count() FROM Account WHERE Name LIKE \'INSERT%\' AND '+accSubSegList1[0].TargetField__c;
        String assertQuery2 = 'SELECT Count() FROM Account WHERE Name LIKE \'INSERT%\' AND '+accSubSegList2[0].TargetField__c;
        System.assertEquals(testAccountList.size(), Database.countQuery(assertQuery1+'=null'));
        System.assertEquals(1, Database.countQuery(assertQuery2+'=\'High\''));
        System.assertEquals(1, Database.countQuery(assertQuery2+'=\'Medium\''));
        System.assertEquals(1, Database.countQuery(assertQuery2+'=\'Low\''));
    }
    
    @isTest
    private static void testupdateRelatedContactAddresses() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        List<Account> testAccountList = TestDataFactory.returnAccounts(5, 'CIM_Account', testUser.Id);        

        for (Account account : testAccountList) {
            account.Country__c = 'TR';
            account.BillingStreet = 'Test Street 1';
            account.BillingPostalCode = '12345';
            account.BillingCity = 'Test City 1';
            account.BillingCountry = 'TR';
            account.BillingState = 'Test State 1';            
        }
    
        List<Contact> testContactList = new List<Contact>();
        
        Test.startTest();
        
        // Test inserting Account
        insert testAccountList;
        
        Integer i = 1;
        Contact testContact = new Contact();
        
        for(Account acc : testAccountList){
        
        testContact = new Contact(AccountId = acc.Id, 
                                          MailingStreet = acc.BillingStreet, 
                                          MailingCity = acc.BillingCity, 
                                          MailingPostalCode = acc.BillingPostalCode, 
                                          MailingCountry = acc.BillingCountry, 
                                          MailingState = acc.BillingState, 
                                          LastName = ('Test ' + i));        
        testContactList.add(testContact);
        i++;
            
        }
        
        insert testContactList;
        
        // Test updating Account        
        testAccountList[0].BillingStreet = 'Test Street 2';
        testAccountList[1].BillingCity = 'Test City 2';
        testAccountList[2].BillingPostalCode = '6789';
        testAccountList[3].BillingCountry = 'Turkey';
        testAccountList[4].BillingState = 'Test State 2';
        update testAccountList;

        Test.stopTest();

        testAccountList = [SELECT Id, BillingStreet, BillingPostalCode, BillingCity, BillingCountry, BillingState FROM Account WHERE Country__c =: 'TR'];
        testContactList = [SELECT Id, MailingStreet, MailingPostalCode, MailingCity, MailingCountry, MailingState FROM Contact WHERE Account.Country__c =: 'TR'];
        
        System.assertEquals(testAccountList[0].BillingStreet, testContactList[0].MailingStreet, 'Expected equal street addresses');
        System.assertEquals(testAccountList[1].BillingPostalCode, testContactList[1].MailingPostalCode, 'Expected equal postal code');
        System.assertEquals(testAccountList[2].BillingCity, testContactList[2].MailingCity, 'Expected equal city');
        System.assertEquals(testAccountList[3].BillingCountry, testContactList[3].MailingCountry, 'Expected equal country');
        System.assertEquals(testAccountList[4].BillingState, testContactList[4].MailingState, 'Expected equal state');
    }
    
// Commented out 2021-05-15 by Daniel Rosenberg to fix hotfix test failure:
    @isTest static void testCreateEntitlement(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        List<Account> testAccountList = TestDataFactory.returnAccounts(5, 'CIM_Account', testUser.Id); 
        
        for (Account account : testAccountList) {
            account.name= 'testacc';
            account.OneAccount_Type__c = 'competitor';
            account.Country__c = 'AU';           
        }
    
        test.StartTest();
        insert testAccountList;
        test.stopTest();
        
    List<Entitlement> etList = [Select Id,AccountId From Entitlement Where AccountId IN: testAccountList];      
    
    System.assertNotEquals(etList.size(),0,'List should not be empty');
    }

    @isTest
    private static void testUpdateParentAccounts() {
        // Given, we Create a test account with a parent
        Account parentAccount = new Account(Name='Parent Account');
        insert parentAccount;

        // When, we create child accounts
        Account childAccount = new Account(Name='Child Account', ParentId=parentAccount.Id);
        insert childAccount;

        Account grandChildAccount = new Account(Name='grandChild Account', ParentId=childAccount.Id);
        insert grandChildAccount;

        // Then, Assert that the parent account's counter is updated
        List<Account> parentAccounts = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :parentAccount.Id];
        List<Account> childAccounts = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :childAccount.Id];
        System.assertEquals(2, parentAccounts[0].ChildAccountsCount__c, 'Parent account counter not updated correctly');
        System.assertEquals(1, childAccounts[0].ChildAccountsCount__c, 'Parent account counter not updated correctly');

        // Given what we have, when we delete one child
        delete grandChildAccount;

        // Then, Assert that the parent account's counter is updated
        List<Account> parentAccountsAfterDelete = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :parentAccount.Id];
        List<Account> childAccountsAfterDelete = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :childAccount.Id];
        System.assertEquals(1, parentAccountsAfterDelete[0].ChildAccountsCount__c, 'Parent account counter not updated correctly after delete');
        System.assertEquals(0, childAccountsAfterDelete[0].ChildAccountsCount__c, 'Parent account counter not updated correctly after delete');

        // Given what we have, when we undelete one child
        undelete grandChildAccount;

        // Then, Assert that the parent account's counter is updated
        List<Account> parentAccountsAfterUnDelete = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :parentAccount.Id];
        List<Account> childAccountsAfterUnDelete = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :childAccount.Id];
        System.assertEquals(2, parentAccountsAfterUnDelete[0].ChildAccountsCount__c, 'Parent account counter not updated correctly after undelete');
        System.assertEquals(1, childAccountsAfterUnDelete[0].ChildAccountsCount__c, 'Parent account counter not updated correctly after undelete');

    }

    @isTest
    private static void testUpdateParentAccountsViaBatchManually() {
        // Given, we Create a test account with a parent
        Account parentAccount = new Account(Name='Parent Account');
        insert parentAccount;

        // When, we create child accounts
        Account childAccount = new Account(Name='Child Account', ParentId=parentAccount.Id);
        insert childAccount;

        Account grandChildAccount = new Account(Name='grandChild Account', ParentId=childAccount.Id);
        insert grandChildAccount;

        Test.startTest();
        Database.executeBatch(new ProcessChildAccountsBatch(new List<Id>{parentAccount.Id}),1);
        Test.stopTest();

        // Then, Assert that the parent account's counter is updated
        List<Account> parentAccounts = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :parentAccount.Id];
        List<Account> childAccounts = [SELECT Id, ChildAccountsCount__c FROM Account WHERE Id = :childAccount.Id];
        System.assertEquals(2, parentAccounts[0].ChildAccountsCount__c, 'Parent account counter not updated correctly');
        System.assertEquals(1, childAccounts[0].ChildAccountsCount__c, 'Parent account counter not updated correctly');
    }

}