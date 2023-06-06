/*-------------------------------------------------------------------------------------------------------
Author:         Ahmed LOUDRASSI (Salesforce) 20191022
Description:    Opportunity Insert Asynch Class
History

2021-03-18  Roberto Narbona		Updated to send opp ID back into Opportunity__c field for Campaign Members and have physical relationship. Story TFUS-000002828
2021-03-18  Roberto Narbona		Added DebugLog line if insert fails. TFUS-000003578
2023-03-01  Houssam ADIB        Migrated the create opportunity method from the trigger (Campaign Refactoring)
2023-05-03  Richard Trum        Commented out usage of Opportunity Dealer record type (TFUS-5578)
----------------------------------------------------------------------------------------*/
public class OpportunityInsertAsynch implements Queueable {

    private List<CampaignMember>    newCampaignMembers;
    private Map<Id, CampaignMember> oldCampaignMemberMap;
    private Boolean                 overrideHasResponded;

    /**
     * @param newMembers        New Members
     * @param oldMap            Old Members Values
     * @param overrideInsert    Override the insert value
     */
    public OpportunityInsertAsynch(List<CampaignMember> newMembers, Map<Id, CampaignMember> oldMap, Boolean overrideInsert)
    {
        newCampaignMembers      = newMembers;
        oldCampaignMemberMap    = oldMap;
        overrideHasResponded    = overrideInsert;
    }

    /**
     * @param context Queueable Context
     */
    public void execute(QueueableContext context)
    {
        createOpportunities(newCampaignMembers,oldCampaignMemberMap,overrideHasResponded);
    }

    /**
     * Enqueues The class and avoids governor limits
     * @param newMembers        New Members
     * @param oldMap            Old Members Values
     * @param overrideInsert    Override the insert value
     */
    public static void enqueueJob(List<CampaignMember> newMembers, Map<Id, CampaignMember> oldMap, Boolean overrideInsert)
    {
        Boolean isAlreadyInQueue = ([
                SELECT COUNT()
                FROM AsyncApexJob
                WHERE ApexClass.Name = 'OpportunityInsertAsynch'
                AND Status IN ('Queued', 'Processing')
        ] > 0);

        if ((Limits.getLimitQueueableJobs() - Limits.getQueueableJobs() > 0)) {
            if(!System.isBatch())
            {
                System.enqueueJob(new OpportunityInsertAsynch(newMembers, oldMap, overrideInsert));
            }
            else if(!isAlreadyInQueue)
            {
                System.enqueueJob(new OpportunityInsertAsynch(newMembers, oldMap, overrideInsert));
            }
        }
        else if(!System.isBatch())
        {
            Integer delayInMinutes = 9;
            System.enqueueJob(new OpportunityInsertAsynch(newMembers, oldMap, overrideInsert), delayInMinutes);
        }
    }

    /*------------------------------------------------------------
    Description:    Method for creating Opportunities based on Campaign Member related to Eloqua Campaigns (TFUS-[...]2201)
    Inputs:         @param newCampaignMembers
    ------------------------------------------------------------*/
    public void createOpportunities(List<CampaignMember> newCampaignMembers, Map<Id, CampaignMember> oldCampaignMemberMap, Boolean overrideHasResponded)
    {
        BatchSettings__c settings = BatchSettings__c.getInstance('Default');

        if (Test.isRunningTest() || settings.CampMgmtCampaignMemberTriggerIsEnabled__c)
        {
            List<RecordType> oppRT =        [SELECT Id, Name FROM RecordType WHERE SobjectType='Opportunity' AND DeveloperName='Lightning_Pipeline_Opportunity'];
            //List<RecordType> oppDealerRT =  [SELECT Id, Name FROM RecordType WHERE SobjectType='Opportunity' AND DeveloperName='Dealer_Community'];

            Set<Id> campaignIds     = new Set<Id>();
            Set<Id> contactIds      = new Set<Id>();
            Set<Id> dealerIds       = new Set<Id>();

            Set<Id> stdLeadIds      = new Set<Id>();

            populateIdsFromMembers( newCampaignMembers,                 // Input
                    campaignIds, contactIds, dealerIds, stdLeadIds);    // Output

            //Get all Campaigns related to the included Campaign Members
            Map<Id, Campaign> campaigns = new Map<Id, Campaign>(
            [   SELECT Id, RecordTypeId, Source_Origin__c, OwnerId, Brands__c, Convert_To__c, RecordType.DeveloperName,
                    AssignRepFromDealer__c, Include_in_Dealer_Community__c, Notify_Dealer_Sales_Rep_by_Email__c
            FROM Campaign
            WHERE Id IN :campaignIds]
            );

            Boolean categoryOppDependencyRuleCheck          = false;
            Boolean categorySalesLeadDependencyRuleCheck    = false;
            Boolean recordTypeCheck                         = false;

            for(Campaign campaign : campaigns.values())
            {
                if(campaign.RecordType.DeveloperName == 'Digital_Marketing_Campaign' || campaign.RecordType.DeveloperName == 'InPersonEventCampaign')
                {
                    recordTypeCheck = true;
                    categoryOppDependencyRuleCheck          = (campaign.Convert_To__c == 'Opportunity');
                    categorySalesLeadDependencyRuleCheck    = (campaign.Convert_To__c == 'Sales Lead');
                }
            }

            if(recordTypeCheck == true)
            {
                // Getting dependency rules if needed
                Map<String, List<String>> dependentPicklistSalesLeadCountryCategoryMap
                        = getPickListValues(categorySalesLeadDependencyRuleCheck,Field_Sales_Project_Members__c.Category__c);

                Map<String,List<String>> dependentPicklistSalesLeadCategoryBrandMap
                        = getPickListValues(categorySalesLeadDependencyRuleCheck,Field_Sales_Project_Members__c.Brand__c);

                Map<String,List<String>> dependentPicklistOpportunityCountryCategoryMap
                        = getPickListValues(categoryOppDependencyRuleCheck,Opportunity.NA_Category__c);

                Map<String,List<String>> dependentPicklistOpportunityCategoryBrandMap
                        = getPickListValues(categoryOppDependencyRuleCheck,Opportunity.NA_Brand__c);

                Map<Id, Contact> contacts   = getContacts(contactIds);
                Set<Id> accountIds          = getAccountIds(contacts);

                //Get all Dealers related to the included Campaign Members
                Map<Id, Account>                            dealers                 = getDealerAccounts(dealerIds);
                Map<Id, Id>                                 externalDealerUserMap   = getExternalDealerUserMap(dealers);

                Map<Id, List<UserTerritory2Association>>    dealerUserMap           = getAccountsUserMap(dealerIds);

                Map<Id, List<UserTerritory2Association>>    customerUserMap         = getAccountsUserMap(accountIds);

                //Get all Customers Accounts countries
                Map<Id, Account>                            customers               = getCustomerAccounts(accountIds);
                Map<String, LeadOpportunitySetting__mdt>    settingsMap             = getSettingsMap(customers);
                Map<String, String>                         countriesMap            = getCountryMap();

                Boolean                                     isIDSIntegrationUser    = (UserInfo.getName() == CampaignMemberTriggerHelper.IDS_INTEGRATION_USER);
                Map<String, String>                         pricebookSettingMap     = getPricebookSettingMap();

                List<CampaignMemberTriggerHelper.oppWrapper> oppList = new List<CampaignMemberTriggerHelper.oppWrapper>();
                Map<Id,Field_Sales_Project_Members__c> memberIdWithLead = new Map<Id,Field_Sales_Project_Members__c>();

                Map<Id, Lead> stdLeads = getStdLeads(stdLeadIds);

                for (CampaignMember campaignMember : newCampaignMembers)
                {
                    String  recordType          = campaigns.get(campaignMember.CampaignId).RecordType.DeveloperName;
                    String  includeInCommunity  = campaigns.get(campaignMember.CampaignId).Include_in_Dealer_Community__c;
                    String  convertTo           = campaigns.get(campaignMember.CampaignId).Convert_To__c;
                    Boolean assignFromDealer    = campaigns.get(campaignMember.CampaignId).AssignRepFromDealer__c;
                    Boolean respondedBefore     = false;

                    CampaignMember oldMember;
                    if (oldCampaignMemberMap != null) {
                        if (oldCampaignMemberMap.containsKey(campaignMember.Id))
                        {
                            oldMember = oldCampaignMemberMap.get(campaignMember.Id);
                            respondedBefore = oldMember.HasResponded;
                        }
                    }

                    //Added for IDS trade show integration updates
                    Boolean isIDSLogic = false;
                    if(oldCampaignMemberMap != null)
                    {
                        isIDSLogic = getIsIDSLogic(campaignMember, oldMember, isIDSIntegrationUser);
                    }

                    Boolean triggerConversion = getIfTriggerConversion(recordType, campaignMember, respondedBefore, overrideHasResponded, isIDSLogic);

                    //Get all Leads related to the included Campaign Members


                    //SALES LEAD CONVERSION
                    if (convertTo == 'Sales Lead' && triggerConversion)
                    {
                        Field_Sales_Project_Members__c lead = new Field_Sales_Project_Members__c();

                        lead.Status__c = 'New';
                        lead.Source__c = campaigns.get(campaignMember.CampaignId).Source_Origin__c != null ? campaigns.get(campaignMember.CampaignId).Source_Origin__c : null;
                        lead.VoucherCode__c = campaignMember.VoucherCode__c;

                        //Potentially comment out these lines in case no brand should be assigned
                        String brand = campaignMember.Brand__c;
                        if (brand == null || brand == '') {
                            brand = campaigns.get(campaignMember.CampaignId).Brands__c;
                        }

                        if (campaignMember.Dealer__c != null) {
                            lead.Dealer__c = campaignMember.Dealer__c;
                        }

                        //Please note! This logic is now built around the CMDT CountryCodeMap__mdt
                        String accountCountry = contacts.get(campaignMember.ContactId).Account.Country__c;
                        String userCountry =    countriesMap.get(accountCountry);

                        if (userCountry != null) {
                            lead.UserCountry__c = userCountry;
                        }

                        Lead.Category__c = GlobalUtils.getCategoryFromBrand(userCountry, brand, dependentPicklistSalesLeadCountryCategoryMap, dependentPicklistSalesLeadCategoryBrandMap);

                        Lead.Brand__c = brand;
                        lead.Account__c = campaignMember.LeadId == null ? contacts.get(campaignMember.ContactId).AccountId : stdLeads.get(campaignMember.LeadId).ConvertedAccountId;
                        lead.Contact__c = campaignMember.ContactId;
                        lead.Campaign__c = campaignMember.CampaignId;
                        lead.CustomerNotes__c = campaignMember.Description__c;

                        Set<String> roleMap = new Set<String>();
                        if (settingsMap != null && settingsMap.get(brand) != null && settingsMap.get(brand).UserRoles__c != null) {
                            String roleList = settingsMap.get(brand).UserRoles__c;
                            String[] roles = roleList.split(';');
                            for (String role : roles) {
                                roleMap.add(role);
                            }
                        }

                        List<UserTerritory2Association> accUsers = new List<UserTerritory2Association>();

                        if (Test.isRunningTest()) {
                            UserTerritory2Association accUser = new UserTerritory2Association();
                            accUser.RoleInTerritory2 = 'Sales Rep (CERC)';
                            accUsers.add(accUser);
                        }
                        else {
                            accUsers = customerUserMap.get(lead.Account__c);
                        }
                        if (accUsers != null) {
                            for (UserTerritory2Association user : accUsers) {
                                if (roleMap.contains(user.RoleInTerritory2)) {
                                    lead.Sales_Rep__c = user.UserId;
                                }
                            }
                        }

                        //Check internal sales reps assigned through the dealer account's territories
                        List<UserTerritory2Association> dealerUsers = new List<UserTerritory2Association>();
                        if (dealers != null && assignFromDealer == true) {

                            if (Test.isRunningTest()) {
                                UserTerritory2Association dealerUser = new UserTerritory2Association();
                                dealerUser.RoleInTerritory2 = 'Sales Rep (CERC)';
                                dealerusers.add(dealerUser);
                            }
                            else {
                                dealerUsers = dealerUserMap.get(lead.Dealer__c);
                            }
                        }

                        if (dealerUsers != null && assignFromDealer == true) {
                            for (UserTerritory2Association user : dealerUsers) {
                                if (roleMap.contains(user.RoleInTerritory2)) {
                                    lead.Sales_Rep__c = user.UserId;
                                }
                            }
                        }

                        if (lead.Sales_Rep__c == null) {
                            lead.Sales_Rep__c = campaigns.get(campaignMember.CampaignId).OwnerId;
                        }

                        //leadList.add(lead);
                        memberIdWithLead.put(campaignMember.Id, lead);

                    }

                    //OPPORTUNITY CONVERSION
                    if (convertTo == 'Opportunity' && triggerConversion)
                    {
                        String brand = campaignMember.Brand__c;
                        if (brand == null) {
                            brand = campaigns.get(campaignMember.CampaignId).Brands__c;
                        }

                        Opportunity opp = new Opportunity();
                        if (includeInCommunity == 'Yes') {
                            opp.RecordTypeId = oppRT[0].Id; //oppDealerRT[0].Id;
                            opp.StageName = '1. Needs analysis'; //'Registered';
                        }
                        else {
                            opp.RecordTypeId = oppRT[0].Id;
                            opp.StageName = '1. Needs analysis';
                        }

                        //opp.LeadSource = 'Email Campaign'; //campaigns.get(campaignMember.CampaignId).Source_Origin__c != null ? campaigns.get(campaignMember.CampaignId).Source_Origin__c : null;
                        opp.CampaignId          = campaignMember.CampaignId;
                        opp.Campaign__c         = campaignMember.CampaignId; //Added to have related list in campaigns page layout.
                        opp.Primary_Contact__c  = campaignMember.ContactId;
                        opp.ContactId           = campaignMember.ContactId;
                        opp.CustomerNotes__c    = campaignMember.Description__c;
                        opp.VoucherCode__c      = campaignMember.VoucherCode__c;
                        opp.LeadSource          = campaigns.get(campaignMember.CampaignId).Source_Origin__c != null ? campaigns.get(campaignMember.CampaignId).Source_Origin__c : null;
                        opp.CloseDate           = Date.today().addMonths(3);

                        //Please note! This logic is now built around the CMDT CountryCodeMap__mdt
                        String accountCountry = contacts.get(campaignMember.ContactId).Account.Country__c;
                        String userCountry = countriesMap.get(accountCountry);
                        if (userCountry != null) {
                            opp.User_Country__c = userCountry;
                        }

                        opp.NA_Brand__c = campaignMember.Brand__c;
                        //The dealer assignment need to be collected from the Campaign Member
                        if (campaignMember.Dealer__c != null) {
                            opp.Dealer__c = campaignMember.Dealer__c;
                        }

                        String pricebookId = '';
                        pricebookId = pricebookSettingMap.get(contacts.get(campaignMember.ContactId).Account.Country__c);

                        if (pricebookId != '') {
                            opp.Pricebook2Id = pricebookId;
                        }

                        //In case the Brand field is empty on the Campaign Member, collect it from the Campaign instead
                        if (opp.NA_Brand__c == null || opp.NA_Brand__c == '') {
                            opp.NA_Brand__c = campaigns.get(campaignMember.CampaignId).Brands__c;
                        }

                        opp.AccountId = campaignMember.LeadId == null ? contacts.get(campaignMember.ContactId).AccountId : stdLeads.get(campaignMember.LeadId).ConvertedAccountId;

                        List<AccountContactRelation> dealerContacts = new List<AccountContactRelation>();
                        if (dealers != null) {
                            Account dealerAcc = dealers.get(opp.Dealer__c);
                            if (dealerAcc != null) {
                                dealerContacts = dealers.get(opp.Dealer__c).AccountContactRelations;
                            }
                        }

                        Map<Id, OpportunityTeamMember> oppMembers = new Map<Id, OpportunityTeamMember>();
                        String assignment = '';
                        if (settingsMap.get(opp.NA_Brand__c) != null) {
                            //opp.NA_Category__c = settingsMap.get(opp.NA_Brand__c).Category__c;

                            //Check assignment based on category
                            assignment = settingsMap.get(opp.NA_Brand__c).AssignOwnerFrom__c;
                        }
                        opp.NA_Category__c = GlobalUtils.getCategoryFromBrand(userCountry, brand, dependentPicklistOpportunityCountryCategoryMap, dependentPicklistOpportunityCategoryBrandMap);
                        Set<String> roleMap = new Set<String>();
                        if (settingsMap.get(opp.NA_Brand__c) != null && settingsMap.get(opp.NA_Brand__c).UserRoles__c != null) {
                            String roleList = settingsMap.get(opp.NA_Brand__c).UserRoles__c;
                            String[] roles = roleList.split(';');
                            for (String role : roles) {
                                roleMap.add(role);
                            }
                        }

                        //Check internal sales reps assigned through the customer account's territories
                        List<UserTerritory2Association> accUsers = new List<UserTerritory2Association>();

                        if (Test.isRunningTest()) {
                            UserTerritory2Association accUser = new UserTerritory2Association();
                            accUser.RoleInTerritory2 = 'Sales Rep (CERC)';
                            accUsers.add(accUser);
                        }
                        else {
                            accUsers = customerUserMap.get(opp.AccountId);
                        }

                        //Check internal users assigned through the customer's ETM
                        if (accUsers != null && assignFromDealer != true) {
                            for (UserTerritory2Association user : accUsers) {
                                if (roleMap.contains(user.RoleInTerritory2)) {
                                    OpportunityTeamMember omAcc = new OpportunityTeamMember();
                                    opp.OwnerId = user.UserId;
                                    omAcc.UserId = user.UserId;
                                    omAcc.TeamMemberRole = 'Sales Representative';
                                    omAcc.OpportunityAccessLevel = 'Edit';
                                    oppMembers.put(omAcc.UserId, omAcc);
                                }
                            }
                        }

                        //Check internal sales reps assigned through the dealer account's territories
                        List<UserTerritory2Association> dealerUsers = new List<UserTerritory2Association>();
                        if (dealers != null && assignFromDealer == true) {

                            if (Test.isRunningTest()) {
                                UserTerritory2Association dealerUser = new UserTerritory2Association();
                                dealerUser.RoleInTerritory2 = 'Sales Rep (CERC)';
                                dealerusers.add(dealerUser);
                            }
                            else {
                                dealerUsers = dealerUserMap.get(opp.Dealer__c);
                            }
                        }

                        if (dealerUsers != null && assignFromDealer == true) {
                            for (UserTerritory2Association user : dealerUsers) {
                                if (roleMap.contains(user.RoleInTerritory2)) {
                                    OpportunityTeamMember omDealerInt = new OpportunityTeamMember();
                                    opp.OwnerId = user.UserId;
                                    omDealerInt.UserId = user.UserId;
                                    omDealerInt.TeamMemberRole = 'Sales Representative';
                                    omDealerInt.OpportunityAccessLevel = 'Edit';
                                    oppMembers.put(omDealerInt.UserId, omDealerInt);
                                }
                            }
                        }

                        if (includeInCommunity == 'Yes') {
                            if (dealerContacts != null) {
                                for (AccountContactRelation rel : dealerContacts) {
                                    if (rel.Specialty__c != null) {
                                        if (roleMap.contains(rel.Specialty__c)) {

                                            OpportunityTeamMember omDealerExt = new OpportunityTeamMember();

                                            omDealerExt.UserId = externalDealerUserMap.get(rel.ContactId);
                                            omDealerExt.OpportunityAccessLevel = 'Edit';
                                            omDealerExt.TeamMemberRole = 'Dealer Sales Rep';
                                            if (omDealerExt.UserId != null) {
                                                opp.OwnerId = externalDealerUserMap.get(rel.ContactId);
                                                oppMembers.put(omDealerExt.UserId, omDealerExt);
                                            }

                                        }
                                    }
                                }
                            }
                            else {
                                opp.OwnerId = campaigns.get(campaignMember.CampaignId).OwnerId;
                            }
                        }

                        //Assign opportunities to the Campaign owner in case of exceptions
                        if (opp.OwnerId == null) {
                            opp.OwnerId = campaigns.get(campaignMember.CampaignId).OwnerId;
                        }

                        CampaignMemberTriggerHelper.OppWrapper oppRecord = new CampaignMemberTriggerHelper.OppWrapper();
                        oppRecord.opp = opp;

                        oppRecord.oppMembers = oppMembers.values();
                        oppRecord.CampaignMemberIdUpdate = campaignMember.Id;
                        oppList.add(oppRecord);

                    }
                }

                List<CampaignMember>  campaignMemberToUpdateList = new List<CampaignMember>();

                //Sales Lead creation
                if( !memberIdWithLead.values().isempty() )
                {
                    insertSalesLeads(memberIdWithLead.values());

                    for (CampaignMember campaignMemberToUpdate : [  SELECT Id, VoucherCode__c, Dealer__c, Description__c, URL_Source__c, CampaignId, ContactId, SalesLead__c
                    FROM CampaignMember
                    WHERE Id IN :memberIdWithLead.keySet()])
                    {

                        campaignMemberToUpdate.SalesLead__c = memberIdWithLead.get(campaignMemberToUpdate.Id).Id;

                        if(isIDSIntegrationUser == false)
                        {
                            CampaignMember member = oldCampaignMemberMap?.get(campaignMemberToUpdate.Id);

                            // VoucherCode__c
                            if (oldCampaignMemberMap != null && member != null && member.VoucherCode__c != null) {
                                campaignMemberToUpdate.VoucherCode__c = member.VoucherCode__c;
                            }
                            else {
                                campaignMemberToUpdate.VoucherCode__c = campaignMemberToUpdate.VoucherCode__c;
                            }

                            // Dealer__c
                            if (oldCampaignMemberMap != null && member != null && member.Dealer__c != null) {
                                campaignMemberToUpdate.Dealer__c = member.Dealer__c;
                            }
                            else {
                                campaignMemberToUpdate.Dealer__c = campaignMemberToUpdate.Dealer__c;
                            }

                            // Description__c
                            if (oldCampaignMemberMap != null && member != null && member.Description__c != null) {
                                campaignMemberToUpdate.Description__c = member.Description__c;
                            }
                            else {
                                campaignMemberToUpdate.Description__c = campaignMemberToUpdate.Description__c;
                            }

                            // URL_Source__c
                            if (oldCampaignMemberMap != null && member != null && member.URL_Source__c != null) {
                                campaignMemberToUpdate.URL_Source__c = member.URL_Source__c;
                            }
                            else {
                                campaignMemberToUpdate.URL_Source__c = campaignMemberToUpdate.URL_Source__c;
                            }

                            // IDSContact__c
                            if (campaignMemberToUpdate.ContactId != null) {
                                campaignMemberToUpdate.IDSContact__c = campaignMemberToUpdate.ContactId + '+' + campaignMemberToUpdate.CampaignId ;
                            }
                        }

                        campaignMemberToUpdateList.add(campaignMemberToUpdate);
                    }
                }

                if(!campaignMemberToUpdateList.isempty())
                {
                    try{
                        update campaignMemberToUpdateList;
                    }
                    catch(Exception e){
                        DebugLog.addError(e.getMessage());
                    }
                }

                //Opportunity creation
                if(oppList.size()>0){
                    executeInsertions(oppList);
                }
            }
        }
    }

    /**
     * @param opportunities opportunities wrappers to execute insertions
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     */
    public void executeInsertions(List<CampaignMemberTriggerHelper.oppWrapper> opportunities)
    {
        Map<Id, Opportunity> memberIdWithOpp = new Map<Id, Opportunity>();

        List<CampaignMember> campaignMemberToUpdateList = new List<CampaignMember>();

        //Loop all opportunities to create
        for (CampaignMemberTriggerHelper.oppWrapper opportunity : opportunities)
        {
            Opportunity opp = opportunity.opp;
            List<OpportunityTeamMember> oppMembers = opportunity.oppMembers;

            //Create opportunity if no open opportunity is found

            memberIdWithOpp.put(opportunity.CampaignMemberIdUpdate, opportunity.opp); //populating member ID with opportunity map

            InsertOpportunity(opp);

            for (OpportunityTeamMember oppMember : oppMembers) {
                oppMember.OpportunityId = opp.Id;
            }

            insertOpportunityTeamMembers(oppMembers);
        }

        //identifying campaign members to update, assigning the right opportunity ID and updating the record.

        for (CampaignMember campaignMemberToUpdate : [SELECT ID, Opportunity__c FROM CampaignMember WHERE Id IN :memberIdWithOpp.keySet()]) {
            campaignMemberToUpdate.Opportunity__c = memberIdWithOpp.get(campaignMemberToUpdate.Id).Id;
            campaignMemberToUpdateList.add(campaignMemberToUpdate);
        }

        if (campaignMemberToUpdateList.size() > 0) {
            try {
                update campaignMemberToUpdateList;
            }
            catch (Exception e) {
                DebugLog.addError(e.getMessage());
            }
        }
    }

    /**
     * Inserts The opportunity
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param opportunity   Opportunity
     */
    public void InsertOpportunity(Opportunity opportunity)
    {
        try {
            insert opportunity;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'OpportunityInsertAsynch class. Opportunity not created after responded campaign member');
        }
    }

    /**
     * Inserts Opportunity Team Members to insert
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param opportunityTeamMembers    opportunity Team Members to insert
     */
    public void insertOpportunityTeamMembers(List<OpportunityTeamMember> opportunityTeamMembers)
    {
        try {
            insert opportunityTeamMembers;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'OpportunityInsertAsynch class. oppMembers not created after responded campaign member');
        }
    }

    /**
     * Inserts Sales Leads
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param salesLeads Sales leads records to insert
     */
    public static void insertSalesLeads(List<Field_Sales_Project_Members__c> salesLeads)
    {
        try {
            insert salesLeads;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'CampaignMemberTriggerHelper.createOpportunities.insertSalesLeads Sales Lead not created.');
        }
    }

    /**
     * For each member we gather Campaign,Contact,Dealer and Lead Ids
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param newCampaignMembers    New campaign members
     * @param campaignIds           Campaign Ids
     * @param contactIds            Contact Ids
     * @param dealerIds             Dealer Ids
     * @param stdLeadIds            stdLead Ids
     */
    public static void populateIdsFromMembers(List<CampaignMember> newCampaignMembers, Set<Id> campaignIds, Set<Id> contactIds, Set<Id> dealerIds, Set<Id> stdLeadIds)
    {
        for (CampaignMember member : newCampaignMembers) {
            if (member.CampaignId != null) {
                campaignIds.add(member.CampaignId);
            }
            if (member.ContactId != null) {
                contactIds.add(member.ContactId);
            }
            if (member.Dealer__c != null) {
                dealerIds.add(member.Dealer__c);
            }
            if (member.LeadId != null) {
                stdLeadIds.add(member.LeadId);
            }
        }
    }

    /**
     * get Pick List Values
     * @author Roberto
     *
     * @param ruleCheck         Allow getting the values
     * @param pickListField     Pick list Field
     *
     * @return Map<String, List<String>> - Pick List Values
     */
    public static Map<String, List<String>> getPickListValues(Boolean ruleCheck, SObjectField pickListField)
    {
        Map<String, List<String>> pickListValues;
        if(ruleCheck)
        {
            pickListValues = GlobalUtils.getDependentPicklistValues(pickListField);
        }
        return pickListValues;
    }

    /**
     * Retrieves a map of contacts
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     * @param contactIds Contacts Ids
     *
     * @return Map<Id, Contact> - Map of contacts
     */
    public static Map<Id, Contact> getContacts(Set<Id> contactIds)
    {
        Map<Id, Contact> contacts = new Map<Id, Contact>(
                [SELECT Id, AccountId, Account.Country__c FROM Contact WHERE Id IN :contactIds]
        );
        return contacts;
    }

    /**
     * Returns the account records along with AccountUserTerritory2Views records
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param accountIds Account Ids
     *
     * @return Map<Id, Account> - Customers Accounts
     */
    public static Map<Id, Account> getCustomerAccounts(Set<Id> accountIds)
    {
        Map<Id, Account> customers = new Map<Id, Account>(
        [
                SELECT Id, Name, Country__c, (
                        SELECT AccountId, RoleInTerritory2, UserId
                        FROM AccountUserTerritory2Views
                )

                FROM Account
                WHERE Id IN :accountIds
        ]);
        return customers;
    }

    /**
     * Retrieves Accounts along with AccountsAccountContactRelations and AccountUserTerritory2Views child records.
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param dealerIds Set of dealers Ids
     *
     * @return Map<Id, Account> - Dealer Accounts
     */
    public static Map<Id, Account> getDealerAccounts(Set<Id> dealerIds)
    {
        Map<Id, Account> dealers = new Map<Id, Account>(
        [
                SELECT Id, Name, (
                        SELECT AccountId, ContactId, IsActive, IsDirect, Roles, Specialty__c, Contact.Email, Contact.Legacy_ID__c
                        FROM AccountContactRelations
                ),

                (
                        SELECT AccountId, RoleInTerritory2, UserId
                        FROM AccountUserTerritory2Views
                )
                FROM Account
                WHERE Id IN :dealerIds
        ]);
        return dealers;
    }

    /**
     * Retrieve the list of settings corresponding for a country and a category
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @return Map<String, String> - Pricebook Settings Map
     */
    public static Map<String, String> getPricebookSettingMap()
    {
        Map<String, String> pricebookSettingMap = new Map<String, String>();

        for (OpportunityAssignment__c pbSetting : [SELECT Country__c, PricebookId__c FROM OpportunityAssignment__c])
        {
            String countrySetting = pbSetting.Country__c;
            String[] countryList = countrySetting.split(';');

            for (String c : countryList)
            {
                pricebookSettingMap.put(c, pbSetting.PricebookId__c);
            }
        }

        return pricebookSettingMap;
    }

    /**
     * Retrieve CountryCodeMap__mdt records and assorts them by Country Code
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @return Map<String, String> - Map of (Code,Country)
     */
    public static Map<String, String> getCountryMap()
    {
        Map<String, String> userCountryMap = new Map<String, String>();

        List<CountryCodeMap__mdt> countryCodes = CampaignMemberTriggerHelper.retrieveCountriesCodes();

        CountryCodeMap__mdt country;
        for(Integer i=0, j= countryCodes.size(); i < j; i++)
        {
            country = countryCodes[i];
            userCountryMap.put(country.Country_Code_2_digit__c, country.Campaign_Country__c);
        }

        return userCountryMap;
    }

    /**
     * Gets ExternalDealerUserMap
     * @author Roberto
     *
     * @param dealers   Dealer Accounts
     *
     * @return Map<Id, Id> - Map of ExternalDealerUserMap
     */
    public static Map<Id, Id> getExternalDealerUserMap(Map<Id, Account> dealers)
    {
        Map<Id, Id> externalDealerUserMap = new Map<Id, Id>();
        if (dealers.size() > 0) {
            Set<Id> externalDealerContacts = new Set<Id>();
            for (Account dealer : dealers.values()) {
                for (AccountContactRelation rel : dealer.AccountContactRelations) {
                    externalDealerContacts.add(rel.ContactId);
                }
            }

            List<User> externalDealerUsers = new List<User>();
            if (!externalDealerContacts.isEmpty()) {
                externalDealerUsers = [SELECT Id, ContactId FROM User WHERE ContactId IN :externalDealerContacts];
                for (User externalUser : externalDealerUsers) {
                    externalDealerUserMap.put(externalUser.ContactId, externalUser.Id);
                }
            }
        }
        return externalDealerUserMap;
    }

    /**
     * Extracts the list of accounts ids from contact records
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param contacts contacts
     *
     * @return Set<Id> - Set of Account ids
     */
    public static Set<Id> getAccountIds(Map<Id, Contact> contacts)
    {
        Set<Id> accountIds = new Set<Id>();
        for (Contact c : contacts.values()) {
            accountIds.add(c.AccountId);
        }
        return accountIds;
    }

    /**
     * Get the list of Users associated with a set of accounts via UserTerritory2Association and ObjectTerritory2Association
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param accountIds Account Ids
     *
     * @return Map<Id, List<UserTerritory2Association>>
     */
    public static Map<Id, List<UserTerritory2Association>> getAccountsUserMap(Set<Id> accountIds)
    {
        Map<Id, List<UserTerritory2Association>> customerUserMap = new Map<Id, List<UserTerritory2Association>>();

        if (!Test.isRunningTest()) {
            List<Id> accountIdList = new List<Id>();
            accountIdList.addAll(accountIds);
            customerUserMap = UsersInAccountTerritories.getUsersFromMultipleAccounts(accountIdList);
        }
        return customerUserMap;
    }

    /**
     * Get the customers settings
     * @author Roberto
     *
     * @param customers Customers Accounts
     *
     * @return Map<String, LeadOpportunitySetting__mdt> - customers settings mdt
     */
    public static Map<String, LeadOpportunitySetting__mdt> getSettingsMap(Map<Id, Account> customers)
    {
        Set<String> countries = getCustomersCountries(customers);
        LeadOpportunitySetting__mdt[] oppSettings = GlobalUtils.getOpportunitySettings(countries);
        Map<String, LeadOpportunitySetting__mdt> settingsMap = GlobalUtils.getSettingsMap(oppSettings);
        return settingsMap;
    }

    /**
     * Returns the customers countries
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param customers Map of customers
     *
     * @return Set<String> - Set of Customers Countries
     */
    public static Set<String> getCustomersCountries(Map<Id, Account> customers)
    {
        Set<String> countries = new Set<String>();

        for (Account customer : customers.values())
        {
            countries.add(customer.Country__c);
        }

        return countries;
    }

    /**
     * Retrieves A Map of Leads
     * @author Roberto
     *
     * @param stdLeadIds Lead Ids
     *
     * @return Map of Leads
     */
    public static Map<Id, Lead> getStdLeads(Set<Id> stdLeadIds)
    {
        Map<Id, Lead> stdLeads = new Map<Id, Lead>();
        if (!stdLeadIds.isEmpty()) {
            for (Lead lead : [SELECT Id, ConvertedAccountId FROM Lead WHERE Id IN :stdLeadIds]) {
                stdLeads.put(lead.Id, lead);
            }
        }
        return stdLeads;
    }

    /**
     * Tells whether we trigger the conversion to eventually Sales lead or Opportunity
     * @author Roberto
     *
     * @param recordType            Campaign Record type
     * @param campaignMember        Campaign Member
     * @param respondedBefore       Whether the member has responded before
     * @param overrideHasResponded  Override the value of responded
     * @param isIDSLogic            IDS Logic
     *
     * @return Boolean - Trigger Conversion or not
     */
    public static Boolean getIfTriggerConversion(String recordType, CampaignMember campaignMember, Boolean respondedBefore, Boolean overrideHasResponded, Boolean isIDSLogic)
    {
        Boolean triggerConversion = (
                (recordType == 'Digital_Marketing_Campaign' || recordType == 'InPersonEventCampaign')
                        && campaignMember.ContactId != null
                        && campaignMember.HasResponded == true
                        && (respondedBefore == false || overrideHasResponded == true || isIDSLogic)
        );
        return triggerConversion;
    }

    /**
     * Tells if its IDSLogic
     * @author Roberto
     *
     * @param campaignMember        New campaign member
     * @param oldMember             Old campaign member
     * @param isIDSIntegrationUser  If the user is IDSIntegrationUser
     *
     * @return Boolean - if its IDSLogic
     */
    public static Boolean getIsIDSLogic(CampaignMember campaignMember, CampaignMember oldMember, Boolean isIDSIntegrationUser)
    {
        Boolean isIDSLogic =
                (       (
                        campaignMember.ContactId        != null
                                && oldMember.ContactId          != null
                                && campaignMember.ContactId     != oldMember.ContactId
                )
                        ||
                        (
                                isIDSIntegrationUser
                                        &&
                                        (   oldMember.VoucherCode__c    != campaignMember.VoucherCode__c
                                                || (oldMember.Brand__c      != campaignMember.Brand__c)
                                                || (oldMember.Dealer__c     != campaignMember.Dealer__c)
                                        )
                        )
                );
        return isIDSLogic;
    }

}