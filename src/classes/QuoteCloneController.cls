/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Controller class for handling Quote cloning functionality.
 * @Test-Class      Test_QuoteCloneController
 *
 * @History
 * 11-02-2025   Omar     Created QuoteCloneController
 */

public with sharing class QuoteCloneController {

    /**
     * getQuoteDetails - Retrieves basic details of a Quote record.
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   Id of the Quote.
     *
     * @return Quote - Quote record.
     */
    @AuraEnabled(cacheable=true)
    public static Quote getQuoteDetails(Id quoteId) {
        return [SELECT Id, Name FROM Quote WHERE Id = :quoteId LIMIT 1];
    }

    /**
     * cloneQuote - Clones a Quote record along with its related QuoteLineItems.
     * 
     * @author ohanafi@salesforce.com | 11-02-2025
     *
     * @param quoteId   Id of the Quote to be cloned.
     *
     * @return Id - Id of the cloned Quote.
     */
    @AuraEnabled
    public static Id cloneQuote(Id quoteId) {
        try {
            // Get all fields for the Quote object dynamically
            Map<String, Schema.SObjectField> quoteFieldsMap = Schema.getGlobalDescribe().get('Quote').getDescribe().fields.getMap();
            List<String> quoteFieldNames = new List<String>();

            for (String fieldName : quoteFieldsMap.keySet()) {
                quoteFieldNames.add(fieldName);
            }

            // Build dynamic SOQL for Quote
            String quoteQuery = 'SELECT ' + String.join(quoteFieldNames, ', ') +
                    ' FROM Quote WHERE Id = :quoteId LIMIT 1';

            // Query the original Quote
            Quote originalQuote = Database.query(quoteQuery);

            // Clone the Quote
            Quote clonedQuote = originalQuote.clone(false, true, false, false);

            // Customizing the Quote
            clonedQuote.Status = 'Draft';
            clonedQuote.StartDate = Date.today();

            // Remove system fields to prevent DML errors
            clonedQuote.Id = null;
            clonedQuote.CreatedDate = null;
            clonedQuote.LastModifiedDate = null;
            clonedQuote.LastModifiedById = null;
            clonedQuote.CreatedById = null;

            // Insert cloned Quote
            insert clonedQuote;

            // Get all fields for QuoteLineItem dynamically
            Map<String, Schema.SObjectField> qliFieldsMap = Schema.getGlobalDescribe().get('QuoteLineItem').getDescribe().fields.getMap();
            List<String> qliFieldNames = new List<String>();

            for (String fieldName : qliFieldsMap.keySet()) {
                qliFieldNames.add(fieldName);
            }

            // Build dynamic SOQL for QuoteLineItems
            String qliQuery = 'SELECT ' + String.join(qliFieldNames, ', ') +
                    ' FROM QuoteLineItem WHERE QuoteId = :quoteId';

            // Query related QuoteLineItems
            List<QuoteLineItem> originalQLIs = Database.query(qliQuery);
            List<QuoteLineItem> clonedQLIs = new List<QuoteLineItem>();

            for (QuoteLineItem qli : originalQLIs) {
                QuoteLineItem clonedQLI = qli.clone(false, true, false, false);
                clonedQLI.QuoteId = clonedQuote.Id;  // Reassign to new Quote

                // Remove system fields
                clonedQLI.Id = null;
                clonedQLI.CreatedDate = null;
                clonedQLI.LastModifiedDate = null;
                clonedQLI.LastModifiedById = null;
                clonedQLI.CreatedById = null;

                clonedQLIs.add(clonedQLI);
            }

            // Insert cloned QuoteLineItems
            if (!clonedQLIs.isEmpty()) {
                insert clonedQLIs;
            }

            return clonedQuote.Id;
        } catch (Exception e) {
            System.debug('Error cloning Quote: ' + e.getMessage());
            throw new AuraHandledException('Error cloning Quote: ' + e.getMessage());
        }
    }
}
