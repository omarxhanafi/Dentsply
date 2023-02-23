public with sharing class SimulateContractLineController {
    

    @AuraEnabled
    public static ContractItem__c insertOrUpdateContractItem(ContractItem__c contractLine, Boolean isInsert) {
        try {
            if(isInsert == true){
                insert contractLine;
            } else {
                update contractLine;
            }
            return(contractLine);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'SimulateContractLineController.contractLine');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static ContractItem__c getContractItem(Id contractLineId) {
        //system.debug(contractItem);
        try {
            ContractItem__c contractItem = new ContractItem__c();
            contractItem = [SELECT Id, discountModel__r.MaxDiscountToOffer__c , TGAtlantisManuallyUpdated__c, TGCBCTManuallyUpdated__c, TGPrimescanManuallyUpdated__c, TGSimplantManuallyUpdated__c, TGAtlantis__c, TGCBCT__c, TGImplantSystem__c, TGOssix__c, TGPrimescan__c, TGSimplant__c, Contract__r.Status, Contract__r.AccountId, Segmentation__c, DiscountModel__c, SegmentationDiscount__c, TotalNetSales__c, TotalNetSales2YAgo__c, CurrencyIsoCode, TotalNetSalesDiscount__c, PGsPurchased__c, PGsPurchasedDiscount__c, Growth__c, GrowthDiscount__c, ofYearsPurchasingFromDS__c, ofYearsPurchasingFromDSDiscount__c, RecommendedDiscount__c, OfferedDiscount__c  FROM ContractItem__c WHERE Id =: contractLineId LIMIT 1];       
            return(contractItem);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'SimulateContractLineController.contractLine');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static List<ContractItem__c> getAlreadyAddedContractItems(Id contractId) {
        //system.debug(contractItem);
        try {
            List<ContractItem__c> contractItems = new List<ContractItem__c>();
            contractItems = [SELECT Name, Id  FROM ContractItem__c WHERE Contract__c =: contractId];       
            return(contractItems);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'SimulateContractLineController.contractLine');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static Discount_model__c getRelatedDiscount(Id discountModelId) {
        //system.debug(contractItem);
        try {
            Discount_model__c discountModel = new Discount_model__c();
            discountModel = [SELECT Id, MaxDiscountToOffer__c, Product__c, SAQLQuery__c, CompanyCodes__c, FirstLevelApproval__c, SecondLevelApproval__c, (SELECT Id, MinTotalSalesNet__c, TextMatchResult__c, Discount_lever__c, Allowed_discount__c, MaxNumber__c, MinNumber__c, Equals__c FROM Discount_row__r) FROM Discount_model__c WHERE Id =: discountModelId LIMIT 1];
            return(discountModel);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'SimulateContractLineController.contractLine');
            throw new AuraHandledException(e.getMessage());    
        }
    }

    @AuraEnabled
    public static List<Discount_model__c> getDiscountModels( String accountId) {
        List<Discount_model__c> discountRecords = new List<Discount_model__c>();
        Account acc = new Account();
        acc = [SELECT country__c FROM Account WHERE id =: accountId LIMIT 1];
        discountRecords = [SELECT Id, MaxDiscountToOffer__c, Product__c, SAQLQuery__c, CompanyCodes__c, FirstLevelApproval__c, SecondLevelApproval__c, (SELECT Id, MinTotalSalesNet__c, TextMatchResult__c, Discount_lever__c, Allowed_discount__c, MaxNumber__c, MinNumber__c, Equals__c FROM Discount_row__r) FROM Discount_model__c WHERE Country__c =: acc.Country__c AND Active__c = true ];
        return(discountRecords);
    }

    @AuraEnabled
    public static List<Source_Record__c> getSorceRecords( String accountId,List<String> companyCodes) {
        List<Source_Record__c> sourceRecords = new List<Source_Record__c>();
        sourceRecords = [SELECT Id, Source_Id__c, Combined_Fields__c, Company_Code__c, Customer_Id__c FROM Source_Record__c WHERE CIM_Account__c =: accountId AND Status__c = 'Active' AND Company_Code__c IN :companyCodes ORDER BY Source_Id__c, Company_Code__c];
        system.debug(sourceRecords);
        return(sourceRecords);
    }




/*
    global class ContractSalesDataResponse {
        @InvocableVariable
        global Decimal salesResult;
        
        @InvocableVariable
        global Decimal implantsResult;       
    }

*/




    private static String[] findDatasetVersion(String datasetName){

        HttpRequest req = new HttpRequest();
        
        //Endpoint is built upon a Named Credential called Analytics
        String endpoint = 'callout:Analytics/services/data/v50.0/wave/datasets';
        endpoint = endpoint +'/'+datasetName;
        req.setEndpoint(endpoint);
        req.setHeader('Content-Type', 'application/json');

        //Auth token is collected from Auth. Provider called SalesforceAnalytics
        req.setHeader('Authorization', 'Bearer {!$SalesforceAnalytics.OAuthToken}'); 
        req.setMethod('GET');

        http http = new http();
        HttpResponse res = new HttpResponse();
        
        if (!Test.isRunningTest()) { 
            res = http.send(req);
        }
        else{
            res.setHeader('Content-Type', 'application/json');
            res.setStatusCode(200);
            res.setBody('{"currentVersionId":"12345", "id":"56789", "createdBy":{"id":"00520000001BhymAAC","name":"Force Flow","profilePhotoUrl":"https://dentsplysirona--geo--c.documentforce.com/profilephoto/005/T"}}');
        }     

        Integer calloutStatus = res.getStatusCode();
        List<String> result = new List<String>{};

        //Handle response
        if(calloutStatus == 200){
            Map<String, Object> results = (Map<String, Object>) 
            JSON.deserializeUntyped(res.getBody());
            Map<String,Object> tempMap = (Map<String,Object>)results;

            String datasetId = String.valueOf(tempMap.get('id'));
            String versionId = String.valueOf(tempMap.get('currentVersionId'));

            result.add(datasetId);
            result.add(versionId);
        }
        else{
            System.debug(res.getStatus());
        }

        return result;

    }








    @AuraEnabled
	public static  Map<String,Object> getSalesData(String accountId, String querySAQL){

    List<String> datasetDetails = findDatasetVersion('AccountSalesDetail');
    List<String> datasetAssetsDetails = findDatasetVersion('Assets');
    List<Decimal> salesData = new List<Decimal>{};
    Map<String,Object> results = new Map<String,Object>();
    Account acc = [SELECT Id, OneSF_Id__c FROM Account WHERE Id =: accountId LIMIT 1];

    if(datasetDetails[0]!= null && datasetDetails[1] != null && datasetAssetsDetails[0]!= null && datasetAssetsDetails[1] != null){
        String querySAQLtoFilter = querySAQL;
        querySAQLtoFilter = querySAQLtoFilter.replace('*replaceAccountSalesDetail*',datasetDetails[0] + '/' + datasetDetails[1]);
        querySAQLtoFilter = querySAQLtoFilter.replace('*replaceAssets*',datasetAssetsDetails[0] + '/' + datasetAssetsDetails[1]);
        querySAQLtoFilter = querySAQLtoFilter.replace('*replaceSFDCOneId*',acc.OneSF_Id__c);
        
        String response = '';
        if (!Test.isRunningTest()) {
            ConnectApi.LiteralJson queryresult =  ConnectApi.Wave.executeQuery(querySAQLtoFilter);
            response = queryresult.json;
        }
        else{
            response = '{"results":{"records":[{"NetAmount":3000, "ImplantUnitsQty":30},{"NetAmount":2000, "ImplantUnitsQty":40}]}, "id":"56789"}';   
        }
        results = (Map<String,Object>)JSON.deserializeUntyped(response);

        
        }
        return(results);
    }
}