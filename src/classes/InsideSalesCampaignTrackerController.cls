/*-------------------------------------------------------------------------------------------------	
 * Author            : naoussar@salesforce.com
 * Description       : InsideSalesCampaignTrackerController Apex controller of InsideSalesCampaignTracker LWC
 * Test class        : Test_InsideSalesCampaignTrackerCntl
 * History	
 * 03-03-2022        : Created (#TFUS-000004085)
 * 16-05-2024        : Assigning the Campaign to the created task (TFUS-000006250)
--------------------------------------------------------------------------------------------------*/
public with sharing class InsideSalesCampaignTrackerController {
	/*------------------------------------------------------------	
	Description: Get campaigns related to an account (if campaign members is the account itself or contacts of that account)
	Inputs: Id of an account
    -------------------------------------------------------------*/	
   @AuraEnabled(cacheable=true)
    public static List<Campaign> getCampaignDetails(Id accountId) {
        List<Contact> contactrelated = [SELECT id FROM Contact where Accountid =: accountId];
        List<Campaign> campaignsList = [SELECT Name,
                                        (SELECT Status FROM CampaignMembers where AccountId =: accountId OR ContactId IN:contactrelated),
                        				(SELECT Offer_Code__r.Name from Campaign_Offer_Codes__r) FROM Campaign where IsActive = true AND RecordType.Name = 'Inside Sales Campaign' AND id in(SELECT CampaignId FROM CampaignMember where AccountId =: accountId OR ContactId IN:contactrelated ) limit 25];
        

        return campaignsList;
    }

    /*------------------------------------------------------------	
	Description: get Actity Result Picklist Values from task object
	Inputs: No Input
    -------------------------------------------------------------*/	
    @AuraEnabled(cacheable=true)
    public static List<String> getActityResultPicklistValues() {
        List<String> actityResultPicklist = new List<String>();
        Schema.DescribeFieldResult fieldResult = ActivityHistory.Activity_Result__c.getDescribe();
        List<Schema.PicklistEntry> pickListEntry = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListValue : pickListEntry){
            actityResultPicklist.add(pickListValue.getLabel());
        }    
		actityResultPicklist.sort();
        return actityResultPicklist;
    }

    /*------------------------------------------------------------	
	Description: get Members Status Picklist Values from Campaign Member object
	Inputs: No Input
    -------------------------------------------------------------*/	
    @AuraEnabled(cacheable=true)
    public static List < String > getMembersStatusPickValues() {
        List < String > MembersStatusPicklist = new list < String > ();      
        Schema.DescribeFieldResult fieldResult = Inside_Sales_Campaign_Picklist__mdt.Picklist_Value__c.getDescribe();
        List<Schema.PicklistEntry> pickListEntry = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListValue : pickListEntry){
            MembersStatusPicklist.add(pickListValue.getLabel());
        }  
        return MembersStatusPicklist;
    } 

    /*------------------------------------------------------------	
	Description: get Contact Type Picklist Values from Task object
	Inputs: No Input
    -------------------------------------------------------------*/	
    @AuraEnabled(cacheable=true)
    public static List<String> getContactTypePicklistValues() {
    List<String> contactTypePicklist = new List<String>();
	Schema.DescribeFieldResult fieldResult = ActivityHistory.Contact_Type__c.getDescribe();
    List<Schema.PicklistEntry> pickListEntry = fieldResult.getPicklistValues();
    for( Schema.PicklistEntry pickListValue : pickListEntry){
        contactTypePicklist.add(pickListValue.getLabel());
    }    
    contactTypePicklist.sort();
    return contactTypePicklist;
    }

    /*------------------------------------------------------------	
	Description: createTaskforCampaignMember create task for each selected campaign & update campaign member status
	Inputs: String data : details of task: Notes, Contact Type and memeber status
			Id accountId : related account to relate it to the task
			List<String> selectedCampaignIds : list of selected campaigns to be updated & related to the task
    -------------------------------------------------------------*/
    @AuraEnabled(Cacheable=false)
    public static String createTaskforCampaignMember(String data, Id accountId, List<String> selectedCampaignIds) {
        String result;//will hold id of task created or size of the list of tasks created
        List<Task> tasksList = new List<Task>();
        List<CampaignMember> campaignMemberListToUpdate = new List<CampaignMember>();
        Map<String,Id> campaignsRelatedToAccount = new Map<String,Id>();
            Map<String,Id> campaignsRelatedToContacts = new Map<String,Id>();
        Map<String,String> campaignMemberStatusMap = new Map<String,String>();
        set<String> selectedMembersIds = new set<String>();
        List<Object> tasksData = (List<Object>)JSON.deserializeUntyped(data);
        for(Object dataItem: tasksData){
            Map<String,Object> mappedData = (Map<String,Object>)dataItem;
            selectedMembersIds.add((String)mappedData.get('memberId'));
        }
        //get campaign members and filter the ones related to account and the ones related to contact
        List<CampaignMember> campaignsMembers = [SELECT Id, Status, Campaign.Name, CampaignId, AccountId, ContactId FROM CampaignMember where Id IN:selectedMembersIds ];
        for(CampaignMember member:campaignsMembers){
            if(member.AccountId != null){
                if(campaignsRelatedToAccount.get(member.Campaign.Name) == null){
                    campaignsRelatedToAccount.put(member.Campaign.Name,member.AccountId);
                }
            }else if(member.ContactId != null){
                if(campaignsRelatedToAccount.get(member.Campaign.Name) == null && campaignsRelatedToContacts.get(member.Campaign.Name) == null){
                    campaignsRelatedToContacts.put(member.Campaign.Name,member.ContactId);
                }
            }
        }
        if(selectedCampaignIds.contains('Unrelated')){
                //relate unrelated compaign to the current account 
                campaignsRelatedToAccount.put('Activity Unrelated to a Campaign',accountId);
        }      
        Id DNARecordTypeId = [Select Id From RecordType where developerName ='DNA_Campaign_Response' and SobjectType ='Task' limit 1].Id;
        List<Campaign> campaigns = [Select Id, Name FROM Campaign where Id IN:selectedCampaignIds];
        Map<String,String> camapignsDetails = new Map<String,String>();
        for(Campaign campaign: Campaigns){
             camapignsDetails.put(campaign.name,campaign.Id);
        }

		for(Object taskdata : tasksData){
            Map<String,Object> mappedData = (Map<String,Object>)taskdata;
            Task tasktoBeCreated =  new Task();
            tasktoBeCreated.OwnerId = UserInfo.getUserId();
            tasktoBeCreated.Priority = 'Normal';
            tasktoBeCreated.Status = 'Completed';
            tasktoBeCreated.subject = 'Call - '+(String)mappedData.get('name');
            tasktoBeCreated.RecordTypeId = DNARecordTypeId;
         	//tasktoBeCreated.Description = (String)mappedData.get('name')+' - '+DateTime.now()+'\n'+(String)mappedData.get('note');
           	tasktoBeCreated.Description = (String)mappedData.get('note');
            // if there is account as a member
            if(campaignsRelatedToAccount.get((String)mappedData.get('name')) != null){
            	tasktoBeCreated.WhatId = accountId;
            }else if(campaignsRelatedToContacts.get((String)mappedData.get('name'))!= null){
                tasktoBeCreated.WhatId = camapignsDetails.get((String)mappedData.get('name'));
                tasktoBeCreated.WhoId =  campaignsRelatedToContacts.get((String)mappedData.get('name'));
            }
            tasktoBeCreated.Contact_Type__c = (String)mappedData.get('contactType');
            tasktoBeCreated.Activity_Result__c = (String)mappedData.get('activityResult');
            tasktoBeCreated.ActivityDate = System.Today();
            tasktoBeCreated.TaskSubtype = 'Call';

            // Don't create an activity when the campaign member's status is Canceled - TFUS-000005230
            if((String)mappedData.get('memberStatus') != 'Canceled'){
                tasksList.add(tasktoBeCreated);
            }

            // Assign campaign to task - TFUS-000006250
            if((String)mappedData.get('memberId') != null){
                for(CampaignMember eachCampaignMember : campaignsMembers){
                    if(eachCampaignMember.Id == (String)mappedData.get('memberId')){
                        tasktoBeCreated.Campaign__c = eachCampaignMember.CampaignId;
                    }
                }
            }

            campaignMemberStatusMap.put((String)mappedData.get('name'), (String)mappedData.get('memberStatus'));
        }
        List<Contact> contactrelated = [SELECT id FROM Contact where Accountid =: accountId];
		for(CampaignMember member : campaignsMembers ){
            member.status = campaignMemberStatusMap.get(member.Campaign.Name);
            campaignMemberListToUpdate.add(member);
        }
        try{
        	update campaignMemberListToUpdate;

            if(!tasksList.isEmpty()){
                insert tasksList;

                if(tasksList.size() == 1)
                    result = tasksList[0].Id;
                if(tasksList.size() > 1)
                    result = String.valueOf(tasksList.size());
            } else {
                result = 'Campaign members updated successfully, no tasks were created';
            }

            return result;
        }catch(Exception ex){
            DebugLog.addException(ex,'###InsideSalesCampaignTrackerController:createTaskforCampaignMember exception');
            return 'error';
        }
    }
    
    /*------------------------------------------------------------	
	Description: createFollowUpTask create a follow up task for sales rep to remind him to complete his job
	Inputs: Id accountId : related account to relate it to the task
			Date dueDate : due date of the follow up task
			Date reminderDate : reminder date of the follow up task
			String subject : subject of the the follow up task
			String comments : description of the follow up task
			all this inputs are coming from the UI where the user chose convenient data to the task
    -------------------------------------------------------------*/
    @AuraEnabled
    public static void createFollowUpTask (Id accountId, Date dueDate, DateTime reminderDate, String subject, String comments){
        Task followUptask = new Task();
        followUptask.OwnerId = UserInfo.getUserId();
        followUptask.Priority = 'Normal';
        followUptask.Status = 'Not Started';
        followUptask.RecordTypeId = [Select Id From RecordType where developerName ='Task_DI_New' and SobjectType ='Task' limit 1].Id;
        followUptask.WhatId = accountId;
        followUptask.IsReminderSet = true;
        followUptask.ReminderDateTime = reminderDate;
        followUptask.ActivityDate = dueDate;
        followUptask.subject = subject;
        followUptask.Description = comments;
        try{
            insert followUptask;
        }
        catch (Exception ex){
     		System.debug('###InsideSalesCampaignTrackerController:createFollowUpTask exception' + ex);
        }
    
    }
}