@IsTest
private class Test_findLeadMatch {
    @IsTest
    private static void testExecuteLeadSearch() {

        Account a = new Account();
        a.Name = 'Test company';
        a.BillingPostalCode = '12345';
        a.BillingStreet = 'Test street 1';
        insert a;

        Contact c = new Contact();
        c.AccountId = a.Id;
        c.FirstName = 'Test';
        c.LastName = 'Testsson';
        c.Email = 'testing@dentsplysirona.com.invalid';
        insert c;

        Lead l = new Lead();
        l.Company = 'Test company';
        l.PostalCode = '12345';
        l.Street = 'Test street 1';
        l.FirstName = 'Test';
        l.LastName = 'Testsson';
        l.Email = 'testing@dentsplysirona.com.invalid';
        insert l;
        
        //Set SOSL test results
        Id [] fixedSearchResults= new Id[1];
        fixedSearchResults[0] = a.Id;
        Test.setFixedSearchResults(fixedSearchResults);

        Test.startTest();

        List<findLeadMatch.leadMatchResult> res = new List<findLeadMatch.leadMatchResult>();

        List<String> input = new List<String>();
        input.add(l.Id);
        input.add('Contact');
        List<List<String>> inputList = new List<List<String>>();
        inputList.add(input);

        res = findLeadMatch.executeLeadMatchSearch(inputList);

        Test.stopTest();

    }

    @IsTest
    private static void testExecuteLeadSearchIndirect() {

        Account a1 = new Account();
        a1.Name = 'Test company 1';
        a1.BillingPostalCode = '12345';
        a1.BillingStreet = 'Test street 1';
        insert a1;

        Account a2 = new Account();
        a2.Name = 'Test company 2';
        a2.BillingPostalCode = '56789';
        a2.BillingStreet = 'Test street 3';
        insert a2;

        Contact c = new Contact();
        c.AccountId = a1.Id;
        c.FirstName = 'Testing';
        c.LastName = 'Testingsson';
        c.Email = 'testing@dentsplysirona.com.invalid';
        insert c;
        
        Contact c2 = new Contact();
        c2.AccountId = a1.Id;
        c2.FirstName = 'Test';
        c2.LastName = 'Testsson';
        insert c2;

        AccountContactRelation acr = new AccountContactRelation();
        acr.AccountId = a2.Id;
        acr.ContactId = c.Id;
        insert acr;
        
        AccountContactRelation acr2 = new AccountContactRelation();
        acr2.AccountId = a2.Id;
        acr2.ContactId = c2.Id;
        insert acr2;

        Lead l = new Lead();
        l.Company = 'Test company 2';
        //l.PostalCode = '56789';
        l.Street = 'Test street 3';
        l.FirstName = 'Test';
        l.LastName = 'Testsson';
        l.Email = 'testing@dentsplysirona.com.invalid';
        insert l;

        Test.startTest();

        List<findLeadMatch.leadMatchResult> res = new List<findLeadMatch.leadMatchResult>();

        List<String> input = new List<String>();
        input.add(l.Id);
        input.add('Contact');
        List<List<String>> inputList = new List<List<String>>();
        inputList.add(input);

        res = findLeadMatch.executeLeadMatchSearch(inputList);

        Test.stopTest();

    }

    @IsTest
    private static void testFindRelatedContacts() {
        
        Database.DMLOptions dml = new Database.DMLOptions();
		dml.DuplicateRuleHeader.AllowSave = true; 

        Account a = new Account();
        a.Name = 'Test company';
        a.BillingPostalCode = '12345';
        a.BillingStreet = 'Test street 1';
        insert a;

        Account a2 = new Account();
        a2.Name = 'Test company 2';
        a2.BillingPostalCode = '56789';
        a2.BillingStreet = 'Test street 3';
        insert a2;

        Contact c1 = new Contact();
        c1.AccountId = a.Id;
        c1.FirstName = 'Test';
        c1.LastName = 'Testsson';
        c1.Email = 'testing@dentsplysirona.com.invalid';
        insert c1;

        Contact c2 = new Contact();
        c2.AccountId = a2.Id;
        c2.FirstName = 'Testing';
        c2.LastName = 'Testingsson';
        c2.Email = 'testing@dentsplysirona.com.invalid';
        insert c2;
        
        Contact c3 = new Contact();
        c3.AccountId = a2.Id;
        c3.FirstName = 'Test';
        c3.LastName = 'Testsson';
        insert c3;
        
        Contact c4 = new Contact();
        c4.AccountId = a.Id;
        c4.FirstName = 'Tests';
        c4.LastName = 'Testssons';
        
        Database.SaveResult sr = Database.insert(c4, dml);

        AccountContactRelation acr = new AccountContactRelation();
        acr.AccountId = a.Id;
        acr.ContactId = c2.Id;
        insert acr;
        
        AccountContactRelation acr2 = new AccountContactRelation();
        acr2.AccountId = a.Id;
        acr2.ContactId = c3.Id;
        insert acr2;

        Lead l = new Lead();
        //l.Company = 'Test company';
        l.PostalCode = '12345';
        l.Street = 'Test street 1';
        l.FirstName = 'Test';
        l.LastName = 'Testsson';
        l.Email = 'testing@dentsplysirona.com.invalid';
        insert l;

        Test.startTest();
        
        List<findLeadMatch.leadMatchResult> searchRes = new List<findLeadMatch.leadMatchResult>();
        List<String> input = new List<String>();
        input.add(l.Id);
        input.add('Contact');
        List<List<String>> inputList = new List<List<String>>();
        inputList.add(input);

        searchRes = findLeadMatch.executeLeadMatchSearch(inputList);

        List<findLeadMatch.leadMatchResult> res = new List<findLeadMatch.leadMatchResult>();

        res = findLeadMatch.getRelatedContacts(l.Id, a.Id);

        Test.stopTest();

    }

}