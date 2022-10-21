/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Trigger Helper Class
Test class      Test_QuoteTriggerHandler

History
8-Sept-2022     Create new Class
----------------------------------------------------------------------------------------*/
public with sharing class QuoteTriggerHelper {


    /*------------------------------------------------------------
    Description:    Loop country setting records to find the quote correspondent template
    Inputs:         @param  quotes          New Quote records just inserted

    History:
    8-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static void setQuotePreDefinedValues(List<Quote> quotes)
    {
        Map<Id, Opportunity> opportunities = retrieveQuotesOpportunities(quotes);

        Map<Id, Opportunity> quoteOpportunityMap = populateQuoteOpportunityMap(quotes, opportunities);

        setPredefinedValues(quotes, quoteOpportunityMap);
    }


    /*------------------------------------------------------------
    Description:    Set the predefined values for the new quotes inserted
    Inputs:         @param  quotes                  New Quote records just inserted
                    @param  quoteOpportunityMap     Map mapping each quote to its opportunity

    History:
    8-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static void setPredefinedValues(List<Quote> quotes, Map<Id, Opportunity> quoteOpportunityMap)
    {
        List<QuoteCountrySetting__mdt> quoteSettings = [SELECT CountryCode__c, QuoteTemplate__c FROM QuoteCountrySetting__mdt];

        for (Quote newQuote : quotes)
        {
            String accountCountry = quoteOpportunityMap.get(newQuote.Id).Account.Country__c;
            setQuoteTemplate(newQuote, accountCountry, quoteSettings);
            setQuoteManagers(newQuote,quoteOpportunityMap.get(newQuote.Id));
        }
    }

    /*------------------------------------------------------------
    Description:    Set the predefined values for the new quotes inserted
    Inputs:         @param  newQuote        New Quote inserted
                    @param  opportunity     Quote opportunity

    History:
    19-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static void setQuoteManagers(Quote newQuote, Opportunity opportunity)
    {
        if(opportunity.Owner.ManagerId != null)
        {
            if(newQuote.Manager__c == null)
            {
                newQuote.Manager__c = opportunity.Owner.ManagerId;
            }
            if(newQuote.X2nd_level_Manager__c == null)
            {
                newQuote.X2nd_level_Manager__c = (opportunity.Owner.Manager.ManagerId != null ) ? opportunity.Owner.Manager.ManagerId : null;
            }
        }
    }

    /*------------------------------------------------------------
    Description:    Loop country setting records to find the quote correspondent template to set
    Inputs:         @param  quote                   New Quote record
                    @param  quoteCountrySettings    List of Quote Country Settings

    Outputs:        String     Quote Template. (SelectQuoteTemplate__c picklist value)
    History:
    8-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static void setQuoteTemplate(Quote newQuote, String accountCountryCode, List<QuoteCountrySetting__mdt> quoteCountrySettings)
    {
        for (QuoteCountrySetting__mdt countrySetting : quoteCountrySettings)
        {
            if(accountCountryCode == countrySetting.CountryCode__c)
            {
                newQuote.SelectQuoteTemplate__c = countrySetting.QuoteTemplate__c;
            }
        }
    }

    /*------------------------------------------------------------
    Description:    Populates a map of quote id to its opportunity record having Account.Country__c field value
    Inputs:         @param  quotes              List of new quotes records
                    @param  opportunities       List of Quotes opportunities retrieved from database

    Outputs:        Map<Id, Opportunity>        Mapping each Quote id to its opportunity record
    History:
    8-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static Map<Id, Opportunity> populateQuoteOpportunityMap(List<Quote> quotes, Map<Id, Opportunity> opportunities)
    {
        Map<Id, Opportunity> quoteOpportunityMap = new Map<Id, Opportunity>();
        for (Quote quote : quotes)
        {
            quoteOpportunityMap.put(quote.Id, opportunities.get(quote.OpportunityId));
        }
        return quoteOpportunityMap;
    }

    /*------------------------------------------------------------
    Description:    retrieve quotes opportunities to get their Account.Country__c field
    Inputs:         @param  quotes              List of new quotes records

    Outputs:        Map<Id, Opportunity>        Mapping Quote Id to its opportunity
    History:
    8-Sep-2022      Houssam     New Method
    ------------------------------------------------------------*/
    public static Map<Id, Opportunity> retrieveQuotesOpportunities(List<Quote> quotes)
    {
        Set<Id> opportunitiesIds = new Set<Id>();
        for (Quote quote : quotes)
        {
            opportunitiesIds.add(quote.OpportunityId);
        }
        return (new Map<Id, Opportunity>([SELECT Id, Account.Country__c,Opportunity.Owner.Manager.ManagerId FROM Opportunity WHERE Id IN :opportunitiesIds]));
    }
}