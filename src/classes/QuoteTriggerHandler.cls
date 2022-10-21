/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Trigger Handler Class
Test class      Test_QuoteTriggerHandler

History
8-Sept-2022     Create new Class
----------------------------------------------------------------------------------------*/
public with sharing class QuoteTriggerHandler extends TriggerHandler {
    private List<Quote> oldQuoteList, newQuoteList;
    private Map<Id, Quote> oldQuoteMap, newQuoteMap;

    public QuoteTriggerHandler() {
        oldQuoteList = (List<Quote>) Trigger.old;
        newQuoteList = (List<Quote>) Trigger.new;
        oldQuoteMap = (Map<Id, Quote>) Trigger.oldMap;
        newQuoteMap = (Map<Id, Quote>) Trigger.newMap;
    }

    protected override void beforeInsert() {
        QuoteTriggerHelper.setQuotePreDefinedValues(newQuoteList);
    }
}