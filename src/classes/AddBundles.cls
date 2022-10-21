/*-------------------------------------------------------------------------------------------------------
Author: 	    	Roberto Narbona 20220824
Description:   	This is a controller for addBundles LWC
History	

--------------------------------------------------------------------------------------------------------*/


public with sharing class AddBundles {


    @AuraEnabled
    public static List<Product_bundle__c> getPricebookBundles(String pricebookId) {
        
        List<Product_bundle__c> bundles = new List<Product_bundle__c>();
        bundles = [ SELECT Id, Total_price__c, Name, CurrencyIsoCode, Description__c, (SELECT Name, Quantity__c, Product__r.Name, Row_price__c, Id, Discount__c, CurrencyIsoCode FROM Bill_of_Material__r), (SELECT Id, ContentDocumentId FROM AttachedContentDocuments ORDER BY CreatedDate DESC NULLS FIRST)  FROM Product_bundle__c WHERE Price_Book__c =: pricebookId AND Active__c = true];
        return(bundles);
    }

    @AuraEnabled(cacheable=true)
    public static List<PriceBook2> getPriceBooks() {
        try {
            Map<Id, Pricebook2> pricebookMap = new Map<Id, Pricebook2>([
                SELECT Id, Name, ShowPricingfromMicroServiceOM__c  
                FROM Pricebook2 
                WHERE IsActive = true AND Name != 'Standard Price Book' AND Name != 'Sirona Products' AND (ObjectTypeUseOM__c = 'Opportunity' OR ObjectTypeUseOM__c = '')
                ORDER BY Name ASC
            ]);

            List<Pricebook2> pbWithReadAccessList = new List<Pricebook2>();
            for (UserRecordAccess recordAccess : [
                SELECT RecordId 
                FROM UserRecordAccess 
                WHERE UserId= :UserInfo.getUserId() AND HasReadAccess = true AND RecordId IN :pricebookMap.keySet() 
                LIMIT 200
            ]) {
                pbWithReadAccessList.add(pricebookMap.get(recordAccess.RecordId));
            }
            pbWithReadAccessList.sort();

            return pbWithReadAccessList;
        }
        catch (Exception e) {
            DebugLog.addException(e, 'AddBundles.getPriceBooks');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static Boolean updateRecord(String quoteId, String pricebookId) {
        try {
            Quote quoteToUpdate = new Quote();
            quoteToUpdate.Id = quoteId;
            quoteToUpdate.Pricebook2Id = pricebookId;
            update quoteToUpdate;
            return(false);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'AddBundles.updateRecord');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static Boolean insertQuoteBundles(List<QuoteProductBundle__c> quoteBundlesToInsert) {
        try {
            insert quoteBundlesToInsert;
            return(true);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'AddBundles.insertQuoteBundles');
            throw new AuraHandledException(e.getMessage());    
        }
    }
}