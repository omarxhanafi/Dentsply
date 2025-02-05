/*--------------------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Trigger Handler Class
Test class      Test_QuoteTriggerHandler

History
8-Sept-2022     Houssam     Create new Class
20-Jan-2025     Omar        CPQ-230 - Separation of logic between regular orders and advanced orders (RLM)
--------------------------------------------------------------------------------------------------------------------*/
public with sharing class QuoteTriggerHandler extends TriggerHandler {

    // Regular quotes
    private List<Quote> oldQuoteList, newQuoteList;
    private Map<Id, Quote> oldQuoteMap, newQuoteMap;

    // Advanced quotes (RLM)
    private List<Quote> oldRLMQuoteList, newRLMQuoteList;
    private Map<Id, Quote> oldRLMQuoteMap, newRLMQuoteMap;

    public QuoteTriggerHandler() {
        // Init lists and maps for both regular and advanced quotes (Old and new)
        oldQuoteList = new List<Quote>();
        newQuoteList = new List<Quote>();
        oldQuoteMap = new Map<Id, Quote>();
        newQuoteMap = new Map<Id, Quote>();

        oldRLMQuoteList = new List<Quote>();
        newRLMQuoteList = new List<Quote>();
        oldRLMQuoteMap = new Map<Id, Quote>();
        newRLMQuoteMap = new Map<Id, Quote>();

        // Separate quotes by record type
        separateQuotesByRecordType();
    }

    protected override void beforeInsert() {
        // Regular quote-specific helper calls
        if(!newQuoteList.isEmpty()){
            QuoteTriggerHelper.setQuotePreDefinedValues(newQuoteList);
        }

        // RLM quote-specific helper calls
        if(!newRLMQuoteList.isEmpty()){
            QuoteTriggerHelper.setShippingAndBillingAddress(newRLMQuoteList, null);
        }
    }

    protected override void beforeUpdate() {
        // RLM quote-specific helper calls
        if(!newRLMQuoteList.isEmpty()){
            QuoteTriggerHelper.setShippingAndBillingAddress(newRLMQuoteList, oldRLMQuoteMap);
        }
    }

    /**
     * separateQuotesByRecordType Helper method creating Quote lists and maps for both regular and advanced quotes (Old and new) based on the record type
     */
    private void separateQuotesByRecordType() {
        Id advancedRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Quote' AND DeveloperName = 'Advanced_Quote' LIMIT 1].Id;

        if (Trigger.old != null) {
            for (Quote eachQuote : (List<Quote>) Trigger.old) {
                if (eachQuote.RecordTypeId == advancedRecordTypeId) {
                    oldRLMQuoteList.add(eachQuote);
                    oldRLMQuoteMap.put(eachQuote.Id, eachQuote);
                } else {
                    oldQuoteList.add(eachQuote);
                    oldQuoteMap.put(eachQuote.Id, eachQuote);
                }
            }
        }

        if (Trigger.new != null) {
            for (Quote eachQuote : (List<Quote>) Trigger.new) {
                if (eachQuote.RecordTypeId == advancedRecordTypeId) {
                    newRLMQuoteList.add(eachQuote);
                    newRLMQuoteMap.put(eachQuote.Id, eachQuote);
                } else {
                    newQuoteList.add(eachQuote);
                    newQuoteMap.put(eachQuote.Id, eachQuote);
                }
            }
        }
    }
}