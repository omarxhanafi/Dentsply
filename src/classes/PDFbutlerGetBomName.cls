/**
* This a class to match Story TFUS-000006924
*
* @author Roberto
*/
global inherited sharing class PDFbutlerGetBomName implements cadmus_core.AbstractBeforeActionable {
    /* This an APEX class to meet requirements for PDF format requested in story TFUS-000006924*/
	global void execute(cadmus_core__Actionable__c actionable,
                        Id docConfig,
                        Id objectId,
                        Map<String, Object> inputMap,
    cadmus_core.ConvertController.ConvertDataModel cdm) {
        /* This an APEX class to meet requirements for PDF format requested in story TFUS-000006924*/

        Map<String,Map<String,String>> periodValues=new Map<String, Map<String,String>>();
        List<Map<String, String>> rowsDataList = new List<Map<String, String>>();
        
        //Get DataSources
        final cadmus_core__Data_Source__c dss = [SELECT Id, Name, cadmus_core__CustomerDataSourceId__c,cadmus_core__Image_Name__c
                                                 From cadmus_core__Data_Source__c
                                                 WHERE Name = 'GetBomNameWithAPEX'
                                                 WITH USER_MODE
                                                 LIMIT 1                                                 
                                                ];

        rowsDataList = new List<Map<String, String>>();
		Quote quoteInfo = new Quote();
        quoteInfo = [SELECT id,  (SELECT Id,ProductBundle__r.Id FROM Quote_Product_Bundles__r), 
                     (SELECT Id, Product2Id, QuoteProductBundle__r.ProductBundle__c, Product2.Name, Product2.Article__c, Product2.Description, Quantity, UnitPrice, TotalPrice FROM QuoteLineItems)
					FROM quote
					WHERE Id =:objectId
                    WITH USER_MODE];
        final List<String> bundleIds = new List<String>();
        for(QuoteProductBundle__c bundle : quoteInfo.Quote_Product_Bundles__r){
            bundleIds.add(bundle.ProductBundle__r.Id);
        }
        List<BOM__c> materials = new List<BOM__c>();
        materials = [SELECT Id, Product_bundle__c, Product__c, Product__r.Article__c, Product__r.Name, Name FROM BOM__c WHERE Product_bundle__c IN: bundleIds WITH USER_MODE];
        periodValues=new Map<String, Map<String,String>>();
        Map<String, String> recordRow = new Map<String, String>();

        for(QuoteLineItem qli : quoteInfo.QuoteLineItems){
            recordRow=periodValues.get(qli.Id);
            if(recordRow==null) {
                recordRow=new Map<String,String>();
                recordRow.put('Id', qli.Id);
                rowsDataList.add(recordRow);
            }
            if(qli.QuoteProductBundle__r.ProductBundle__c != null){
                //get name
                final string matName = getMaterialName(qli, materials);
                recordRow.put('APEXBomName', matName);
            }
            

            recordRow.put('APEXProdSKU', qli.Product2.Article__c);
            recordRow.put('APEXProdName', qli.Product2.Name);
            recordRow.put('APEXProdDescription', qli.Product2.Description);
            recordRow.put('APEXProdQuantity', String.valueOf(qli.Quantity));
            recordRow.put('APEXProdSalesPrice', String.valueOf(qli.UnitPrice));
            recordRow.put('APEXProdTotalPrice', String.valueOf(qli.TotalPrice));
            periodValues.put(qli.Id,recordRow);
		}
        inputMap.put(dss.Id,rowsDataList);
    }

    /* this is a method to get bill material name */
    public static String getMaterialName(QuoteLineItem qli, List<BOM__c> materials) {
        string matName = '';
        for(BOM__c material : materials	){
            if(qli.QuoteProductBundle__r.ProductBundle__c == material.Product_bundle__c && qli.Product2Id == material.Product__c){
                matName = material.Name;
            } 
        }
        return matName;
    }
}