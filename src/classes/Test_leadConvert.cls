@IsTest
private class Test_leadConvert {
    @IsTest
    private static void testConvertLead() {

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

        leadConvert.ConvertLeadRequest req = new leadConvert.ConvertLeadRequest();
        req.leadId = l.Id;
        req.sendEmailToOwner = false;
        req.accountId = a.Id;
        req.contactId = c.Id;
        req.convertedStatus = 'Qualified';
        req.createOpportunity = false;

        Test.startTest();

        List<leadConvert.ConvertLeadRequest> input = new List<leadConvert.ConvertLeadRequest>();
        input.add(req);

        List<String> result = leadConvert.convertLead(input);

        Test.stopTest();

    }

    @IsTest
    private static void testConvertLeadWoContact() {

        Account a = new Account();
        a.Name = 'Test company';
        a.BillingPostalCode = '12345';
        a.BillingStreet = 'Test street 1';
        insert a;

        Lead l = new Lead();
        l.Company = 'Test company';
        l.PostalCode = '12345';
        l.Street = 'Test street 1';
        l.FirstName = 'Test';
        l.LastName = 'Testsson';
        l.Email = 'testing@dentsplysirona.com.invalid';
        insert l;

        leadConvert.ConvertLeadRequest req = new leadConvert.ConvertLeadRequest();
        req.leadId = l.Id;
        req.sendEmailToOwner = false;
        req.accountId = a.Id;
        req.convertedStatus = 'Qualified';
        req.createOpportunity = false;
        req.overWriteLeadSource = true;
        req.sendEmailToOwner = true;


        Test.startTest();

        List<leadConvert.ConvertLeadRequest> input = new List<leadConvert.ConvertLeadRequest>();
        input.add(req);

        List<String> result = leadConvert.convertLead(input);

        Test.stopTest();

    }
}