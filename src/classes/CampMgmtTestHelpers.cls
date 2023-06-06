global class CampMgmtTestHelpers
{
    global static Account createTestAccount(String name)
    {
        Account testAccount = new Account();
        String currentUserId = UserInfo.getUserId();
        testAccount = testDataFactory.returnAccounts(1, 'CIM_Account', currentUserId)[0];
        testAccount.Country__c = 'SE';
        testAccount.Name = name;
        insert testAccount;
        
        return testAccount;
    }    
    
    global static Contact createTestContact(ID accountId, String firstName, String lastName,String emailAddress)
    {
        Contact testContact = new Contact();
        testContact.AccountId = accountId;
        testContact.FirstName = firstName;
        testContact.LastName = lastName;
        testContact.InsertEmailMarketingConsentCollected__c= 'No';
        testContact.Email = emailAddress;
        testContact.Email = emailAddress;
        testContact.Country_Code_3_digit__c = 'DEU';
        insert testContact;
        
        return testContact;
    }

    global static Campaign createTestCampaign(String name, String recordTypeDeveloperName)	
    {
        RecordType recordType = [SELECT Id FROM RecordType WHERE DeveloperName = :recordTypeDeveloperName AND SObjectType = 'Campaign'];
 
        Campaign testCampaign = new Campaign();
        testCampaign.RecordTypeId = recordType.Id;
        testCampaign.Name = name;
        testCampaign.Strategy__c = 'GET';
        testCampaign.SBU_Focus__c = 'Implants';
        testCampaign.Campaign_Category__c = 'Consumables';
        testCampaign.Brands__c = 'Sinius';
        testCampaign.IsActive = true;
        testCampaign.Country_Code_3_digit__c = 'DEU';
        insert testCampaign;

        return testCampaign;
    }

    global static Campaign createTestSession(ID campaignId, String name, String recordTypeDeveloperName)
    {
        RecordType recordType = [SELECT Id FROM RecordType WHERE DeveloperName = :recordTypeDeveloperName AND SObjectType = 'Campaign'];

        Campaign testSession = new Campaign();
        testSession.RecordTypeId = recordType.Id;
        testSession.Name = name;
        testSession.Parent_Event__c = campaignId;
        testSession.Strategy__c = 'GET';
        testSession.IsActive = true;
        insert testSession;  

        return testSession;     
    }

    global static CampaignMember createTestCampaignMember(ID campaignId, ID contactId, String status)
    {
        CampaignMember testCampaignMember = createTestCampaignMember(campaignId, contactId, status, 'Participant');
        insert testCampaignMember;
        return testCampaignMember;
    } 

    global static CampaignMember createTestCampaignMember(ID campaignId, ID contactId, String status, String type)
    {
        CampaignMember testCampaignMember = new CampaignMember();
        testCampaignMember.CampaignId = campaignId;
        testCampaignMember.ContactId = contactId;
        testCampaignMember.Status = status;
        testCampaignMember.Type__c = type;

        return testCampaignMember;     
    }

    global static CampaignMember returnTestCampaignMember(ID campaignId, ID contactId, String status)
    {
        return createTestCampaignMember(campaignId, contactId, status, 'Participant');
    }
}