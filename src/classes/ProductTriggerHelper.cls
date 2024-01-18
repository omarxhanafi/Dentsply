/*-------------------------------------------------------------------------------------------------	
 * Author            : ohanafi@salesforce.com
 * Description       : Product trigger helper
 * Test class        : Test_ProductTriggerHelper
 * History	
 * 17-01-2023         Created ProductTriggerHelper class (TFUS-000006278)
--------------------------------------------------------------------------------------------------*/
public with sharing class ProductTriggerHelper {
    public static void assignNonERPProduct(List<Product2> newProductList) {
        // Query all Non ERP Products that have a non-null AssignmentRuleCodes__c
        List<Non_ERP_Products__c> nonErpProducts = [
                SELECT Id, AssignmentRuleCodes__c, ProductFamily__c
                FROM Non_ERP_Products__c
                WHERE AssignmentRuleCodes__c != null
        ];

        // Process the Non ERP Products to create a mapping from each individual code to the Non ERP Product record
        Map<String, Non_ERP_Products__c> codeToNonErpProductMap = new Map<String, Non_ERP_Products__c>();
        for (Non_ERP_Products__c nonErpProduct : nonErpProducts) {
            // Split the AssignmentRuleCodes__c by semicolon and map each code to the Non ERP Product record
            List<String> ruleCodes = nonErpProduct.AssignmentRuleCodes__c.split(';');
            for (String code : ruleCodes) {
                codeToNonErpProductMap.put(code, nonErpProduct);
            }
        }

        // For each Product2, check if any of its PG codes match a Non ERP Product
        for (Product2 eachProduct : newProductList) {
            // Iterate over PG codes in priority order and update Product2 fields if a match is found
            for (String pgField : new List<String>{'PG4_Code__c', 'PG3_Code__c', 'PG2_Code__c', 'PG1_Code__c'}) {
                String pgCode = (String)eachProduct.get(pgField);
                if (pgCode != null && codeToNonErpProductMap.containsKey(pgCode)) {
                    Non_ERP_Products__c matchingNonErpProduct = codeToNonErpProductMap.get(pgCode);
                    eachProduct.NonErpProduct__c = matchingNonErpProduct.Id;
                    eachProduct.GlobalProductFamily__c = matchingNonErpProduct.ProductFamily__c;
                    break; // Stop checking other PG codes if a match is found
                }
            }
        }

//        System.debug('Updated product list : ' + newProductList);
    }
}