/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Flow Controller
History
2022-08-17      Houssam ADIB    Create New Class
----------------------------------------------------------------------------------------*/
public with sharing class QuoteFlowController {

    public static final String QUOTE_API_NAME = 'Quote';

    public static final String QUOTE_LINE_BUNDLE_RLOOKUP = 'Quote_Product_Bundles__r';
    public static final String QUOTE_LINE_ITEM_RLOOKUP = 'QuoteLineItems';

    public static Set<String> childRLookups = new Set<String>{QUOTE_LINE_BUNDLE_RLOOKUP,QUOTE_LINE_ITEM_RLOOKUP};

    /*------------------------------------------------------------
    Description:    Invocable method used in a flow to clone a specific quote along with its related items
    Inputs:         @param ids      List passed from the flow, containing the quote id

    Outputs:        List<Boolean>   Returns whether the quote has been cloned successfully or not
    ------------------------------------------------------------*/
    @InvocableMethod(Label='Clone Quote' Description='Clone a quote along with its line items' Category='Quote')
    public static List<Id> cloneQuote(List<ID> ids)
    {
        // Query Record
        Quote originalQuote = (Quote) getObjectRecordWithAllFields(QUOTE_API_NAME,ids,childRLookups);

        // Clone Quote Record
        Quote clonedQuote = originalQuote.clone(false,false,false,false);
        clonedQuote.Status  = 'Draft';
        insertClonedQuote(clonedQuote);

        // Clone Quote Line Items
        cloneLineItems(originalQuote, clonedQuote);

        // Clone Quote Line Bundles
        cloneProductBundles(originalQuote, clonedQuote);

        return new List<Id>{clonedQuote.Id};
    }

    /*------------------------------------------------------------
    Description:    Inserts the quote clone
    Inputs:         @param clonedQuote     The quote clone to insert
    ------------------------------------------------------------*/
    public static void insertClonedQuote(Quote clonedQuote)
    {
        try {
            insert clonedQuote;
        } catch (Exception e) {
            DebugLog.addException(e, 'QuoteFlowController.insertClonedQuote');
        }
    }

    /*------------------------------------------------------------
    Description:    Clone the product bundles for a given quote
    Inputs:         @param originalQuote   The original quote from where we get the products bundles
                    @param clonedQuote     The quote clone to which we link the products bundles clones
    ------------------------------------------------------------*/
    public static void cloneProductBundles(Quote originalQuote, Quote clonedQuote)
    {
        QuoteProductBundle__c newBundle = new QuoteProductBundle__c();
        List<QuoteProductBundle__c> newBundles = new List<QuoteProductBundle__c>();

        List<QuoteProductBundle__c> originalBundles = originalQuote.Quote_Product_Bundles__r;

        for (QuoteProductBundle__c oldBundle : originalBundles)
        {
            if(oldBundle.ProductBundle__r.Active__c)
            {
                newBundle = oldBundle.clone(false, false, false, false);
                newBundle.Quote__c = clonedQuote.Id;
                newBundles.add(newBundle);
            }
        }

        try {
            insert newBundles;
        } catch (Exception e) {
            DebugLog.addException(e, 'QuoteFlowController.cloneProductBundles');
        }
    }

    /*------------------------------------------------------------
    Description:    Clone the quote line items that are not part of a product bundle
    Inputs:         @param originalQuote   The original quote from where we get the line items
                    @param clonedQuote     The quote clone to which we link the line items clones
    ------------------------------------------------------------*/
    public static void cloneLineItems(Quote originalQuote, Quote clonedQuote)
    {
        List<QuoteLineItem> originalLineItems = originalQuote.QuoteLineItems;

        List<QuoteLineItem> newLineItems = new List<QuoteLineItem>();
        QuoteLineItem newItem;

        for (QuoteLineItem oldItem : originalLineItems)
        {
            if (oldItem.QuoteProductBundle__c == null)
            {
                newItem = oldItem.clone(false, false, false, false);
                newItem.QuoteId = clonedQuote.Id;
                newLineItems.add(newItem);
            }
        }

        try {
            insert newLineItems;
        } catch (Exception e) {
            DebugLog.addException(e, 'QuoteFlowController.cloneLineItems');
        }
    }

    /*------------------------------------------------------------
    Description:    Query a record and its related items with all their schema fields
    Inputs:         @param objectName       Parent Object Api name
                    @param recordIds        Parent Object records Ids
                    @param childRLookups    Child Reverse Lookup to include

    Outputs:        SObject     SObject retrieved
    ------------------------------------------------------------*/
    public static SObject getObjectRecordWithAllFields(String objectName, List<Id> recordIds, Set<String> childRLookups)
    {
        SObject record;
        Set<String> objectFields = getObjectAllFields(objectName);

        List<String> childQueries = generateChildQueries(objectName,childRLookups);

        if(!objectFields.isEmpty())
        {
            String fieldsApiNames = String.join( new List<String>(objectFields) , ',');
            String queryString = 'SELECT ' + fieldsApiNames + appendChildQueries(childQueries) +' FROM ' + objectName + ' WHERE Id IN :recordIds LIMIT 1';

            // Execute Query
            record = Database.query(queryString);
        }

        return record;
    }

    /*------------------------------------------------------------
    Description:    Util Method used to nest child queries in a parent query
    Inputs:         @param childQueries     The child queries as list of strings

    Outputs:        String  Concatenation of child queries
    ------------------------------------------------------------*/
    public static String appendChildQueries(List<String> childQueries)
    {
        String query = '';

        if(!childQueries.isEmpty())
        {
            query += ',' + String.join(childQueries,',');
        }

        return query;
    }

    /*------------------------------------------------------------
    Description:    Generate the nested child queries
    Inputs:         @param parentObjectName     Parent object api name
                    @param childRLookups        Reverse lookup api names

    Outputs:        List<String>    List of the child queries to nest inside our parent object query
    ------------------------------------------------------------*/
    public static List<String> generateChildQueries(String parentObjectName, Set<String> childRLookups)
    {
        List<String> childQueries = new List<String>();

        // We need the reverse lookup name for each child object
        Map<String,String> RLookupReferences = getChildRLookupReferences(parentObjectName);

        List<String> childObjectFields;
        String referenceTo;
        String query;

        for (String RLookupApiName : childRLookups)
        {
            referenceTo = RLookupReferences.get(RLookupApiName);
            childObjectFields = new List<String>(getObjectAllFields(referenceTo));

            if (!childObjectFields.isEmpty())
            {
                query = ' ( SELECT ' + String.join(childObjectFields, ',') + ' FROM ' + RLookupApiName + ') ';
                childQueries.add(query);
            }
        }

        return childQueries;
    }

    /*------------------------------------------------------------
    Description:    For each reverse lookup, get the child object api name
    Inputs:         @param parentObject     The parent object api name

    Outputs:        Map<String,String>      Map specifying for each reverse lookup api name the referenceTo child object api name
    ------------------------------------------------------------*/
    public static Map<String,String> getChildRLookupReferences(String parentObject)
    {
        Map<String,String> childRelationshipsNames = new Map<String,String>();

        List<Schema.ChildRelationship> childRelationships = Schema.getGlobalDescribe().get(parentObject).getDescribe().getChildRelationships();

        for(Schema.ChildRelationship relationship : childRelationships)
        {
            String childObjectName = relationship.getChildSObject().getDescribe().getName();
            String reverseLookupName = relationship.getRelationshipName();

            childRelationshipsNames.put(reverseLookupName,childObjectName);
        }

        return childRelationshipsNames;
    }

    /*------------------------------------------------------------
    Description:    Retrieve all the fields for a given SObject
    Inputs:         @param objectApiName    Object Api Name

    Outputs:        List<String>    List of all the schema fields
    ------------------------------------------------------------*/
    public static Set<String> getObjectAllFields(String objectApiName)
    {
        Set<String> fieldsApiNames = new Set<String>();

        for (Schema.SObjectField sObjectField : Schema.getGlobalDescribe().get(objectApiName).getDescribe().fields.getMap().values())
        {
            String fieldApiName = sObjectField.getDescribe().getName();

            // Fields to exclude from cloning process
            if( objectApiName == 'QuoteLineItem' && fieldApiName == 'OpportunityLineItemId'
                || objectApiName == 'Quote' && fieldApiName == 'Acceptance_Date_Time__c'
                || objectApiName == 'Quote' && fieldApiName == 'Approval_Status__c'
                || objectApiName == 'Quote' && fieldApiName == 'Approval_Submission_DateTime__c'
                || objectApiName == 'Quote' && fieldApiName == 'Last_Approval_Action_DateTime__c')
            {
                continue;
            }

            // Special case for ProductBundle__c
            if (objectApiName == 'QuoteProductBundle__c')
            {
                fieldsApiNames.add('ProductBundle__r.Active__c');
            }

            fieldsApiNames.add(fieldApiName);
        }

        return fieldsApiNames;
    }

}