public with sharing class QuoteCloneController {
    @AuraEnabled
    public static Id cloneQuote(Id quoteId) {
        // Query the original Quote and its line items
        Quote originalQuote = [
                SELECT Id, Name, OpportunityId, ExpirationDate, Status, BillingAddress__c, ShippingAddress__c,
                (SELECT Id, Product2Id, Quantity, UnitPrice, PricebookEntryId
                FROM QuoteLineItems)
                FROM Quote
                WHERE Id = :quoteId
                LIMIT 1
        ];

        // Clone the Quote and its related line items using deepClone
        Quote clonedQuote = originalQuote.clone(false, true, false, false);

        // Customize fields in the cloned Quote
        clonedQuote.Name = 'Cloned - ' + originalQuote.Name;
        clonedQuote.ExpirationDate = Date.today().addDays(30); // Set a new expiration date

        // Customize fields in the cloned line items
        for (QuoteLineItem clonedLineItem : clonedQuote.QuoteLineItems) {
            clonedLineItem.Quantity = clonedLineItem.Quantity * 2; // New quantity
        }

        // Insert the cloned Quote and its line items
        insert clonedQuote;

        System.debug('Cloned quote : ' + clonedQuote.Id);

        return clonedQuote.Id;
    }
}