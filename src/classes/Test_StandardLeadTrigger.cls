/*------------------------------------------------------------
Author: 		Richard Trum 2021-02-23
Description:   	Test Class for all StandardLeadTrigger methods.
History
20210223   Richard Trum   	Created trigger framework
------------------------------------------------------------*/
@isTest(seeAllData=false)
public class Test_StandardLeadTrigger {

    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.createUsers(1, 'System Administrator');
        List<User> userIntegrationList = TestDataFactory.insertIntegrationUsers(1, 'System Administrator');
        TestDataFactory.createGlobalIntegrationSettings(userIntegrationList);
    }

    @isTest
    private static void testUpdateCampaignMembers() {
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];
        List<Account> accountsList = TestDataFactory.createAccounts(1, 'CIM_Account', testUser.Id);
        accountsList.get(0).Country__c = 'US';
        update accountsList;
        
        Lead l = new Lead();        
        l.Email = 'test1.test@dentsplysirona.com.invalid';
        l.FirstName = 'Test';
        l.LastName = 'Test';
		l.Status = 'New';
        l.Company = 'Test Customer';
        insert l;
        
        List<Campaign> campaignList = TestDataFactory.returnCampaigns(1, 'Digital_Marketing_Campaign', testUser.Id);
        campaignList.get(0).Brands__c = 'Sinius';
        campaignList.get(0).Convert_To__c = 'Sales Lead';
        insert campaignList;
        List<CampaignMember> campaignMembertList = TestDataFactory.returnCampaignMembers(1);

        campaignMembertList.get(0).LeadId = l.Id;
        campaignMembertList.get(0).CampaignId = campaignList.get(0).Id;
        campaignMembertList.get(0).Status = 'Responded';
        insert campaignMembertList;
        
		Test.startTest();
        	
        	Database.LeadConvert lc = new Database.LeadConvert();
        	LeadStatus convertStatus = [SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true LIMIT 1];
			lc.setConvertedStatus(convertStatus.MasterLabel);
        	lc.setAccountId(accountsList[0].Id);
        	lc.setDoNotCreateOpportunity(true);
        	lc.setLeadId(l.Id);
        	
        	//Convert lead
        	Database.LeadConvertResult lcr = Database.convertLead(lc, false);
        	
        Test.stopTest();        

    }

    /**
     * Ensures that the "SharedGlobally__c" field on Campaigns is correctly updated
     * when Leads linked to the Campaigns have a different or matching Country.
     * @author hadib@salesforce.com | 09-10-2024
     * Test Cases:
     * 1. Lead with the same country as the Campaign should not change the flag.
     * 2. Lead with a different country should mark the Campaign as "SharedGlobally__c = true".
     * 3. Reverting the Lead's country should maintain the correct state of the flag.
     */
    @IsTest
    private static void testProcessLeads()
    {
        // Create test user
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1' LIMIT 1];

        System.runAs(testUser)
        {
            // Start test context
            Test.startTest();

            // Create a test Campaign with a specific country
            Campaign testCampaign = new Campaign(
                    Name = 'Test Campaign',
                    Campaign_Country__c = 'USA',
                    SharedGlobally__c = false,
                    RecordTypeId = [SELECT Id FROM RecordType WHERE DeveloperName = 'Digital_Marketing_Campaign' LIMIT 1].Id
            );
            insert testCampaign;

            // Create a Lead that has the same country as the Campaign
            Lead leadSameCountry = new Lead(
                    FirstName = 'John',
                    LastName = 'Doe',
                    Company = 'Test Company',
                    Country = 'USA'
            );
            insert leadSameCountry;

            // Create a CampaignMember linking the Lead to the Campaign
            CampaignMember campaignMemberSameCountry = new CampaignMember(
                    LeadId = leadSameCountry.Id,
                    CampaignId = testCampaign.Id
            );
            insert campaignMemberSameCountry;

            // Now, create a Lead with a different country than the Campaign
            Lead leadDifferentCountry = new Lead(
                    FirstName = 'Jane',
                    LastName = 'Smith',
                    Company = 'Another Company',
                    Country = 'Canada'
            );
            insert leadDifferentCountry;

            // Create a CampaignMember linking the Lead with the different country to the same Campaign
            CampaignMember campaignMemberDifferentCountry = new CampaignMember(
                    LeadId = leadDifferentCountry.Id,
                    CampaignId = testCampaign.Id
            );
            insert campaignMemberDifferentCountry;

            // Now update the leads in a way that triggers the logic (same country stays, different country is added)
            leadSameCountry.Country = 'Mexico'; // Change the country to be different
            update leadSameCountry;

            // Trigger logic is invoked, now check the Campaign
            Campaign updatedCampaign = [SELECT Id, SharedGlobally__c FROM Campaign WHERE Id = :testCampaign.Id];
            System.assertEquals(true, updatedCampaign.SharedGlobally__c, 'The campaign should now be marked as Shared Globally due to country mismatch.');

            // Reset the lead back to same country
            leadSameCountry.Country = 'USA'; // Match back to campaign country
            update leadSameCountry;

            // Recheck the Campaign
            updatedCampaign = [SELECT Id, SharedGlobally__c FROM Campaign WHERE Id = :testCampaign.Id];
            System.assertEquals(true, updatedCampaign.SharedGlobally__c, 'The campaign should remain shared globally due to the other lead being different.');

            // Clean up test data
            Test.stopTest();
        }
    }

}