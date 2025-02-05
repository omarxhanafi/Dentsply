/*------------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Trigger Helper Class
Test class      Test_QuoteTriggerHandler

History
8-Sept-2022     Houssam     Create new Class
20-Jan-2025     Omar        CPQ-230 - Separation of logic between regular orders and advanced orders (RLM)
------------------------------------------------------------------------------------------------------------*/
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

        // The contact preferred language is needed, we will do a query to get the information and add it to our quotes instances
        putContactPreferredLanguage(quotes);

        setPredefinedValues(quotes, quoteOpportunityMap);
    }

    /**
     * The method gets the preferred language for each quote's contact.
     * We need this information to select the right quote template in a later step (setPredefinedValues method)
     *
     * @author hadib@salesforce.com | 05-12-2022
     *
     * @param quotes    The new quotes (in the before insert context)
     */
    private static void putContactPreferredLanguage(List<Quote> quotes)
    {
        // Here, we need the Quote.Contact.Preferred_Language__c.
        // We have the contact Id but we don't have yet the new quote Id as we are in before insert context
        // So, we will retrieve the preferred languages using the contact Ids

        // Getting all the contact Ids
        Set<Id> contactIds = new Set<Id>();
        for (Quote newQuote : quotes)
        {
            contactIds.add(newQuote.ContactId);
        }

        // If we have contacts linked to one of our new quotes being insert:
        if(!contactIds.isEmpty())
        {
            // Retrieve their preferred languages
            Map<Id, Contact> contactsMap = new Map<Id, Contact>([
                    SELECT Preferred_Language__c
                    FROM Contact
                    WHERE Id IN :contactIds]);

            // And put this information in the quotes to be used after in setPredefinedValues method
            for (Quote newQuote : quotes)
            {
                if(newQuote.ContactId != null)
                {
                    String contactPreferredLanguage = contactsMap.get(newQuote.ContactId).Preferred_Language__c;

                    // We are filling the Preferred_Language__c on the quote records
                    // to avoid using maps across all the class and stick to just quotes instances
                    newQuote.Contact = new Contact(Preferred_Language__c = contactPreferredLanguage);
                }
            }
        }
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
        List<QuoteCountrySetting__mdt> quoteSettings = [SELECT CountryCode__c, QuoteTemplate__c, AlternateQuoteTemplate__c FROM QuoteCountrySetting__mdt];

        for (Quote newQuote : quotes)
        {
            // Populate the Selected Quote Template only if not selected by the user
            if(String.isBlank(newQuote.SelectQuoteTemplate__c))
            {
                String accountCountry = quoteOpportunityMap.get(newQuote.Id).Account.Country__c;
                setQuoteTemplate(newQuote, accountCountry, quoteSettings);
            }
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
            // As of now, We expect one unique record for each country. Therefore, we will break once we found one.
            if(accountCountryCode == countrySetting.CountryCode__c)
            {
                // Only one special case for (BE;'French)'. We will use alternate value
                if(accountCountryCode == 'BE' && newQuote.Contact.Preferred_Language__c == 'French')
                {
                    newQuote.SelectQuoteTemplate__c = countrySetting.AlternateQuoteTemplate__c;
                }
                else
                {
                    newQuote.SelectQuoteTemplate__c = countrySetting.QuoteTemplate__c;
                }
                break;
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

    /**
     * Sets the Shipping and Billing Address fields on Quote records based on related Address__c records.
     *
     * @param newQuotesList List of Quote records being inserted or updated.
     * @param oldQuoteMap (Optional) Map of old Quote records before the update.
     */
    public static void setShippingAndBillingAddress(List<Quote> newQuotesList, Map<Id, Quote> oldQuoteMap) {
        // Collect all related Address IDs (both Shipping and Billing)
        Set<ID> relatedAddressIds = new Set<ID>();
        for (Quote q : newQuotesList) {
            // In the case of an update, check if Shipping/Billing addresses have changed
            if (oldQuoteMap != null && oldQuoteMap.containsKey(q.Id)) {
                Quote oldQuote = oldQuoteMap.get(q.Id);
                if (q.ShippingAddress__c != oldQuote.ShippingAddress__c) {
                    relatedAddressIds.add(q.ShippingAddress__c);
                }
                if (q.BillingAddress__c != oldQuote.BillingAddress__c) {
                    relatedAddressIds.add(q.BillingAddress__c);
                }
            } else { // In the case of an insert: Always add
                if (q.ShippingAddress__c != null) {
                    relatedAddressIds.add(q.ShippingAddress__c);
                }
                if (q.BillingAddress__c != null) {
                    relatedAddressIds.add(q.BillingAddress__c);
                }
            }
        }

        // Query all related Address records
        if (relatedAddressIds.isEmpty()) return; // No changes, no need to query

        Map<ID, Address__c> addressMap = new Map<ID, Address__c>([
                SELECT Id, Street__c, City__c, StateProvince__c, PostalCode__c, Country__c
                FROM Address__c
                WHERE Id IN :relatedAddressIds
        ]);

        // Update Shipping and Billing Address fields on Quotes
        for (Quote q : newQuotesList) {
            // BeforeUpdate: Only update if changed
            Boolean isUpdate = oldQuoteMap != null && oldQuoteMap.containsKey(q.Id);
            Quote oldQuote = isUpdate ? oldQuoteMap.get(q.Id) : null;

            // Update Shipping Address if changed or if it's an insert
            if (!isUpdate || q.ShippingAddress__c != oldQuote.ShippingAddress__c) {
                Address__c shippingAddress = addressMap.get(q.ShippingAddress__c);
                if (shippingAddress != null) {
                    q.ShippingStreet = shippingAddress.Street__c;
                    q.ShippingCity = shippingAddress.City__c;
                    q.ShippingState = shippingAddress.StateProvince__c;
                    q.ShippingPostalCode = shippingAddress.PostalCode__c;
                    q.ShippingCountry = shippingAddress.Country__c;
                }
            }

            // Update Billing Address if changed or if it's an insert
            if (!isUpdate || q.BillingAddress__c != oldQuote.BillingAddress__c) {
                Address__c billingAddress = addressMap.get(q.BillingAddress__c);
                if (billingAddress != null) {
                    q.BillingStreet = billingAddress.Street__c;
                    q.BillingCity = billingAddress.City__c;
                    q.BillingState = billingAddress.StateProvince__c;
                    q.BillingPostalCode = billingAddress.PostalCode__c;
                    q.BillingCountry = billingAddress.Country__c;
                }
            }

            // If the related address is null, we empty the address fields
            if (q.ShippingAddress__c == null){
                q.ShippingStreet = null;
                q.ShippingCity = null;
                q.ShippingState = null;
                q.ShippingPostalCode = null;
                q.ShippingCountry = null;
            }

            if (q.BillingAddress__c == null){
                q.BillingStreet = null;
                q.BillingCity = null;
                q.BillingState = null;
                q.BillingPostalCode = null;
                q.BillingCountry = null;
            }
        }
    }

}