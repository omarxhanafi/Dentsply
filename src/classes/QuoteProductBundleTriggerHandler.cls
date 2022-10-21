/*-------------------------------------------------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-08-08
Description:    Quote Product Bundle  Trigger Handler Class
History
----------------------------------------------------------------------------------------*/
public with sharing class QuoteProductBundleTriggerHandler extends TriggerHandler {
    private List<QuoteProductBundle__c> oldQuoteProductBundleList, newQuoteProductBundleList;
    private Map<Id, QuoteProductBundle__c> oldQuoteProductBundleMap, newQuoteProductBundleMap;

    public QuoteProductBundleTriggerHandler() {
        oldQuoteProductBundleList = (List<QuoteProductBundle__c>) Trigger.old;
        newQuoteProductBundleList = (List<QuoteProductBundle__c>) Trigger.new;
        oldQuoteProductBundleMap = (Map<Id, QuoteProductBundle__c>) Trigger.oldMap;
        newQuoteProductBundleMap = (Map<Id, QuoteProductBundle__c>) Trigger.newMap;
    }

    protected override void afterInsert() { 
        QuoteProductBundleTriggerHelper.createQuoteLineItems(newQuoteProductBundleList);
    }

    protected override void beforeDelete() {
        QuoteProductBundleTriggerHelper.deleteQuoteLineItems(oldQuoteProductBundleList);
    }
}