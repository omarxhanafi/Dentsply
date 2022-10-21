/*-------------------------------------------------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-08-08
Description:    Quote Product Bundle  Trigger Helper Class
Test class      Test_QuoteProductBundleTriggerHandler
History
----------------------------------------------------------------------------------------*/
public with sharing class QuoteProductBundleTriggerHelper {

    public QuoteProductBundleTriggerHelper() {

    }

    public static void deleteQuoteLineItems(List<QuoteProductBundle__c> oldPQBList)
    {
        Set<Id> pqbIds = (new Map<Id,QuoteProductBundle__c>(oldPQBList)).keySet();
        List<QuoteLineItem> qlisToDelete = new List<QuoteLineItem>{};
        qlisToDelete = [SELECT Id, QuoteProductBundle__c FROM QuoteLineItem WHERE QuoteProductBundle__c IN: pqbIds];
        if (qlisToDelete.isEmpty()) return ;
        List<QuoteLineItem> qlisToUpdate = new List<QuoteLineItem>{};
        for (QuoteLineItem qli: qlisToDelete){
            QuoteLineItem q = new QuoteLineItem(Id=qli.Id, CanBeDeleted__c=true);
            qlisToUpdate.add(q);
        }
        try{
            update qlisToUpdate ;
        }catch(DmlException ex){
            DebugLog.addException(ex, 'Quote Line Item Trigger');
            return;
        }
        try{
            delete qlisToDelete ;
        }catch(DmlException ex){
            DebugLog.addException(ex, 'Quote Line Item Trigger');
        }
    }

    public static void createQuoteLineItems(List<QuoteProductBundle__c> newPQBList)
    {
        List<Product_Bundle__c> productBundlesList  = new List<Product_Bundle__c>{};
        Set <Id> allProductBundlesIds               = new Set<Id>{};
        Set <Id> allPricebookIds                    = new Set<Id>{};
        Set <String> allCurrencies                  = new Set<String>{};
        Set <Id> allQuoteIds                        = new Set<Id>{};
        Set<Id> allProductsIds                      = new Set<Id>{};

        for (QuoteProductBundle__c qpb : newPQBList)
        {
            allProductBundlesIds.add(qpb.ProductBundle__c);
            allCurrencies.add(qpb.CurrencyIsoCode);
            allQuoteIds.add(qpb.Quote__c);
        }
        if(allProductBundlesIds.isEmpty()) return ;


        // get the Product Bundles and Bill of Material rows of the related Product Bundles:
        productBundlesList  = [ SELECT Id, Name, Price_Book__c, Quantity__c, Total_price__c, CurrencyIsoCode,
                                    (SELECT Product_bundle__c, Product_bundle__r.Price_Book__c, CurrencyIsoCode, Quantity__c, Product__c,
                                            Unit_Price__c, Row_Price__c, Discount__c, SortOrder__c FROM Bill_of_Material__r)
                                FROM Product_bundle__c
                                WHERE   Active__c = true
                                        AND CurrencyIsoCode IN :allCurrencies
                                        AND Id in : allProductBundlesIds ];

        if(productBundlesList.isEmpty()) return;

        // Build a map of the Product Bundle with the right sObject Product Bundle related to it to ease the creation og the Quote Line Items
        Map<Id, Product_Bundle__c> PBIdPB_Map = new Map<Id, Product_Bundle__c>(productBundlesList);

        // create a set of Product Ids and Pricebook Ids (there's a validation rule that doesn't let select a different pricebook related to the Quote Product Bundle so we can pick this one)
        for (QuoteProductBundle__c qpb: newPQBList)
        {
            Product_Bundle__c pb = PBIdPB_Map.get(qpb.ProductBundle__c);
            allPricebookIds.add(pb.Price_Book__c);
            for (BOM__c b: pb.Bill_of_Material__r)
            {
                allProductsIds.add(b.Product__c);
            }
        }

        // Get the PriceBookEntryId records to be able to create my quote line item
        List<PricebookEntry> pricebookEntries = new List<PricebookEntry>{};
        // add currencies filter as well
        pricebookEntries = [SELECT Id, Product2Id, CurrencyIsoCode, Pricebook2Id
                            FROM PricebookEntry
                            WHERE   Product2Id IN :allProductsIds
                                    AND Pricebook2Id IN : allPricebookIds
                                    AND CurrencyIsoCode in: allCurrencies] ;

        // Perform all the related checks and generate a list of QuoteLine Items to create
        List<QuoteLineItem> quoteLineItemsList_toCreate = new List<QuoteLineItem>{};

        List<AggregateResult> existingLastOrder = [ SELECT QuoteId,Max(SortOrder),COUNT(Id) FROM QuoteLineItem WHERE QuoteId IN :allQuoteIds Group By QuoteId];
        for (QuoteProductBundle__c qpb : newPQBList)
        {
            Product_Bundle__c pb = pbIdpb_Map.get(qpb.ProductBundle__c);
            for (BOM__c bom: pb.Bill_of_Material__r)
            {
                QuoteLineItem qli = new QuoteLineItem();
                qli.QuoteId                 = (Id) qpb.Quote__c ;
                qli.Product2Id              = bom.Product__c ;
                qli.QuoteProductBundle__c   = qpb.Id ;
                qli.Quantity                = bom.Quantity__c;
                qli.UnitPrice               = bom.Unit_Price__c;
                qli.discount                = (bom.Discount__c != null) ? bom.Discount__c : 0;
                qli.RetailPrice__c          = bom.Unit_Price__c;
                qli.BasePrice__c            = bom.Unit_Price__c * (1 - bom.Discount__c/100);
                qli.BaseDiscount__c         = bom.Discount__c;
                qli.SortOrder               = getSortOrder(existingLastOrder, (Id) qpb.Quote__c, bom);
                qli.PricebookEntryId        = getPriceBookEntry(pricebookEntries, bom);
                quoteLineItemsList_toCreate.add(qli);
            }
        }
        if (quoteLineItemsList_toCreate.isEmpty()) return;
        try{
            insert quoteLineItemsList_toCreate ;
        }catch(DmlException ex){

        }
    }

    public static Id getPriceBookEntry(List<PricebookEntry> pricebookEntries, BOM__c bom)
    {
        Id priceBookEntryId;
        for (PricebookEntry pbe : pricebookEntries)
        {
            if (    pbe.Pricebook2Id        == bom.Product_Bundle__r.Price_Book__c
                    && pbe.Product2Id       == bom.Product__c
                    && pbe.CurrencyIsoCode  == bom.CurrencyIsoCode)
            {
                priceBookEntryId = pbe.Id ;
                break;
            }
        }
        return priceBookEntryId;
    }

    /*-------------------------------------------------------------------------------------------------------
    Description:    Returns the right order to set for the new quote line item

    Inputs:         @param existingLastOrder    Aggregate result from quote line items
    Inputs:         @param quoteId              Quote Id
    Inputs:         @param bom                  Bill of material

    Outputs:        Integer                     The right order to set for the new quote line item
    History:
    14-Sep-2022     Houssam     New Method
    --------------------------------------------------------------------------------------------------------*/
    public static Integer getSortOrder(List<AggregateResult> existingLastOrder, Id quoteId, BOM__c bom)
    {
        Integer sortOrder;
        try
        {
            if(bom.SortOrder__c != null)
            {
                if (!existingLastOrder.isEmpty())
                {
                    for (AggregateResult ar : existingLastOrder)
                    {
                        if (quoteId == ar.get('QuoteId'))
                        {
                            if(ar.get('expr0') != null )
                            {
                                sortOrder = Integer.valueOf(bom.SortOrder__c) + Integer.valueOf(ar.get('expr0'));
                            }
                            else
                            {
                                sortOrder = Integer.valueOf(bom.SortOrder__c) + Integer.valueOf(ar.get('expr1'));
                            }

                        }
                    }
                }
                else
                {
                    sortOrder = Integer.valueOf(bom.SortOrder__c);
                }
            }
        }
        catch (Exception ex)
        {
            DebugLog.addException(ex, 'QuoteProductBundleTriggerHelper.getSortOrder');
        }
        return sortOrder;
    }


}