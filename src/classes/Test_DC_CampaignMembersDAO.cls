/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for DC_CampaignMembersDAO.
 *
 * @History
 * 27-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public class Test_DC_CampaignMembersDAO {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();

        // Create test account
        List<Account> accountList = TestDataFactory.returnAccounts(2, 'CIM_Account', userList[0].Id);
        insert accountList;

        // Create test contact
        List<Contact> contactList = TestDataFactory.returnContacts(1, 'ContactGlobal', userList[0].Id);
        contactList[0].AccountId = accountList[0].Id;
        insert contactList;

        // Create test campaign
        List<Campaign> campaignList = TestDataFactory.returnCampaigns(2, 'Digital_Marketing_Campaign', userList[0].Id);
        campaignList[0].IsActive = true;
        campaignList[0].EndDate = Date.today().addDays(5);
        campaignList[1].IsActive = true;
        campaignList[1].EndDate = Date.today().addDays(10);
        insert campaignList;

        // Create test CampaignMembers
        List<CampaignMember> campaignMembersList = TestDataFactory.returnCampaignMembers(2);
        campaignMembersList.get(0).CampaignId = campaignList.get(0).Id;
        campaignMembersList.get(0).ContactId = contactList[0].Id;
        campaignMembersList.get(1).CampaignId = campaignList.get(1).Id;
        campaignMembersList.get(1).ContactId = contactList[0].Id;
        insert campaignMembersList;
    }

    @isTest
    private static void testGetActiveCampaignMembersByContactId() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the test contact
            Contact testContact = [SELECT Id FROM Contact WHERE Name LIKE 'TestContact%' LIMIT 1];

            Test.startTest();
            // Get active campaign members for the test contact
            List<CampaignMember> activeMembers = DC_CampaignMembersDAO.getActiveCampaignMembersByContactId(testContact.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(0, activeMembers.size(), 'There should be active campaign members for this contact.');
            System.assertEquals(2, activeMembers.size(), 'There should be 2 active campaign members for this contact.');
        }
    }

    @isTest
    private static void testGetCampaignMemberById() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch one campaign member
            CampaignMember cm = [SELECT Id FROM CampaignMember LIMIT 1];

            Test.startTest();
            // Get the campaign member by ID
            CampaignMember fetchedCM = DC_CampaignMembersDAO.getCampaignMemberById(cm.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(fetchedCM, null, 'The campaign member should not be null.');
            System.assertEquals(cm.Id, fetchedCM.Id, 'The campaign member fetched should have the same ID.');
        }
    }
}
