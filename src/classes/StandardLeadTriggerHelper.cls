global with sharing class StandardLeadTriggerHelper {
    
    private static final String SOBJECT_NAME = 'Lead';

    /**
     * Updates the "Globally Shared" checkbox on Campaigns linked to Leads.
     *
     * Finds all Campaigns linked to the provided Leads and checks if any Lead has a different Country from the Campaign.
     * Marks the Campaign as "Globally Shared" if a difference is found.
     * @author hadib@salesforce.com | 03-10-2024
     * @param newLeads The new lead records
     * @param oldLeads The old lead records
     */
    public static void processLeads(Map<Id, Lead> newLeads, Map<Id, Lead> oldLeads)
    {
        Set<Id> campaignsToProcess = collectCampaignsToProcess(newLeads,oldLeads);

        if (!campaignsToProcess.isEmpty()) {
            // Query all campaign members for the campaigns we need to process
            List<CampaignMember> membersForCampaigns = [
                    SELECT Id, CampaignId, Lead.Country, Campaign.Campaign_Country__c
                    FROM CampaignMember
                    WHERE CampaignId IN :campaignsToProcess
            ];

            // Map to track campaign processing
            Map<Id, Boolean> campaignToSharedGloballyMap = getCampaignToSharedGloballyMap(membersForCampaigns);

            // Now update the campaigns if needed
            List<Campaign> campaignsToUpdate = [SELECT Id, SharedGlobally__c FROM Campaign WHERE Id IN :campaignToSharedGloballyMap.keySet()];
            for (Campaign camp : campaignsToUpdate) {
                Boolean shouldBeShared = campaignToSharedGloballyMap.get(camp.Id);
                if (camp.SharedGlobally__c != shouldBeShared) {
                    camp.SharedGlobally__c = shouldBeShared;
                }
            }

            if (!campaignsToUpdate.isEmpty()) {
                try {
                    update campaignsToUpdate;
                } catch (Exception e) {
                    DebugLog.addException(e, 'Error while updating Campaigns based on Lead country changes');
                }
            }
        }
    }

    /**
     * Based on the campaign members countries we know if we need to shared it globally or not
     * @author hadib@salesforce.com | 03-10-2024
     * @param membersForCampaigns
     *
     * @return Map<Id, Boolean> - If the campaign should be shared or not
     */
    public static Map<Id, Boolean> getCampaignToSharedGloballyMap(List<CampaignMember> membersForCampaigns)
    {
        Map<Id, Boolean> campaignToSharedGloballyMap = new Map<Id, Boolean>();

        // Group campaign members by campaignId
        Map<Id, List<CampaignMember>> campaignIdToMembersMap = new Map<Id, List<CampaignMember>>();
        for (CampaignMember cm : membersForCampaigns) {
            if (!campaignIdToMembersMap.containsKey(cm.CampaignId)) {
                campaignIdToMembersMap.put(cm.CampaignId, new List<CampaignMember>());
            }
            campaignIdToMembersMap.get(cm.CampaignId).add(cm);
        }

        // Process each campaign and check if any member has a different country
        for (Id campaignId : campaignIdToMembersMap.keySet()) {
            List<CampaignMember> campaignMembers = campaignIdToMembersMap.get(campaignId);
            Boolean globallyShared = false;

            for (CampaignMember cm : campaignMembers) {
                if (String.isNotBlank(cm.Lead.Country) && cm.Lead.Country != cm.Campaign.Campaign_Country__c) {
                    globallyShared = true;
                    break; // No need to check further if one mismatch is found
                }
            }

            campaignToSharedGloballyMap.put(campaignId, globallyShared);
        }
        return campaignToSharedGloballyMap;
    }

    /**
     * Collects the parent campaigns of the leads. For inserts, it collects all leads;
     * for updates, it collects only those where the country field has changed.
     * @author hadib@salesforce.com | 03-10-2024
     * @param newLeads Map of new leads
     * @param oldLeads Map of old leads
     *
     * @return Set<Id> - Set of campaign Ids to process
     */
    public static Set<Id> collectCampaignsToProcess(Map<Id, Lead> newLeads, Map<Id, Lead> oldLeads) {
        Set<Id> campaignsToProcess = new Set<Id>();
        Set<Id> leadIdsToProcess = new Set<Id>();
        Lead oldLead;
        Lead newLead;
        // Loop through the new leads and check if we are in insert or update context
        for (Id leadId : newLeads.keySet())
        {
            newLead = newLeads.get(leadId);

            // If oldLead is null, it's an insert, so add the lead to process
            if (oldLeads == null) {
                leadIdsToProcess.add(leadId);
            }
            // If oldLead is not null (update), check if the Country field has changed
            else {
                oldLead = oldLeads.get(leadId);
                if (newLead.Country != oldLead.Country) {
                    leadIdsToProcess.add(leadId);
                }
            }
        }

        // Query the campaign members only for the leads we want to process
        if (!leadIdsToProcess.isEmpty()) {
            List<CampaignMember> campaignMembersLinked = [
                    SELECT CampaignId
                    FROM CampaignMember
                    WHERE LeadId IN :leadIdsToProcess
            ];

            // Add the CampaignId to the campaignsToProcess set
            for (CampaignMember cm : campaignMembersLinked) {
                campaignsToProcess.add(cm.CampaignId);
            }
        }

        return campaignsToProcess;
    }

    /**
     * It ensures that the newly converted Lead's information is reflected in associated campaign members.
     * @author unknown
     * @param oldLeadsValues old values
     * @param newLeadsValues new values
     */
    public static void updateCampaignMembers(Map<Id, Lead> oldLeadsValues, Map<Id, Lead> newLeadsValues)
    {
        Set<Id> leadIdSet = new Set<Id>();
        Set<Id> campaignIDSId = new Set<Id>();
        Map<Id, Lead> mapContactIdLead = new Map<Id,Lead>();
        Boolean leadHasBeenConverted = false;
        for(Lead newLead : newLeadsValues.values())
        {
            leadHasBeenConverted = newLead.IsConverted && !oldLeadsValues.get(newLead.Id).IsConverted; // Wasn't converted and became

            if(leadHasBeenConverted)
            {
                leadIdSet.add(newLead.ConvertedContactId);
                if(newLead.IDSCampaign__c != '')
                {
                    campaignIDSId.add(newLead.IDSCampaign__c);
                    mapContactIdLead.put(newLead.ConvertedContactId , newLead);
                }
            }
        }
        
        //Find all Campaign Members related to the converted leads
        if(leadIdSet.size()>0){
        	List<CampaignMember> cmList = [SELECT Id, SalesLead__c, Opportunity__c, VoucherCode__c, URL_Source__c, LeadId, Description__c, HasResponded, ContactId, Brand__c, CampaignId, Dealer__c,
                    Campaign.Brand__c
                                                FROM CampaignMember
                                                WHERE ContactId IN: leadIdSet AND Campaign.RecordType.DeveloperName =: 'Digital_Marketing_Campaign'];
        	Map<Id, CampaignMember> cmMap = new Map<Id, CampaignMember>(cmList);        
       		CampaignMemberTriggerHelper.convertMemberToSalesLeadOrOpportunity(cmList, cmMap, true);
        }
        if(leadIdSet.size()>0){
        	List<CampaignMember> cmList = [SELECT Id, SalesLead__c, Opportunity__c, LeadId, Lead.IDSVoucherCode__c, Lead.IDSURLSource__c, Lead.IDSBrand__c, Lead.IDSDescription__c, Lead.IDSDealer__c,
                                                Description__c, HasResponded, ContactId, Brand__c, CampaignId, Dealer__c, Campaign.Brand__c
                                            FROM CampaignMember
                                            WHERE ContactId IN: leadIdSet AND Campaign.RecordType.DeveloperName =: 'InPersonEventCampaign' AND CampaignId IN: campaignIDSId];
            for(integer i=0; i < cmList.size(); i++){
                cmList[i].VoucherCode__c = mapContactIdLead.get(cmList[i].ContactId).IDSVoucherCode__c;
                cmList[i].Brand__c = mapContactIdLead.get(cmList[i].ContactId).IDSBrand__c;
                cmList[i].Dealer__c = mapContactIdLead.get(cmList[i].ContactId).IDSDealer__c;
                cmList[i].Description__c = mapContactIdLead.get(cmList[i].ContactId).IDSDescription__c;
                cmList[i].URL_Source__c = mapContactIdLead.get(cmList[i].ContactId).IDSURLSource__c;
            }
            Map<Id, CampaignMember> cmMap = new Map<Id, CampaignMember>(cmList);
       		CampaignMemberTriggerHelper.convertMemberToSalesLeadOrOpportunity(cmList, cmMap, true);
        }
        
    }
}