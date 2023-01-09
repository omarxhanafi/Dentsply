global with sharing class StandardLeadTriggerHelper {
    
    private static final String SOBJECT_NAME = 'Lead';
    
    public static void updateCampaignMembers(List<Lead> newLeadList){
        Set<Id> leadIdSet = new Set<Id>();
        Set<Id> campaignIDSId = new Set<Id>();
        
        for(Lead l : newLeadList){        	
            if(l.IsConverted == true){
                leadIdSet.add(l.ConvertedContactId);
                if(l.IDSCampaign__c != ''){
                    campaignIDSId.add(l.IDSCampaign__c);
                }
            }
        }
        
        //Find all Campaign Members related to the converted leads
        if(leadIdSet.size()>0){
        	List<CampaignMember> cmList = [SELECT Id, VoucherCode__c, LeadId, Description__c, HasResponded, ContactId, Brand__c, CampaignId, Dealer__c, Campaign.Brand__c FROM CampaignMember WHERE ContactId IN: leadIdSet AND Campaign.RecordType.DeveloperName =: 'Digital_Marketing_Campaign'];
        	Map<Id, CampaignMember> cmMap = new Map<Id, CampaignMember>(cmList);        
       		CampaignMemberTriggerHelper.createOpportunities(cmList, cmMap, true);
        }
        if(leadIdSet.size()>0){
        	List<CampaignMember> cmList = [SELECT Id, LeadId, Lead.IDSVoucherCode__c, Lead.IDSURLSource__c, Lead.IDSBrand__c, Lead.IDSDescription__c, Lead.IDSDealer__c, Description__c, HasResponded, ContactId, Brand__c, CampaignId, Dealer__c, Campaign.Brand__c FROM CampaignMember WHERE ContactId IN: leadIdSet AND Campaign.RecordType.DeveloperName =: 'InPersonEventCampaign' AND CampaignId IN: campaignIDSId];
            for(integer i=0; i < cmList.size(); i++){
            	cmList[i].VoucherCode__c = cmList[i].Lead.IDSVoucherCode__c;
                cmList[i].Brand__c = cmList[i].Lead.IDSBrand__c;
                cmList[i].Dealer__c = cmList[i].Lead.IDSDealer__c;
                cmList[i].Description__c = cmList[i].Lead.IDSDescription__c;
                cmList[i].URL_Source__c = cmList[i].Lead.IDSURLSource__c;
            }
            Map<Id, CampaignMember> cmMap = new Map<Id, CampaignMember>(cmList);
       		CampaignMemberTriggerHelper.createOpportunities(cmList, cmMap, true);
        }
    }
}