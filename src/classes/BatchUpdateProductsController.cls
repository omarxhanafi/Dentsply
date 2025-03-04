/**
 * @Author          Omar HANAFI (ohanafi@salesforce.com)
 * @Description     Controller for managing the BatchUpdateProducts process.
 *                  This class handles the batch execution, tracks its progress,
 *                  retrieves historical job data, and checks for running jobs.
 * @Test-Class      Test_BatchUpdateProductsController
 *
 * @History
 * 27-02-2025       Omar HANAFI           Created initial version.
 */

public with sharing class BatchUpdateProductsController {

    /**
     * runBatch Starts the BatchUpdateProducts batch job.
     *          It collects PG codes from Non_ERP_Products__c records and passes them to the batch class.
     * @author ohanafi@salesforce.com | 27-02-2025
     *
     * @return Id - The Id of the executed batch job.
     */
    @AuraEnabled
    public static Id runBatch() {
        // Init sets for PG codes
        Set<String> pg1Codes = new Set<String>();
        Set<String> pg2Codes = new Set<String>();
        Set<String> pg3Codes = new Set<String>();
        Set<String> pg4Codes = new Set<String>();

        // Query Non_ERP_Products__c records to retrieve PG codes
        List<Non_ERP_Products__c> nonErpProducts = [
                SELECT Id, AssignmentRuleCodes__c
                FROM Non_ERP_Products__c
                WHERE ProductFamily__c != null AND Competitor_Product__c = FALSE
        ];

        Set<String> pgCodes = new Set<String>();

        for (Non_ERP_Products__c product : nonErpProducts) {
            if (product.AssignmentRuleCodes__c != null && product.AssignmentRuleCodes__c != '') {
                pgCodes.addAll(product.AssignmentRuleCodes__c.replaceAll('\\s', '').split(','));
            }
        }

        // Categorize PG codes by their length
        for(String eachPgCode : pgCodes){
            if(eachPgCode.length() == 2 || eachPgCode.length() == 3){
                pg1Codes.add(eachPgCode);
            } else if(eachPgCode.length() == 4){
                pg2Codes.add(eachPgCode);
            } else if(eachPgCode.length() == 5){
                pg3Codes.add(eachPgCode);
            } else if(eachPgCode.length() == 6){
                pg4Codes.add(eachPgCode);
            }
        }

        // Execute the batch job
        BatchUpdateProducts batch = new BatchUpdateProducts(pg1Codes, pg2Codes, pg3Codes, pg4Codes);
        return Database.executeBatch(batch, 200);
    }

    /**
     * getJobStatus Retrieves the status of a specific batch job.
     * @author ohanafi@salesforce.com | 27-02-2025
     *
     * @param jobId - The Id of the batch job to track.
     *
     * @return AsyncApexJob - The status information for the batch job.
     */
    @AuraEnabled
    public static AsyncApexJob getJobStatus(Id jobId) {
        return [
                SELECT Id, Status, JobType, CreatedDate, CompletedDate, NumberOfErrors, TotalJobItems, JobItemsProcessed
                FROM AsyncApexJob
                WHERE Id = :jobId
                LIMIT 1
        ];
    }

    /**
     * getHistoricalJobs Retrieves historical data for the BatchUpdateProducts process.
     * @author ohanafi@salesforce.com | 27-02-2025
     *
     * @return List<BatchUpdateProductsLog__c> - List of historical job logs.
     */
    @AuraEnabled
    public static List<BatchUpdateProductsLog__c> getHistoricalJobs() {
        return [
                SELECT Id, JobId__c, StartTime__c, EndTime__c, Duration__c, Status__c,
                        ProductCount__c, NumberOfErrors__c, JobItemsProcessed__c
                FROM BatchUpdateProductsLog__c
                ORDER BY StartTime__c DESC
        ];
    }

    /**
     * getRunningJob Checks if there is an active batch job for the BatchUpdateProducts process.
     * @author ohanafi@salesforce.com | 27-02-2025
     *
     * @return AsyncApexJob - The status of the currently running job, if any.
     */
    @AuraEnabled(cacheable=true)
    public static AsyncApexJob getRunningJob() {
        // Query for a running job of this batch class
        List<AsyncApexJob> jobs = [
                SELECT Id, Status, JobItemsProcessed, TotalJobItems
                FROM AsyncApexJob
                WHERE Status IN ('Queued', 'Processing', 'Preparing')
                AND JobType = 'BatchApex'
                AND ApexClass.Name = 'BatchUpdateProducts'
                ORDER BY CreatedDate DESC
                LIMIT 1
        ];
        return jobs.isEmpty() ? null : jobs[0];
    }
}