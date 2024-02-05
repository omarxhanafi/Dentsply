/*-------------------------------------------------------------------------------------------------	
 * Author            : ohanafi@salesforce.com
 * Description       : Product Profiling trigger helper
 * Test class        : Test_ProductProfilingTriggerHelper
 * History	
 * 02-02-2024         Created ProductProfilingTriggerHelper class (TFUS-000006225)
--------------------------------------------------------------------------------------------------*/
public with sharing class ProductProfilingTriggerHelper {

    /**
     * assignUniqueKeyIdentifier Method that assigns a unique key identifier to the Product Profiling records
     * @author ohanafi@salesforce.com | 02-02-2024
     *
     * @param oldProductProfilingMap   Map of old product profiling records
     * @param newProductProfilingList   List of new product profiling records
     *
     */
    public static void assignUniqueKeyIdentifier(Map<Id, Product_Profiling__c> oldProductProfilingMap, List<Product_Profiling__c> newProductProfilingList){
        // Check if the old map is empty to determine if the records are being inserted
        Boolean isInsert = oldProductProfilingMap == null || oldProductProfilingMap.isEmpty();

        for (Product_Profiling__c record : newProductProfilingList) {
            // Check if the record is new or any relevant fields have changed
            if (isInsert ||
                    (oldProductProfilingMap != null &&
                            (record.Account__c != oldProductProfilingMap.get(record.Id).Account__c ||
                                    record.Contact__c != oldProductProfilingMap.get(record.Id).Contact__c ||
                                    record.Product_Name__c != oldProductProfilingMap.get(record.Id).Product_Name__c))) {

                // Calculate the unique key identifier based on the account, contact and
                String uniqueKeyIdentifier = calculateUniqueKeyIdentifier(record);
                record.Unique_Key_Product_Contact__c = uniqueKeyIdentifier;
            }
        }
    }

    /**
     * calculateUniqueKeyIdentifier Method that calculates the unique key identifier.
     * @author ohanafi@salesforce.com | 02-02-2024
     *
     * @param record The Product Profiling record
     * @return The unique key identifier
     */
    private static String calculateUniqueKeyIdentifier(Product_Profiling__c record) {
        String uniqueKeyIdentifier;
        if (String.isBlank(record.Contact__c)) {
            uniqueKeyIdentifier = (String) record.Account__c + (String) record.Non_Erp_Product_ID__c;
        } else {
            uniqueKeyIdentifier = (String) record.Account__c + (String) record.Contact__c + (String) record.Non_Erp_Product_ID__c;
        }
        return uniqueKeyIdentifier;
    }
}