/*------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Test Class for all Campaign Member Trigger / Handler / Helper.

History
2023-03-01   Houssam ADIB     Created New Test Class
2023-12-04   Richard Trum     Removed the method testSetInternationalSpeaker (TFUS-6215)
------------------------------------------------------------*/
@isTest
public class CampaignMemberTriggerTest {

    /**
     * Test Setup
     */
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
    }

    /**
     * Tests the pppulation of Account__c field in campaign member records
     */
    @isTest
    private static  void testUpdateCampaignMemberAccount()
    {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runAs(testUser)
        {
            // Given
            TestDataFactory.enableTrigger();
            Campaign campaign = CampMgmtTestHelpers.createTestCampaign('Test Campaign 1', 'DI_Campaign');
            Account  account  = CampMgmtTestHelpers.createTestAccount('Test Account 1');
            Contact  contact  = CampMgmtTestHelpers.createTestContact(account.Id, 'Testis', 'Testisson', 'email@email.com');

            // When
            Test.startTest();
            CampaignMember campaignMember = CampMgmtTestHelpers.createTestCampaignMember(campaign.Id, contact.Id, 'Confirmed');
            Test.stopTest();

            // Then
            campaignMember = [  SELECT Id, Account__c FROM CampaignMember WHERE Id = :campaignMember.Id];
            System.assertEquals(account.Id, campaignMember.Account__c);
        }
    }

    /**
     * Tests the creation of Opportunities from Campaign Member
     * Migrated from old test classes
     */
    @IsTest
    public static void testCreateOpportunities()
    {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        System.runAs(testUser)
        {
            List<Account> accountsList = TestDataFactory.createAccounts(2, 'CIM_Account', testUser.Id);
            accountsList.get(1).OneAccount_Type__c = 'Distributor';
            accountsList.get(0).Country__c = 'DE';
            update accountsList;

            List<Contact> contactList = TestDataFactory.returnContacts(2, 'ContactGlobal', testUser.Id);
            contactList.get(0).AccountId = accountsList.get(0).Id;
            contactList.get(0).Email = 'test1.test@dentsplysirona.com.invalid';
            contactList.get(0).InsertEmailMarketingConsentCollected__c = 'No';
            contactList.get(1).AccountId = accountsList.get(1).Id;
            contactList.get(1).Email = 'test2.test@dentsplysirona.com.invalid';
            contactList.get(1).InsertEmailMarketingConsentCollected__c = 'No';
            insert contactList;

            List<AccountContactRelation> relations = [SELECT AccountId, ContactId, Specialty__c FROM AccountContactRelation WHERE AccountId =: accountsList.get(1).Id];

            for(AccountContactRelation rel : relations){
                rel.Specialty__c = 'Dealer Sales Rep (CEREC)';
            }
            update relations;

            List<Campaign> campaignList = TestDataFactory.returnCampaigns(1, 'Digital_Marketing_Campaign', testUser.Id);
            campaignList.get(0).Brands__c = 'Sinius';
            campaignList.get(0).Convert_To__c = 'Opportunity';
            campaignList.get(0).Include_In_Dealer_Community__c = 'Yes';
            insert campaignList;

            List<CampaignMember> campaignMembersList = TestDataFactory.returnCampaignMembers(1);
            campaignMembersList.get(0).ContactId = contactList.get(0).Id;
            campaignMembersList.get(0).CampaignId = campaignList.get(0).Id;
            campaignMembersList.get(0).Dealer__c = accountsList.get(1).Id;
            campaignMembersList.get(0).Status = 'Registered';

            Test.startTest();
            insert campaignMembersList;
            campaignMembersList.get(0).Status = 'Responded';
            update campaignMembersList;
            Test.stopTest();

            List<Opportunity> opportunitiesCreated = [ SELECT ID FROM Opportunity];
            System.assertNotEquals(0, opportunitiesCreated.size(),'No opportunities generated');
        }
    }


    /**
     * Tests the lead owner assignments
     * Migrated from old test classes
     */
    @isTest
    private static  void testLeadOwnerAssignment()
    {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        testUser.FirstName = 'Eloqua';
        testUser.LastName = 'Integration';
        update testUser;

        System.runAs(testUser)
        {
            // Given
            TestDataFactory.enableTrigger();
            Campaign campaign = CampMgmtTestHelpers.createTestCampaign('Test Campaign 1', 'InPersonEventCampaign');
            Account  account  = CampMgmtTestHelpers.createTestAccount('Test Account 1');
            Contact  contact  = CampMgmtTestHelpers.createTestContact(account.Id, 'Testis', 'Testisson', 'email@email.com');
            Lead lead = new Lead(lastName = 'Lead 123');
            lead.Country_Code_3_digit__c = 'DEU';
            insert lead;
            // When
            Test.startTest();
            CampaignMember campaignMember = CampMgmtTestHelpers.returnTestCampaignMember(campaign.Id, contact.Id, 'Confirmed');
            campaignMember.LeadId = lead.Id;
            insert campaignMember;
            Test.stopTest();

            // Then
            Lead leadResult = [ SELECT Id, OwnerId FROM Lead WHERE Id = :lead.Id];
            System.assertNotEquals(null, leadResult.OwnerId,'Unexpected Lead Owner Id');
        }
    }

    /**
     * Migrated from old test classes
     */
    @isTest
    public static void testUpdateCampaignMembersInfo() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        List<Account> accountsList = TestDataFactory.createAccounts(1, 'Non_ERP_Account', testUser.Id);
        List<Contact> contactList = TestDataFactory.returnContacts(4, 'Contact_D', testUser.Id);
        contactList.get(0).AccountId = accountsList.get(0).Id;
        insert contactList;
        List<Campaign> campaignList = TestDataFactory.returnCampaigns(4, 'DI_Campaign', testUser.Id);
        for(Campaign cm : campaignList) {
            cm.SBU_Focus__c = 'Implants';
        }
        insert campaignList;
        List<CampaignMember> campaignMembertList = TestDataFactory.returnCampaignMembers(4);

        // WF-CAMM-01 : 'Set Account Strategy and W/L status'
        campaignMembertList.get(0).ContactId = contactList.get(0).Id;
        campaignMembertList.get(0).CampaignId = campaignList.get(0).Id;

        // WF-CAMM-02 : 'Set DI Campaign Member Info Based On Campaign'
        campaignMembertList.get(1).ContactId = contactList.get(1).Id;
        campaignMembertList.get(1).CampaignId = campaignList.get(1).Id;
        campaignMembertList.get(1).Type__c = 'Participant';

        campaignMembertList.get(2).ContactId = contactList.get(2).Id;
        campaignMembertList.get(2).CampaignId = campaignList.get(2).Id;
        campaignMembertList.get(2).Type__c = 'Participant';
        campaignMembertList.get(2).of_Guests_including_participant__c = 'Single Room';

        campaignMembertList.get(3).ContactId = contactList.get(3).Id;
        campaignMembertList.get(3).CampaignId = campaignList.get(3).Id;
        campaignMembertList.get(3).Type__c = 'Participant';
        campaignMembertList.get(3).of_Guests_including_participant__c = 'Double Room';

        Test.startTest();
        insert campaignMembertList;
        Test.stopTest();
    }

    /**
     * Migrated from old test classes
     */
    @isTest
    public static void testCreateSalesLead(){

        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        List<Account> accountsList = TestDataFactory.createAccounts(2, 'CIM_Account', testUser.Id);
        accountsList.get(1).OneAccount_Type__c = 'Distributor';
        accountsList.get(0).Country__c = 'US';
        update accountsList;

        List<Contact> contactList = TestDataFactory.returnContacts(2, 'ContactGlobal', testUser.Id);
        contactList.get(0).AccountId = accountsList.get(0).Id;
        contactList.get(0).Email = 'test1.test@dentsplysirona.com.invalid';
        contactList.get(0).InsertEmailMarketingConsentCollected__c = 'No';
        contactList.get(1).AccountId = accountsList.get(1).Id;
        contactList.get(1).Email = 'test2.test@dentsplysirona.com.invalid';
        contactList.get(1).InsertEmailMarketingConsentCollected__c = 'No';
        insert contactList;

        List<AccountContactRelation> relations = [SELECT AccountId, ContactId, Specialty__c FROM AccountContactRelation WHERE AccountId =: accountsList.get(1).Id];

        for(AccountContactRelation rel : relations){
            rel.Specialty__c = 'Dealer Sales Rep (CEREC)';
        }
        update relations;

        List<Campaign> campaignList = TestDataFactory.returnCampaigns(1, 'Digital_Marketing_Campaign', testUser.Id);
        campaignList.get(0).Brands__c = 'Sinius';
        campaignList.get(0).Convert_To__c = 'Sales Lead';
        insert campaignList;
        List<CampaignMember> campaignMembertList = TestDataFactory.returnCampaignMembers(1);

        campaignMembertList.get(0).ContactId = contactList.get(0).Id;
        campaignMembertList.get(0).CampaignId = campaignList.get(0).Id;
        campaignMembertList.get(0).Dealer__c = accountsList.get(1).Id;
        campaignMembertList.get(0).Status = 'Registered';

        Test.startTest();
        insert campaignMembertList;
        campaignMembertList.get(0).Status = 'Responded';
        update campaignMembertList;
        Test.stopTest();
    }
}