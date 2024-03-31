/*-------------------------------------------------------------------------------------------------	
 * Author            : ohanafi@salesforce.com
 * Description       : Product trigger helper
 * Test class        : Test_ProductTrigger
 * History	
 * 17-01-2024         Created ProductTriggerHelper class (TFUS-000006278)
--------------------------------------------------------------------------------------------------*/
public with sharing class ProductTriggerHelper {

    /**
     * assignNonERPProduct Assigns a Non ERP Product and Product Family to the provided list of Products
     * @author ohanafi@salesforce.com | 17-01-2024
     *
     * @param oldProductMap   Map of old products
     * @param newProductList   List of new products
     *
     */
    public static void assignNonERPProduct(Map<Id, Product2> oldProductMap, List<Product2> newProductList) {
        // Query all Non ERP Products that have a non-null AssignmentRuleCodes__c
        List<Non_ERP_Products__c> nonErpProducts = [
                SELECT Id, AssignmentRuleCodes__c, ProductFamily__c
                FROM Non_ERP_Products__c
                WHERE AssignmentRuleCodes__c != null
        ];

        // Create a map to associate codes with Non ERP Products
        Map<String, Non_ERP_Products__c> codeToNonErpProductMap = new Map<String, Non_ERP_Products__c>();
        for (Non_ERP_Products__c nonErpProduct : nonErpProducts) {
            List<String> ruleCodes = nonErpProduct.AssignmentRuleCodes__c.split(',');
            for (String code : ruleCodes) {
                codeToNonErpProductMap.put(code, nonErpProduct);
            }
        }

        // Iterate over the new Product2 records
        for (Product2 newProduct : newProductList) {
            Product2 oldProduct = (oldProductMap != null) ? oldProductMap.get(newProduct.Id) : null;

            Boolean shouldProcess = oldProductMap == null; // Process by default if it's an insert operation

            // For updates, check if any of the PG codes have been updated
            if (oldProduct != null) {
                for (String pgField : new List<String>{'PG4_Code__c', 'PG3_Code__c', 'PG2_Code__c', 'PG1_Code__c'}) {
                    if (newProduct.get(pgField) != oldProduct.get(pgField)) {
                        shouldProcess = true;
                        break; // If any PG code has changed, we should process this record
                    }
                }
            }

            // We check the PG codes by order
            if (shouldProcess) {
                for (String pgField : new List<String>{'PG4_Code__c', 'PG3_Code__c', 'PG2_Code__c', 'PG1_Code__c'}) {
                    String pgCode = (String)newProduct.get(pgField);
                    if (pgCode != null && codeToNonErpProductMap.containsKey(pgCode)) {
                        Non_ERP_Products__c matchingNonErpProduct = codeToNonErpProductMap.get(pgCode);
                        newProduct.NonErpProduct__c = matchingNonErpProduct.Id;
                        newProduct.GlobalProductFamily__c = matchingNonErpProduct.ProductFamily__c;
                        break; // Stop checking other PG codes if a match is found
                    }
                }
            }
        }
    }
}