/*-------------------------------------------------------------------------------------------------
 * Author            : ohanafi@salesforce.com
 * Description       : Batch running the trigger on the product records with the provided PG Codes
 * Test class        : Test_BatchUpdateProducts
 * History
 * 25-01-2024         Created BatchUpdateProducts class (TFUS-000006225)
--------------------------------------------------------------------------------------------------*/

global class BatchUpdateProducts implements Database.Batchable<sObject> {
    private Set<String> pg1Codes;
    private Set<String> pg2Codes;
    private Set<String> pg3Codes;
    private Set<String> pg4Codes;

    public BatchUpdateProducts(Set<String> pg1Codes, Set<String> pg2Codes, Set<String> pg3Codes, Set<String> pg4Codes) {
        this.pg1Codes = pg1Codes;
        this.pg2Codes = pg2Codes;
        this.pg3Codes = pg3Codes;
        this.pg4Codes = pg4Codes;
    }

    global Database.QueryLocator start(Database.BatchableContext BC) {
        String query = 'SELECT Id, PG1_Code__c, PG2_Code__c, PG3_Code__c, PG4_Code__c FROM Product2 ' +
                'WHERE PG1_Code__c IN :pg1Codes ' +
                'OR GlobalSKUMapping__r.PG1_Code__c IN :pg1Codes ' +
                'OR PG2_Code__c IN :pg2Codes ' +
                'OR GlobalSKUMapping__r.PG2_Code__c IN :pg2Codes ' +
                'OR PG3_Code__c IN :pg3Codes ' +
                'OR GlobalSKUMapping__r.PG3_Code__c IN :pg3Codes ' +
                'OR PG4_Code__c IN :pg4Codes ' +
                'OR GlobalSKUMapping__r.PG4_Code__c IN :pg4Codes ';
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext BC, List<Product2> records) {
        try{
            for (Product2 product : records) {
                product.PG1_Code__c = product.PG1_Code__c != null ? product.PG1_Code__c += 'XX' : 'XX';
                product.PG2_Code__c = product.PG2_Code__c != null ? product.PG2_Code__c += 'XX' : 'XX';
                product.PG3_Code__c = product.PG3_Code__c != null ? product.PG3_Code__c += 'XX' : 'XX';
                product.PG4_Code__c = product.PG4_Code__c != null ? product.PG4_Code__c += 'XX' : 'XX';
            }
            update records;

            for (Product2 product : records) {
                if (product.PG1_Code__c != null) product.PG1_Code__c = product.PG1_Code__c.substring(0, product.PG1_Code__c.length() - 2);
                if (product.PG2_Code__c != null) product.PG2_Code__c = product.PG2_Code__c.substring(0, product.PG2_Code__c.length() - 2);
                if (product.PG3_Code__c != null) product.PG3_Code__c = product.PG3_Code__c.substring(0, product.PG3_Code__c.length() - 2);
                if (product.PG4_Code__c != null) product.PG4_Code__c = product.PG4_Code__c.substring(0, product.PG4_Code__c.length() - 2);
            }
            update records;
        } catch (DmlException e){
            DebugLog.addException(e, 'Error occurred on: BatchUpdateProducts ');
        }
    }

    global void finish(Database.BatchableContext BC) {
        DebugLog.addinfo('Batch finished successfully: BatchUpdateProducts JobId:', bc.getJobId());    }
}
