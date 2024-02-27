/**
 * Created by ohanafi on 25/1/2024.
 */
public class BatchCalculatePPUniqueKey implements Database.Batchable<sObject> {

    // Query to retrieve all Product Profiling records
    public Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator('SELECT Id, Account__c, Contact__c, Non_Erp_Product_ID__c, DEPUniqueKey__c FROM Product_Profiling__c');
    }

    // Calculate and set the unique key identifier
    public void execute(Database.BatchableContext BC, List<Product_Profiling__c> scope) {
        for(Product_Profiling__c record : scope) {
            // Calculate the unique key identifier based on account, contact, and Non_Erp_Product_ID__c
            String uniqueKeyIdentifier;
            if (String.isBlank(record.Contact__c)) { // We use the 15-digit ID
                uniqueKeyIdentifier = String.valueOf(record.Account__c).substring(0, 15) + String.valueOf(record.Non_Erp_Product_ID__c).substring(0, 15);
            } else {
                uniqueKeyIdentifier = String.valueOf(record.Account__c).substring(0, 15) +
                        String.valueOf(record.Contact__c).substring(0, 15) +
                        String.valueOf(record.Non_Erp_Product_ID__c).substring(0, 15);
            }
            record.DEPUniqueKey__c = uniqueKeyIdentifier;
        }
        update scope;
    }

    public void finish(Database.BatchableContext BC) {
    }
}
