/*-------------------------------------------------------------------------------------------------------
Author:         Ahmed LOUDRASSI (Salesforce) 20191022
Description:    Campaign Member Trigger Helper Class

History:
2019-10-22      Ahmed   LOUDRASSI   Migrated CampMgmtCampaignMemberTrigger and CampMgmtCampaignMemberTrigger2 triggers. (#)
2019-10-22      Ahmed   LOUDRASSI   Migrated CampaignMember Workflows. (#)
2020-12-22      Richard Trum	    Created method createOpportunities for creating and assigning Opportunities based on Eloqua campaigns
2021-02-04      Richard Trum	    Updated method createOpportunities for creating and assigning Sales Leads based on Eloqua campaigns
2021-03-18      Roberto Narbona     Updated to send opp ID back into Sales Lead__c field for Campaign Members and have physical relationship. Story TFUS-000002828
2021-07-20      Kevin   Ruibin Do   Updated method createOpportunities to also populate Opportunity.ContactId so that an OpportunityContactRole will be created
2021-12-08      Roberto Narbona     Updated method createOpportunities to fix account relationship when convertion is from standard lead
2022-05-05      Richard Trum	    Updated method createOpportunities to assign Sales Leads based on the related dealer's account (TFUS-4232)
2022-06-02      Miguel  Coimbra     Updated method updateCampaignMembersInfo to assign the CampaignMemberOwner__c field to the Campaign Owner.
2007-20-22      Roberto Narbona     TFUS-000004576
2022-08-25      Miguel  Coimbra     TFUS-000004715
2022-12-05      Roberto Narbona     IDS logic introduced.
2023-03-01      Houssam ADIB        Refactored The Trigger
2023-11-22      Richard Trum        Removed the method setInternationSpeaker (TFUS-6215)
----------------------------------------------------------------------------------------*/
public class CampaignMemberTriggerHelper {

    private     static final String                 SOBJECT_CAMPAIGN        = 'Campaign';
    private     static final Map<String, String>    CAMPAIGN_RECORD_TYPES   = new Map<String, String> {'DI_Campaign' => 'DI_Campaign'};

    public      static final String                 ELOQUA_INTEGRATION_USER = 'Eloqua Integration';
    public      static final String                 IDS_INTEGRATION_USER    = 'IDS Integration';

    /**
     * Method migrated from CampMgmtCampaignMemberTrigger
     * Update Campaign members with their respective accounts. We are getting that info from related ContactId
     *
     * @param newCampaignMembers New Campaign Members
     */
    public static void updateCampaignMemberAccount(List<CampaignMember> newCampaignMembers)
    {
        // Don't run unless configured to do so.
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');

        if (Test.isRunningTest() || settings.CampMgmtCampaignMemberTriggerIsEnabled__c)
        {
            Set<Id> contactIdList = getContactIds(newCampaignMembers);
            setAccountOnCampaignMembers(contactIdList, newCampaignMembers);
        }
    }

    /**
     * Sets the custom account field from the contact or the account if its a person account member
     * @param contactIdList List of campaign members contact ids
     * @param newCampaignMembers List of new campaign members inserted
     */
    public static void setAccountOnCampaignMembers(Set<Id> contactIdList, List<CampaignMember> newCampaignMembers)
    {
        CampaignMember member;
        Map<Id, Contact> contactMap = new Map<Id, Contact>([SELECT Id, AccountId FROM Contact WHERE Id IN :contactIdList]);

        for (Integer i = 0, j = newCampaignMembers.size(); i < j; i++)
        {
            member = newCampaignMembers[i];

            String accountId = getPersonAccountId(member);

            // 1- Set Account for (Contact) Campaign Members
            if (member.ContactId != null)
            {

                Contact contact = contactMap.get(member.ContactId);
                if (contact?.AccountId != null) {
                    member.Account__c = contact.AccountId;
                }
            }
            // 2- Set Account for (Person Account) Campaign Members
            else if(String.isNotBlank(accountId))
            {
                member.Account__c = accountId;
            }
        }
    }

    /**
     * The sole method to retrieve the AccountId field is by serializing the object. Attempting to access the field value through the usual means results in an error,
     * specifically: "Variable does not exist: AccountId." This issue persists even though the class is running in system mode.
     * @param member New Campaign Member
     *
     * @return String - Account Id
     */
    public static String getPersonAccountId(CampaignMember member)
    {
        String memberJson = JSON.serialize(member);
        Map<String, Object> memberMap = (Map<String, Object>) JSON.deserializeUntyped(memberJson);
        String accountId = (String) memberMap.get('AccountId');

        return accountId;
    }

    /**
     * Extracts the list of contact ids of a list of campaign members
     * @param newCampaignMembers List of new Campaign Members
     *
     * @return Set<Id> - Set of members contact Ids
     */
    public static Set<Id> getContactIds(List<CampaignMember> newCampaignMembers)
    {
        Set<Id> contactIdList = new Set<Id>();
        CampaignMember member;
        for (Integer i = 0, j = newCampaignMembers.size(); i < j; i++) {
            member = newCampaignMembers[i];
            if (member.ContactId != null) {
                contactIdList.add(member.ContactId);
            }
        }
        return contactIdList;
    }

    /**
     * Method migrated from  Workflows
     * WF-CAMM-01: Set Account Strategy and W/L status' (Created on 27/05/2014)
     * WF-CAMM-02: Set DI Campaign Member Info Based On Campaign' (Created on 23/06/2013)
     *
     * @param newCampaignMembers List of new campaign members
     */
    public static void updateCampaignMembersInfo(List<CampaignMember> newCampaignMembers)
    {
        List<Id> campaignIds = new List<Id> ();
        CampaignMember member;

        for(Integer i=0, j= newCampaignMembers.size(); i < j; i++)
        {
            member = newCampaignMembers[i];
            campaignIds.add(member.CampaignId);
        }

        if (!campaignIds.isEmpty())
        {
            Map<Id, Campaign> campaigns = new Map<Id, Campaign> ([SELECT Id, RecordTypeId, OwnerId FROM Campaign WHERE Id IN :campaignIds]);

            Id DICampaignRTId = GlobalUtils.getRecordTypeId(SOBJECT_CAMPAIGN, CAMPAIGN_RECORD_TYPES.get('DI_Campaign'));

            for(Integer i=0, j= newCampaignMembers.size(); i < j; i++)
            {
                member = newCampaignMembers[i];
                // TFUS-000004342: Fill in the Campaign Owner if needed TFUS-000004715
                if (member.CampaignMemberOwner__c == null) {
                    member.CampaignMemberOwner__c = campaigns.get(member.CampaignId).OwnerId ;
                }

                Boolean isDICampaign = campaigns.get(member.CampaignId).RecordTypeId == DICampaignRTId;

                // Set Account Strategy and W/L status
                if (isDICampaign) {
                    member.Account_Strategy_ATL_Abut__c = member.Current_Account_Strategy_ATL_Abut__c;
                    member.Account_Strategy_ATL_ISUS__c = member.Current_Account_Strategy_ATL_ISUS__c;
                    member.Account_Strategy_Implants__c = member.Current_Account_Strategy_Implants__c;
                    member.Account_Strategy_SIMPLANT__c = member.Current_Account_Strategy_SIMPLANT__c;
                    member.ATL_Abut_Won_Lost_Status__c  = member.Current_Account_Strategy_ATL_Abut__c;
                    member.ATL_ISUS_Won_Lost_Status__c  = member.Current_Account_Strategy_ATL_ISUS__c;
                    member.Implants_Won_Lost_Status__c  = member.Current_Implants_Won_Lost_Status__c;
                    member.Simplant_Won_Lost_Status__c  = member.Current_WonLostStatus_Simplant__c;

                    // Set DI Campaign Member Info Based On Campaign
                    if ('Participant'.equals(member.Type__c)) {
                        if ('Single Room'.equals(member.of_Guests_including_participant__c)) {
                            member.Rate_per_night__c = member.Campaign.Single_Room_Rate_Per_Night__c;
                        }
                        else if ('Double Room'.equals(member.of_Guests_including_participant__c)) {
                            member.Rate_per_night__c = member.Campaign.Double_Room_Rate_Per_Night__c;
                        }
                        else {
                            member.Rate_per_night__c = null;
                        }

                        member.Course_Fee__c = member.Campaign.Standard_Participation_Fee__c;
                        member.VAT__c = member.Campaign.VAT__c;
                    }
                }
            }
        }
    }

    /**
     * Retrieve List of countries codes from the custom metadata
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @return List<CountryCodeMap__mdt> - List of countries mdt
     */
    public static List<CountryCodeMap__mdt> retrieveCountriesCodes()
    {
        return [SELECT DeveloperName, Country_Code_2_digit__c, Country_Code_3_digit__c, Campaign_Country__c FROM CountryCodeMap__mdt];
    }

    /**
     * Assigns owners to leads based on campaign member data with the help of a future method
     * @author  Roberto | 01-01-2021 | (Campaign Refactoring)
     *          Houssam | 01-03-2023 | Made future (Campaign Refactoring)
     *
     * @param newCampaignMemberList New campaign members
     */
    public static void leadOwnerAssignment(List<CampaignMember> newCampaignMemberList)
    {
        String currentUser      = UserInfo.getName();

        Boolean isEloquaOrIDSIntegrationUser = (currentUser == ELOQUA_INTEGRATION_USER || currentUser == IDS_INTEGRATION_USER);

        if(isEloquaOrIDSIntegrationUser)
        {
            // Extract Ids and continue in Async
            Map<Id, CampaignMember> campaignMemberMap = new Map<Id, CampaignMember>(newCampaignMemberList);
            Set<Id> campaignMembersIds = new Set<Id>(campaignMemberMap.keySet());
            futureAssignLeadOwner(campaignMembersIds);
        }
    }

    /**
     * Future method that assigns owners to leads based on campaign member data and
     * CountryCodeMap__mdt+LeadOpportunitySetting__mdt custom settings
     * @author  Roberto | 01-01-2021 | (Campaign Refactoring)
     *          Houssam | 01-03-2023 | Made future (Campaign Refactoring)
     * @param newMembersIds     Ids of the new members (Future methods only accepts primitive variables)
     */
    @Future
    public static void futureAssignLeadOwner(Set<Id> newMembersIds)
    {
        List<CampaignMember> newCampaignMemberList = [  SELECT Id, RecordTypeId, LeadId, CampaignId, Country_Code_3_digit__c FROM CampaignMember
                                                        WHERE Id IN :newMembersIds];
        Id IDSUserId;
        List<User> userIDS = [ SELECT Id FROM User WHERE Name= :IDS_INTEGRATION_USER LIMIT 1];
        if(!userIDS.isEmpty())
        {
            IDSUserId = userIDS[0].Id;
        }

        if (!newCampaignMemberList.isEmpty())
        {
            String digitalId = GlobalUtils.getRecordTypeId('CampaignMember', 'Digital_Marketing_Campaign_Member');
            String recordTypeIDS = GlobalUtils.getRecordTypeId('CampaignMember', 'InPersonEventCampaignMember');

            Map<String, CountryCodeMap__mdt> countryCode3DigitKeyMap = getCountryCode3DigitKeyMap();

            Set<String> leadIds = new Set<String>();
            Set<String> campsIds = new Set<String>();
            Set<String> countriesSet2Digit = new Set<String>();

            CampaignMember member;
            for(Integer i=0, j= newCampaignMemberList.size(); i < j; i++)
            {
                member = newCampaignMemberList[i];
                Boolean isDigitalIdOrIDS = (member.RecordTypeId == digitalId || member.RecordTypeId == recordTypeIDS);

                if (member.LeadId != null && isDigitalIdOrIDS)
                {
                    leadIds.add(member.LeadId);
                    campsIds.add(member.CampaignId);
                    if(countryCode3DigitKeyMap.containsKey(member.Country_Code_3_digit__c))
                    {
                        countriesSet2Digit.add(countryCode3DigitKeyMap.get(member.Country_Code_3_digit__c).Country_Code_2_digit__c);
                    }
                }
            }

            Map<Id, Lead> leadsData = new Map<Id, Lead> ([
                    SELECT Id, OwnerId, Country_Code_3_digit__c
                    FROM Lead
                    WHERE Id IN :leadIds
            ]);

            if (!leadsData.isEmpty())
            {
                Map<Id, Campaign> campaignsData = new Map<Id, Campaign> ([
                        SELECT Id, Brands__c, Country_Code_3_digit__c
                        FROM Campaign
                        WHERE Id IN :campsIds
                ]);

                Map<String, LeadOpportunitySetting__mdt> settingsMap = GlobalUtils.getSettingsMapNumberSignKey(countriesSet2Digit);

                String eloquaIntegrationUserId = UserInfo.getUserId();
                List<Lead> leadsToUpdate = new List<Lead>();

                for(Integer i=0, j= newCampaignMemberList.size(); i < j; i++)
                {
                    member = newCampaignMemberList[i];
                    Boolean isDigitalIdOrIDS = (member.RecordTypeId == digitalId || member.RecordTypeId == recordTypeIDS);

                    Id ownerId;
                    if (leadsData.containsKey(member.LeadId))
                    {
                        ownerId = leadsData.get(member.LeadId).OwnerId;
                    }

                    if (member.LeadId != null
                            && isDigitalIdOrIDS
                            && (ownerId == eloquaIntegrationUserId || ownerId == IDSUserId)) {
                        // Initiate variables we will need to set the owner:
                        String campaignBrand = campaignsData.get(member.CampaignId).Brands__c;
                        Lead campaignLead = leadsData.get(member.LeadId);
                        CountryCodeMap__mdt campaignLeadCountry = countryCode3DigitKeyMap.get(campaignLead.Country_Code_3_digit__c);

                        if(campaignLeadCountry != null)
                        {
                            String countryKey = campaignLeadCountry.Country_Code_2_digit__c + '#' + campaignBrand;

                            LeadOpportunitySetting__mdt setting;
                            if(settingsMap.containsKey(countryKey))
                            {
                                setting = settingsMap.get(campaignLeadCountry.Country_Code_2_digit__c + '#' + campaignBrand);
                            }

                            // Create New Lead with same id to update the existing one
                            Lead leadToAdd = new Lead();
                            leadToAdd.Id = member.LeadId;
                            if (setting?.DefaultLeadOwner__c != null)
                            {
                                leadToAdd.OwnerId = setting.DefaultLeadOwner__c;
                                leadsToUpdate.add(leadToAdd);
                            }
                            else
                            {
                                String leadOwnerId = (settingsMap.get(campaignLeadCountry.Country_Code_2_digit__c + '#DefaultCountryOwner')?.DefaultLeadOwner__c);
                                if(leadOwnerId != null)
                                {
                                    leadToAdd.OwnerId = leadOwnerId;
                                    leadsToUpdate.add(leadToAdd);
                                }
                            }
                        }
                    }
                }

                if(!leadsToUpdate.isEmpty())
                {
                    updateLeads(leadsToUpdate);
                }
            }
        }
    }

    /**
     * Returns Countries Codes in 3 Digits
     * @author Roberto
     *
     * @return Map<String, CountryCodeMap__mdt> - Countries Codes in 3 Digits
     */
    public static Map<String, CountryCodeMap__mdt> getCountryCode3DigitKeyMap()
    {
        Map<String, CountryCodeMap__mdt> countryCode3DigitKeyMap = new Map<String, CountryCodeMap__mdt>();

        List<CountryCodeMap__mdt> countryCodeMetadata = retrieveCountriesCodes();

        CountryCodeMap__mdt country;
        for(Integer i=0, j= countryCodeMetadata.size(); i < j; i++)
        {
            country = countryCodeMetadata[i];
            countryCode3DigitKeyMap.put(country.Country_Code_3_digit__c, country);
        }
        return countryCode3DigitKeyMap;
    }

    /**
     * Updates the list of leads
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @param leadsToUpdate Leads to update
     */
    public static void updateLeads(List<Lead> leadsToUpdate)
    {
        if (!leadsToUpdate.isEmpty()) {
            try {
                update leadsToUpdate;
            }
            catch (Exception e) {
                DebugLog.addException(e, 'CampaignMemberTriggerHelper.updateLeads');
            }
        }
    }

    /**
     * Execute the conversion to Sales Leads or Opportunities in a queryable
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param newMembers    The Map of the members with new values
     * @param oldMembers    The Map of the members with old values
     * @param overrideHasResponded      Override has responded value
     */
    public static void convertMemberToSalesLeadOrOpportunity(List<CampaignMember> newMembers, Map<Id, CampaignMember> oldMembers, Boolean overrideHasResponded)
    {
        OpportunityInsertAsynch.enqueueJob(newMembers,oldMembers,overrideHasResponded);
    }

    /**
     * Wrapper class Linking Opportunities with Team Members and CampaignMemberIdUpdate
     */
    public class oppWrapper {
        public Opportunity opp;
        public List<OpportunityTeamMember> oppMembers;
        public String CampaignMemberIdUpdate;
    }
}