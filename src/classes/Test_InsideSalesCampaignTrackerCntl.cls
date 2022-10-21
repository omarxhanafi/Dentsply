/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : Test class of InsideSalesCampaignTrackerController
 * Test class        : Test_InsideSalesCampaignTrackerCntl
 * History	
 * 03-03-2022        : Created (#TFUS-000004085)
--------------------------------------------------------------------------------------------------*/
@isTest
public class Test_InsideSalesCampaignTrackerCntl {
	@isTest
    public static void Test_getCampaignDetails() {
        User user = TestDataFactory.createUsers(1, 'Lightning Inside Sales Rep')[0];
        List<Campaign> campaigns = new List<Campaign>();
        System.runas(user) {
            Account currentAccount = TestDataFactory.createAccounts(1, 'CIM_Account', user.Id)[0];
            List<RecordType> recTypId = [select id, developerName from RecordType where developerName Like '%Inside_Sales_Campaign%'];
        
            Campaign campaign1 = new Campaign(name = 'campaign1', StartDate = Date.newInstance(2019, 01, 10), EndDate = Date.newInstance(2019, 01, 12), Status = 'Proposed', IsActive = true, RecordType = recTypId[0], of_Participants_Reported__c = 11, SBU_Focus__c = 'Implants');
            insert campaign1;
            
            Campaign campaign2 = new Campaign(name = 'campaign2', StartDate = Date.newInstance(2019, 01, 11), EndDate = Date.newInstance(2019, 01, 15), Status = 'Proposed', IsActive = true, RecordType = recTypId[0], of_Participants_Reported__c = 11, SBU_Focus__c = 'Implants');
            insert campaign2;
            
            CampaignMember campaignMember = new CampaignMember(AccountId = currentAccount.Id, CampaignId = campaign1.Id, Status='Busy');
        	insert campaignMember;
            
            campaigns = InsideSalesCampaignTrackerController.getCampaignDetails(currentAccount.Id);
        }
        
        System.assertEquals(campaigns.size(), 1);
    }
    
    @isTest
    public static void Test_getPicklistsValues() {
        User user = TestDataFactory.createUsers(1, 'Lightning Inside Sales Rep')[0];
        List<String> activityResultsValues = new List<String>();
        List<String> memberStatusValues = new List<String>();
        List<String> contactTypesValues = new List<String>();
        System.runas(user) {
            activityResultsValues = InsideSalesCampaignTrackerController.getActityResultPicklistValues();
         	memberStatusValues = InsideSalesCampaignTrackerController.getMembersStatusPickValues();
         	contactTypesValues = InsideSalesCampaignTrackerController.getContactTypePicklistValues();
        }
        System.assertNotEquals(activityResultsValues.size(), 0);
        System.assertNotEquals(memberStatusValues.size(), 0);
        System.assertNotEquals(contactTypesValues.size(), 0);
    }
    
    @isTest
    public static void Test_createTaskforCampaignMember() {
        User user = TestDataFactory.createUsers(1, 'Lightning Inside Sales Rep')[0];
        List<Campaign> campaigns = new List<Campaign>();
        String taskCreated;
        System.runas(user) {
            Account currentAccount = TestDataFactory.createAccounts(1, 'CIM_Account', user.Id)[0];
            List<RecordType> recTypId = [select id, developerName from RecordType where developerName Like '%Inside_Sales_Campaign%'];
        	
            Contact currentContact = New Contact(LastName = 'Test', AccountId = currentAccount.id);
        	insert currentContact;
            
            Campaign campaign1 = new Campaign(name = 'campaign1', StartDate = Date.newInstance(2019, 01, 10), EndDate = Date.newInstance(2019, 01, 12), Status = 'Proposed', IsActive = true, RecordType = recTypId[0], of_Participants_Reported__c = 11, SBU_Focus__c = 'Implants');
            insert campaign1;
            
            Campaign campaign2 = new Campaign(name = 'campaign2', StartDate = Date.newInstance(2019, 01, 11), EndDate = Date.newInstance(2019, 01, 15), Status = 'Proposed', IsActive = true, RecordType = recTypId[0], of_Participants_Reported__c = 11, SBU_Focus__c = 'Implants');
            insert campaign2;
            
            //add account as memeber of campaign1
            CampaignMember campaignMember = new CampaignMember(AccountId = currentAccount.Id, CampaignId = campaign1.Id, Status='Busy');
        	insert campaignMember;
            
            //add contact as memeber of campaign2
            CampaignMember campaignMember2 = new CampaignMember(ContactId = currentContact.Id, CampaignId = campaign2.Id, Status='Busy');
        	insert campaignMember2;
            
            String data = '[{"name":"campaign1","note":"","activityResult":"Lead","contactType":"Hygienist","memberStatus":"Call Back Later","offerCodes":""}]';
			List<Id> selectedCampaignIds = new List<Id>();
            selectedCampaignIds.add(campaign1.id);
            selectedCampaignIds.add(campaign2.id);
            taskCreated = InsideSalesCampaignTrackerController.createTaskforCampaignMember(data, currentAccount.Id, selectedCampaignIds);
        }
        System.assertNotEquals(taskCreated, 'error');
    }
    
    @istest
    public static void Test_createFollowUpTask() {
    	User user = TestDataFactory.createUsers(1, 'Lightning Inside Sales Rep')[0];
        Account currentAccount = TestDataFactory.createAccounts(1, 'CIM_Account', user.Id)[0];
        System.runas(user) {
            Date dueDate = System.today();
            DateTime reminderDate = System.today();
            String subject = 'follow up';
            String comments = 'test task description';
       		InsideSalesCampaignTrackerController.createFollowUpTask ( currentAccount.Id,dueDate,reminderDate,subject,comments);
        }
        Task taskCreated = [Select Id,Description,WhatId,subject From Task where WhatId=:currentAccount.Id];
        System.assertEquals(taskCreated.subject, 'follow up');
    }   
}