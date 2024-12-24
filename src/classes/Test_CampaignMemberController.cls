/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Test class for CampaignMemberController
 *
 * @History
 * 27-11-2024   Omar     Created test class
 */

@isTest(seeAllData=false)
public class Test_CampaignMemberController {

    /**
    * Test setup
    */
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
        List<Contact> contactList = TestDataFactory.returnContacts(2, 'ContactGlobal', userList[0].Id);
        contactList[0].AccountId = accountList[0].Id;
        contactList[1].AccountId = accountList[1].Id;
        insert contactList;

        // Create test campaign
        List<Campaign> campaignList = TestDataFactory.returnCampaigns(1, 'Digital_Marketing_Campaign', userList[0].Id);
        insert campaignList;

        // Create test CampaignMembers for the campaign
        List<CampaignMember> campaignMembersList = TestDataFactory.returnCampaignMembers(2);
        campaignMembersList.get(0).CampaignId = campaignList.get(0).Id;
        campaignMembersList.get(0).ContactId = contactList[0].Id;
        campaignMembersList.get(1).CampaignId = campaignList.get(0).Id;
        campaignMembersList.get(1).ContactId = contactList[1].Id;

        insert campaignMembersList;
    }

    /**
    * Test method for getMemberList
    */
    @isTest
    private static void testGetMemberList() {
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser) {
            // Fetch the campaign created in the setup
            Campaign campaign = [SELECT Id FROM Campaign WHERE Name LIKE 'TestCampaign%' LIMIT 1];

            // Call the method to test
            Test.startTest();
            List<CampaignMember> result = CampaignMemberController.getMemberList(campaign.Id);
            Test.stopTest();

            // Assertions
            System.assertNotEquals(null, result, 'The list of campaign members should not be null.');
            System.assertEquals(2, result.size(), 'The number of campaign members should match the setup.');
        }
    }
}
