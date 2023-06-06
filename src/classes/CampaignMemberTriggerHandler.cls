/*-------------------------------------------------------------------------------------------------------
Author:         Ahmed LOUDRASSI (Salesforce) 20191022
Description:    Campaign Member Trigger Handler Class
History
2019-10-22      Ahmed LOUDRASSI     Migrated CampMgmtCampaignMemberTrigger and CampMgmtCampaignMemberTrigger2 triggers. (#)
2019-10-22      Ahmed LOUDRASSI     Migrated CampaignMember Workflows. (#)
2023-03-01      Houssam ADIB        Refactored The Trigger
----------------------------------------------------------------------------------------*/
public class CampaignMemberTriggerHandler extends TriggerHandler {

    private List<CampaignMember> oldCampaignMemberList, newCampaignMemberList;
    private Map<Id, CampaignMember> oldCampaignMemberMap, newCampaignMemberMap;

    public CampaignMemberTriggerHandler() {
        oldCampaignMemberList = (List<CampaignMember>) Trigger.old;
        newCampaignMemberList = (List<CampaignMember>) Trigger.new;
        oldCampaignMemberMap = (Map<Id, CampaignMember>) Trigger.oldMap;
        newCampaignMemberMap = (Map<Id, CampaignMember>) Trigger.newMap;
    }
    protected override void beforeInsert() {
        CampaignMemberTriggerHelper.updateCampaignMemberAccount(newCampaignMemberList);                     // Low Consumption
        CampaignMemberTriggerHelper.updateCampaignMembersInfo(newCampaignMemberList);                       // Low Consumption
        CampaignMemberTriggerHelper.setInternationalSpeaker(newCampaignMemberList);                         // Low Consumption
    }
    protected override void beforeUpdate() {
        CampaignMemberTriggerHelper.setInternationalSpeaker(newCampaignMemberList);                         // Low Consumption
    }
    protected override void afterInsert() {
        CampaignMemberTriggerHelper.leadOwnerAssignment(newCampaignMemberList);         // Execute Lead Trigger (Moved to After context) (Made Future)
        CampaignMemberTriggerHelper.createOpportunities(newCampaignMemberList, oldCampaignMemberMap, false);
    }
    protected override void afterUpdate() {
        CampaignMemberTriggerHelper.leadOwnerAssignment(newCampaignMemberList);         // Execute Lead Trigger (Moved to After context) (Made Future)
        CampaignMemberTriggerHelper.createOpportunities(newCampaignMemberList, oldCampaignMemberMap, false);
    }
}