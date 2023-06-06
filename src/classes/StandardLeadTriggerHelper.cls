global with sharing class StandardLeadTriggerHelper {
    
    private static final String SOBJECT_NAME = 'Lead';
    
    public static void updateCampaignMembers(Map<Id, Lead> oldLeadsValues, Map<Id, Lead> newLeadsValues){
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
        	List<CampaignMember> cmList = [SELECT Id, VoucherCode__c, URL_Source__c, LeadId, Description__c, HasResponded, ContactId, Brand__c, CampaignId, Dealer__c,
                    Campaign.Brand__c
                                                FROM CampaignMember
                                                WHERE ContactId IN: leadIdSet AND Campaign.RecordType.DeveloperName =: 'Digital_Marketing_Campaign'];
        	Map<Id, CampaignMember> cmMap = new Map<Id, CampaignMember>(cmList);        
       		CampaignMemberTriggerHelper.createOpportunities(cmList, cmMap, true);
        }
        if(leadIdSet.size()>0){
        	List<CampaignMember> cmList = [SELECT Id, LeadId, Lead.IDSVoucherCode__c, Lead.IDSURLSource__c, Lead.IDSBrand__c, Lead.IDSDescription__c, Lead.IDSDealer__c,
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
       		CampaignMemberTriggerHelper.createOpportunities(cmList, cmMap, true);
        }
        
    }
}