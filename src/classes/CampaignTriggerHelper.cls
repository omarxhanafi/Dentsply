/*-------------------------------------------------------------------------------------------------------
Author:         Ahmed LOUDRASSI (Salesforce) 20191023
Description:    Campaign  Trigger Helper Class
Test Class:     Test_CampaignTrigger
History
23/10/2019   Ahmed LOUDRASSI  Migrated  CampMgmtCampaignSessionTrigger, CampMgmtCampaignTrigger, CampMgmtCampaignTrigger2, CampMgmtCampaignSharingTrigger triggers. (#)
23/10/2019   Ahmed LOUDRASSI  Migrated Campaign Workflows. (#)
02/01/2020   Miguel           Bug fix setCampaignMemberStatus + Do not create sharing record if Owner  <> Approver (TFUS-000001389)
17/08/2021   Richard          Added details for new Campaign record type 'In-person & Virtual Event Campaign'
29/07/2022   Roberto Narbona  TFUS-000004576
13/11/2023   Houssam ADIB     TFUS-000006137 Is Converted field logic
15/01/2024	 Miguel Coimbra	  TFUS-000006400 - Session Campaign Record Type
01/02/2024	 Houssam ADIB	  TFUS-000006365 - Delete Child Session Campaigns if the parent campaign is deleted
25/04/2024	 Roberto		  TFUS-000006632 - Delete some campaign member status
----------------------------------------------------------------------------------------*/
public with sharing class CampaignTriggerHelper {
    /*------------------------------------------------------------
    Description:    Method migrated from  CampMgmtCampaignSessionTrigger

    Inputs:         @param newCampaignList
    ------------------------------------------------------------*/
    public  static void setCampaignSessionsDefaultValues(List<Campaign> newCampaignList)  {
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (Test.isRunningTest() || settings.CampMgmtCampaignSessionTriggerIsEnabled__c){
            RecordType rtDiCampaignSession = [SELECT Id FROM RecordType WHERE DeveloperName = 'DI_Campaign_Session' AND SObjectType = 'Campaign'];
            Set<ID> campaignIdList = new Set<ID>();
            for (Campaign session : newCampaignList) {
                if (session.RecordTypeId == rtDiCampaignSession.Id && session.Parent_Event__c != null)
                    campaignIdList.add(session.Parent_Event__c);
            }

            Map<ID, Campaign> campaignMap = new Map<ID, Campaign>(
                [SELECT Id, StartDate, EndDate, Strategy__c, Profession__c, Brand__c, Target_Group__c, Target_Type__c
                FROM Campaign
                WHERE Id IN :campaignIdList]);
            for (Campaign session : newCampaignList) {
                if (session.RecordTypeId == rtDiCampaignSession.Id) {
                    Campaign campaign = campaignMap.get(session.Parent_Event__c);
                    if (session.Session_Start_Date_Time__c == null && campaign.StartDate != null)
                        session.Session_Start_Date_Time__c = campaign.StartDate;
                    if (session.Session_End_Date_Time__c == null && campaign.EndDate != null)
                        session.Session_End_Date_Time__c = campaign.EndDate;
                    if (session.Strategy__c == null && campaign.Strategy__c != null)
                        session.Strategy__c = campaign.Strategy__c;
                    if (session.Profession__c == null && campaign.Profession__c != null)
                        session.Profession__c = campaign.Profession__c;
                    if (session.Brand__c == null && campaign.Brand__c != null)
                        session.Brand__c = campaign.Brand__c;
                    if (session.Target_Group__c == null && campaign.Target_Group__c != null)
                        session.Target_Group__c = campaign.Target_Group__c;
                    if (session.Target_Type__c == null && campaign.Target_Type__c != null)
                        session.Target_Type__c = campaign.Target_Type__c;
                }
            }
        }
    }
    /*------------------------------------------------------------
    Description:    Method migrated from  CampMgmtCampaignTrigger

    Inputs:         @param newCampaignMap
    ------------------------------------------------------------*/
    public  static void setCampaignMemberStatus(Map<Id, Campaign> newCampaignMap)  {
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (Test.isRunningTest() || settings.CampMgmtCampaignTriggerIsEnabled__c) {
            List<CampaignMemberStatus> statiTempInsert = new List<CampaignMemberStatus>();
            List<CampaignMemberStatus> statiDelete = new List<CampaignMemberStatus>();
            List<CampaignMemberStatus> statiInsert = new List<CampaignMemberStatus>();
            List<Id> campaignIds = new List<Id>();
            Map<String, String> includedRecordTypes = new Map<String, String> {'DI_Campaign' => 'DI_Campaign', 
                'NA_Activity_Request_Form' => 'NA_Activity_Request_Form', 
                'NATradeShow' => 'NATradeShow',
                'NA_Sponsorship' => 'NA_Sponsorship', 
                'DI_Mailing' => 'DI_Mailing', 
                'DNA_Campaign' => 'DNA_Campaign', 
                'Inside_Sales_Campaign' => 'Inside_Sales_Campaign',
                'Digital_Marketing_Campaign' => 'Digital_Marketing_Campaign',
                'CventCampaign' => 'CventCampaign',
                'InPersonEventCampaign' => 'InPersonEventCampaign',
				'CVENT_Session_Campaign' => 'CVENT_Session_Campaign'};
            Map<String, String> rtDiCampaignList = new Map<String, String> {'DI_Campaign' => 'DI_Campaign',
                'NA_Activity_Request_Form' => 'NA_Activity_Request_Form', 
                'NATradeShow' => 'NATradeShow', 'NA_Sponsorship' => 'NA_Sponsorship'};

            for(Campaign campaign : newCampaignMap.values()) {
                CampaignMemberStatus status;
                campaignIds.add(campaign.Id);
                if (GlobalUtils.ifrecordTypeInList('Campaign', rtDiCampaignList.values(), campaign.RecordTypeId)) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Suggested', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Invited', 4, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Confirmed', 5, false, true));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Waiting List', 6, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Cancelled', 7, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Did Not Attend', 8, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Campaign Was Cancelled', 9, false, false));
                } else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'DI_Mailing'))) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Suggested', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Sent', 4, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Responded', 5, false, true));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Completed', 6, false, true));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Campaign Was Cancelled', 7, false, false));
                } else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'DNA_Campaign'))) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'To Call', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'In Progress', 4, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Busy', 5, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'No Answer', 6, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Left Message', 7, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Call Back Later', 8, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Call Completed', 9, false, true));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Not Completed', 10, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Bounced', 11, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Sent', 12, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Failure', 13, false, false));
                } else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'Inside_Sales_Campaign'))) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'To Call', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'In Progress', 4, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Busy', 5, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'No Answer', 6, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Left Message', 7, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Call Back Later', 8, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Call Completed', 9, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Not Completed', 10, false, false));
                 	statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Bounced', 11, false, false));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Sent', 12, false, true));
					statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Failure', 13, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Canceled', 14, false, false));

                } else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'Digital_Marketing_Campaign'))) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Registered', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Responded', 4, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'To be Reconciled', 5, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Assigned to Sales', 6, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Sales Lead Cancelled', 7, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Opportunity Created', 8, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Opportunity Closed Won', 9, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Opportunity Closed Lost', 10, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Removed From Campaign', 11, false, false));
                }
                else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'InPersonEventCampaign'))) {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Invitation Pending', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Accepted', 4, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Declined', 5, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Visited', 6, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Waitlisted', 7, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Removed From Campaign', 8, false, false));
                }
                else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'CventCampaign')))
                {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Pending Approval', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'No Response', 4, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Accepted', 5, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Declined', 6, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Visited', 7, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Waitlisted', 8, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Cancelled', 9, false, true));
                }
				else if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'CVENT_Session_Campaign')))
                {
                    statiTempInsert.add(returnCampaignMemberStatus(campaign.Id,'Temporary', 99, true, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Added to Session Waitlist', 3, true, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Registered for Session', 4, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Canceled Registration for Session', 5, false, false));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Checked in to Session', 6, false, true));
                    statiInsert.add(returnCampaignMemberStatus(campaign.Id,'Submitted Session Feedback', 7, false, true));
                }
                //Cvent attendee statuses:
                // - No response
                // - Accepted
                // - Declined
                // - Visited
                // - Waitlisted
                // - Cancelled
                // - Pending Approval
                // - Denied Approval
                // - Invitation Not Sent
                // - Invitation Pending
                // - Nomination Pending
                // - Nomination Approved
                // - Nomination Denied
                // - Registration Pending
                
            if(GlobalUtils.ifrecordTypeInList('Campaign', includedRecordTypes.values(), campaign.RecordTypeId)){
            	statiDelete = [SELECT Id FROM CampaignMemberStatus WHERE CampaignId IN :campaignIds];
            }
                                
            }
                        
            try {
                if(!statiTempInsert.isEmpty()){
                     insert statiTempInsert;// Insert temporary default stati while we clear out the rest.
                }
                if(!statiDelete.isEmpty()){
                     delete statiDelete; // Delete all old stati that were there before the operation.
                }
                if(!statiInsert.isEmpty()){
                     insert statiInsert; // Insert all new stati that should be there after the operation.
                }
                if(!statiTempInsert.isEmpty()){
                     delete statiTempInsert; // Delete temporary default stati again.
                }
            } catch (DmlException e) {
                    DebugLog.addException(e, 'Method: CampaignTriggerHandler.setCampaignMemberStatus'); 
            }
        }
    }
    /*------------------------------------------------------------
    Description:    Method migrated from  CampMgmtCampaignTrigger2

    Inputs:         @param newCampaignMap, oldCampaignMap
    ------------------------------------------------------------*/
    public  static void deactivateCampaignSessions(Map<Id, Campaign> newCampaignMap, Map<Id, Campaign> oldCampaignMap)  {
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (Test.isRunningTest() || settings.CampMgmtCampaignTriggerIsEnabled__c) {
            Id[] campaignIdList = new Id[] {};
            for (Campaign campaign : newCampaignMap.values()) {
                Campaign oldCampaign = oldCampaignMap.get(campaign.Id);
                if (campaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'DI_Campaign')) 
                    && !campaign.IsActive && oldCampaign.IsActive)
                    campaignIdList.add(campaign.Id);
            }

            Campaign[] sessionList = [SELECT Id, IsActive FROM Campaign
                                                            WHERE RecordTypeId = :GlobalUtils.getRecordTypeId('Campaign', 'DI_Campaign_Session')
                                                            AND Parent_Event__c IN :campaignIdList];

            for (Campaign session : sessionList)
                session.IsActive = false;

            try {
                if(!sessionList.isEmpty()){
                     update sessionList;
                }
            } catch (DmlException e) {
                    DebugLog.addException(e, 'deactivateCampaignSessions'); 
            }
        }
    }
    /*------------------------------------------------------------
    Description:    Method migrated from  CampMgmtCampaignSharingTrigger

    Inputs:         @param newCampaignMap, oldCampaignMap
    ------------------------------------------------------------*/
    public  static void campaignSharing(Map<Id, Campaign> newCampaignMap, Map<Id, Campaign> oldCampaignMap) {
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');
        if (Test.isRunningTest() || settings.CampMgmtCampaignSharingTriggerIsEnabled__c){
            List<CampaignShare> sharesUpsert = new List<CampaignShare>();
            List<CampaignShare> sharesDelete = new List<CampaignShare>();
            List<Id> campaignsIds =  new List<Id>();

            for (Campaign newCampaign : newCampaignMap.values()) {
                if (newCampaign.RecordTypeId.equals(GlobalUtils.getRecordTypeId('Campaign', 'DI_Campaign'))) {
                    Boolean approverHasChanged = false;
                    if (Trigger.isUpdate) {
                        Campaign oldCampaign = newCampaignMap.get(newCampaign.Id);
                        if (oldCampaign != null && oldCampaign.Campaign_Approver__c != newCampaign.Campaign_Approver__c)
                            approverHasChanged = true;

                        if (approverHasChanged) {
                            campaignsIds.add(oldCampaign.Id);
                        }
                    }

                    if (Trigger.isInsert || approverHasChanged) {
                        if (newCampaign.Campaign_Approver__c != null && (newCampaign.Campaign_Approver__c <> newCampaign.OwnerId)) {
                            CampaignShare share = new CampaignShare();
                            share.CampaignId = newCampaign.Id;
                            share.UserOrGroupId = newCampaign.Campaign_Approver__c;
                            share.CampaignAccessLevel = 'Edit';
                            sharesUpsert.add(share);
                        }
                    }
                }
            }
            List<CampaignShare> oldShareList = [SELECT Id FROM CampaignShare WHERE CampaignId IN :campaignsIds AND RowCause = :Schema.CampaignShare.RowCause.Manual];
            for (CampaignShare oldShare : oldShareList) {
                if(oldShare.UserOrGroupId == oldCampaignMap.get(oldShare.Id).Campaign_Approver__c){
                         sharesDelete.add(oldShare);
                }
            }
            try {
                if(!sharesDelete.isEmpty()){
                     delete sharesDelete;
                }
                if(!sharesUpsert.isEmpty()){
                    upsert sharesUpsert;
               }
            } catch (DmlException e) {
                    DebugLog.addException(e, 'campaignSharing'); 
            }
        }
    }
    private static CampaignMemberStatus returnCampaignMemberStatus(ID campaignId, String label, Integer sortOrder, Boolean isDefault, Boolean hasResponded) {
        return new CampaignMemberStatus(CampaignId = campaignId,
                                        Label = label,
                                        SortOrder = sortOrder,
                                        IsDefault = isDefault,
                                        HasResponded = hasResponded);
    }

    /* keeping country fields aligned before update and before insert*/

    public static void setAlignmentOnCountryFields(List<Campaign> newCampaignList,Map<Id, Campaign> newCampaignMap, Map<Id, Campaign> oldCampaignMap){
        Map<String, CountryCodeMap__mdt> countryNameMapping = new Map<String, CountryCodeMap__mdt>();
        Map<String, CountryCodeMap__mdt> countryCodeMapping = new Map<String, CountryCodeMap__mdt>();
        List<CountryCodeMap__mdt> countryList = [SELECT Campaign_Country__c, Country_Code_3_digit__c FROM CountryCodeMap__mdt];
        for (CountryCodeMap__mdt country : countryList) {
            countryNameMapping.put(country.Campaign_Country__c, country);
            countryCodeMapping.put(country.Country_Code_3_digit__c, country);
        }
        if(newCampaignMap == null){
            /*when it is before insert*/
            for (Campaign newCampaign : newCampaignList) {
            if (
                String.isBlank(newCampaign.Campaign_Country__c)
                && 
                String.isBlank(newCampaign.Country_Code_3_digit__c)
            ) {
                continue;
            }
            if (String.isNotBlank(newCampaign.Campaign_Country__c)) {
                // TODO: Update the other country field with the new value
                    newCampaign.Country_Code_3_digit__c = countryNameMapping.get(newCampaign.Campaign_Country__c).Country_Code_3_digit__c;
            } else if (String.isNotBlank(newCampaign.Country_Code_3_digit__c)) {
                // TODO: Update the other country field with the new value
                newCampaign.Campaign_Country__c = countryCodeMapping.get(newCampaign.Country_Code_3_digit__c).Campaign_Country__c;
            }
        }
        } else {
            /*when it is before update*/
            for (Campaign newCampaign : newCampaignMap.values()) {
            if (
                newCampaign.Campaign_Country__c == oldCampaignMap.get(newCampaign.Id).Campaign_Country__c
                && newCampaign.Country_Code_3_digit__c == oldCampaignMap.get(newCampaign.Id).Country_Code_3_digit__c
            ) {
                continue;
            }
            if (newCampaign.Campaign_Country__c != oldCampaignMap.get(newCampaign.Id).Campaign_Country__c) {
                // TODO: Update the other country field with the new value
                if (String.isBlank(newCampaign.Campaign_Country__c)) {
                    newCampaign.Country_Code_3_digit__c = null;
                } else {
                    newCampaign.Country_Code_3_digit__c = countryNameMapping.get(newCampaign.Campaign_Country__c).Country_Code_3_digit__c;
                }
            } else if (newCampaign.Country_Code_3_digit__c != oldCampaignMap.get(newCampaign.Id).Country_Code_3_digit__c) {
                // TODO: Update the other country field with the new value
                if (String.isBlank(newCampaign.Country_Code_3_digit__c)) {
                    newCampaign.Campaign_Country__c = null;
                } else {
                    newCampaign.Campaign_Country__c = countryCodeMapping.get(newCampaign.Country_Code_3_digit__c).Campaign_Country__c;
                }
            }
        }
        }
    }

    //set default owner
    public static void ownerAssignment(List<Campaign> newCampaignList){
        String eloquaIntegrationUser = 'Eloqua Integration';
        String currentUser = UserInfo.getName();
        String eloquaIntegrationUserId = UserInfo.getName() == eloquaIntegrationUser ? UserInfo.getUserId() : null;
        if(currentUser == eloquaIntegrationUser) {

            
            Set<String> countriesSet2Digit = new Set<String>();
            Map<String, CountryCodeMap__mdt> countryCode3DigitKeyMap = new Map<String, CountryCodeMap__mdt>();
            List<CountryCodeMap__mdt> countryCodeMetadta = [SELECT Country_Code_2_digit__c, Country_Code_3_digit__c FROM CountryCodeMap__mdt];
            for (CountryCodeMap__mdt country : countryCodeMetadta) {
                countryCode3DigitKeyMap.put(country.Country_Code_3_digit__c, country);
            }
            for(Campaign camp : newCampaignList){
                if(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c) != null)
                {
                    countriesSet2Digit.add(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c).Country_Code_2_digit__c);
                }
            }

            if(!countriesSet2Digit.isEmpty())
            {
                LeadOpportunitySetting__mdt[] oppSettings = GlobalUtils.getOpportunitySettings(countriesSet2Digit);

                Map<String, LeadOpportunitySetting__mdt> settingsMap = GlobalUtils.getSettingsMapWithNumberSignKey(oppSettings);

                String digitalId = GlobalUtils.getRecordTypeId('Campaign', 'Digital_Marketing_Campaign');

                for(Campaign camp : newCampaignList)
                {
                    if(camp.recordTypeId == digitalId
                            && currentUser == eloquaIntegrationUser && ((System.Trigger.isInsert == true ) || (camp.OwnerId == eloquaIntegrationUserId && System.Trigger.isInsert == false ))){
                        camp.OwnerId = settingsMap.get(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c).Country_Code_2_digit__c+'#'+camp.Brands__c) != null && settingsMap.get(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c).Country_Code_2_digit__c+'#'+camp.Brands__c).DefaultCampaignOwner__c != null ? settingsMap.get(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c).Country_Code_2_digit__c+'#'+camp.Brands__c).DefaultCampaignOwner__c : settingsMap.get(countryCode3DigitKeyMap.get(camp.Country_Code_3_digit__c).Country_Code_2_digit__c+'#DefaultCountryOwner').DefaultCampaignOwner__c;
                    }
                }
            }
        }
    }

    /**
     * Process new Cvent Session campaigns inserted
     * @author hadib@salesforce.com | 05-07-2023
     * @param newCampaigns New Campaigns
     */
    public static void processCventSessionCampaign(List<Campaign> newCampaigns)
    {
        // Assort CVENT Session Campaigns in a map
        Map<String,List<Campaign>> sessionCampaignsByEventStub = new Map<String, List<Campaign>>();
        String eventStub;
        for (Campaign campaign : newCampaigns)
        {
            if(campaign.CventEvents__EventStub__c != null) // Main filter to detect session campaigns
            {
                eventStub = campaign.CventEvents__EventStub__c;
                if(sessionCampaignsByEventStub.containsKey(eventStub))
                {
                    sessionCampaignsByEventStub.get(eventStub).add(campaign);
                }
                else
                {
                    sessionCampaignsByEventStub.put(eventStub, new List<Campaign>{campaign});
                }
            }
        }

        // If we find CVENT Session Campaigns campaign we populate their parent campaign
        if (!sessionCampaignsByEventStub.isEmpty())
        {
            populateChildSessionCampaignFields(sessionCampaignsByEventStub);
        }
    }

    /**
     * Populates the parent field for the session campaign records newly inserted
     * @author hadib@salesforce.com | 05-07-2023
     * @param sessionCampaignsByEventStub Session Campaign Map
     */
    public static void populateChildSessionCampaignFields(Map<String, List<Campaign>> sessionCampaignsByEventStub)
    {
        Id sessionCampaignRTId = GlobalUtils.getRecordTypeId('Campaign', 'CVENT_Session_Campaign');
        Id memberRecordTypeId  = GlobalUtils.getRecordTypeId('CampaignMember', 'CVENT_Session_Campaign_Member');

        Map<String, Id> mapEventStubToParentCampaign = new Map<String, Id>();

        CventEvents__EventCampaignEntry__c[] entries = [
                SELECT Id, CventEvents__Campaign__c, CventEvents__Event__r.CventEvents__pkg_EventStub__c
                FROM CventEvents__EventCampaignEntry__c
                WHERE CventEvents__Event__r.CventEvents__pkg_EventStub__c IN :sessionCampaignsByEventStub.keySet()
        ];

        for (CventEvents__EventCampaignEntry__c entry : entries) {
            mapEventStubToParentCampaign.put(entry.CventEvents__Event__r.CventEvents__pkg_EventStub__c, entry.CventEvents__Campaign__c);
        }

        for (String eventStubValue : sessionCampaignsByEventStub.keySet()) {
            for (Campaign campaign : sessionCampaignsByEventStub.get(eventStubValue)) {
                campaign.Parent_Event__c = mapEventStubToParentCampaign.get(eventStubValue);
                campaign.RecordTypeId = sessionCampaignRTId;
                campaign.CampaignMemberRecordTypeId = memberRecordTypeId;
            }
        }
    }

    /**
     * Marks the Parent CVENT event record as non converted if the related campaign is being deleted
     * @author hadib@salesforce.com | 01-11-2023
     * @param oldCampaignList List of old values of the deleted campaign records
     */
    public static void tickCventParentEventAsNotConverted(List<Campaign> oldCampaignList)
    {
        Set<Id> deletedCampaignIds = new Set<Id>();

        for (Campaign deletedCampaign : oldCampaignList) {
            deletedCampaignIds.add(deletedCampaign.Id);
        }

        // Call the method to unconvert events related to the deleted campaigns
        List<CventEvents__EventCampaignEntry__c> deletedEntries =
            [SELECT Id, CventEvents__Event__c
            FROM CventEvents__EventCampaignEntry__c
            WHERE CventEvents__Campaign__c IN :deletedCampaignIds];

        CventManagement.tickParentEventAs(deletedEntries,false);
    }

    /**
     * Deletes Child CVENT Session Campaigns related to a parent Cvent Campaign.
     * @author hadib@salesforce.com | 31-01-2024
     * @param oldCampaignList List of the deleted campaign records
     */
    public static void deleteChildSessionCampaigns(List<Campaign> oldCampaignList)
    {
        Id CventCampaignRTId = GlobalUtils.getRecordTypeId('Campaign', 'CventCampaign');
        Id sessionCampaignRTId = GlobalUtils.getRecordTypeId('Campaign', 'CVENT_Session_Campaign');

        Set<Id> cventCampaignsDeleted = new Set<Id>();

        for (Campaign deletedCampaign : oldCampaignList)
        {
            if(deletedCampaign.RecordTypeId == CventCampaignRTId) // Main Filter to find Cvent Campaigns
            {
                cventCampaignsDeleted.add(deletedCampaign.Id);
            }
        }

        List<Campaign> childCventSessionCampaigns = [SELECT Id FROM Campaign WHERE Parent_Event__c IN :cventCampaignsDeleted AND RecordTypeId = :sessionCampaignRTId];

        try{
            delete ChildCventSessionCampaigns;
        }catch(Exception exc) {
            DebugLog.addException(exc, 'Unable to delete Child Session Campaigns');
        }
    }


}