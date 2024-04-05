trigger EventCampaignEntryTrigger on CventEvents__EventCampaignEntry__c (after insert, after delete) {
    new EventCampaignEntryTriggerHandler().run();
}