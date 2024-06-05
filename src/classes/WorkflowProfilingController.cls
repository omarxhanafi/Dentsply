/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Workflow Profiling Controller Class.
 * @Test-Class      Test_WorkflowProfilingController
 *
 * @History
 * 21-05-2023   Omar     TFUS-000006676 - Excluding Germany, Austria and Switzerland from the global definition
 * 15-09-2023   Omar     TFUS-000006118 - Create Workflow Profiling Controller Class
 * 07-12-2023   Omar     Added the deleteWorkflowProfilings method
 */
public with sharing class WorkflowProfilingController {

    /**
     * getWorkflows Return a list of workflows based on the provided account Id
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param accountId   Account Id to fetch workflows
     *
     * @return List<Workflow__c> - List of workflows
     */
    @AuraEnabled(cacheable=true)
    public static List<Workflow__c> getWorkflows(Id accountId) {
        Account acc = [SELECT Id, Country__c from Account where id = :accountId LIMIT 1];

        if (acc != null) {
            String country = acc.Country__c;

            if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
                return [SELECT Id, WorkflowLabel__c FROM Workflow__c WHERE Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE];
            } else {
                return [
                        SELECT Id, WorkflowLabel__c
                        FROM Workflow__c
                        WHERE ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
                ];
            }
        }

        return null;
    }

    /**
     * getWorkflowProfilingsByAccount Return a list of Workflow Profiling records based on the provided account Id
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param accountId   Account Id to fetch Workflow Profilings
     *
     * @return List<WorkflowProfiling__c> - List of Workflow Profiling records
     */
    @AuraEnabled(cacheable=true)
    public static List<WorkflowProfiling__c> getWorkflowProfilingsByAccount(Id accountId) {
        return [SELECT Id, Name, Rating__c, Account__c, Inactive__c, Workflow__c FROM WorkflowProfiling__c WHERE Account__c = :accountId];
    }

    /**
     * createOrUpdateWorkflowProfilings Upsert or insert Workflow Profiling records based on the provided list of records
     * @author ohanafi@salesforce.com | 15-09-2023
     *
     * @param newRecords   List of Workflow Profiling records to upsert or insert
     */
    @AuraEnabled
    public static void createOrUpdateWorkflowProfilings(List<WorkflowProfiling__c> newRecords) {
        // Fetch existing records
        Map<Id, WorkflowProfiling__c> existingRecordsMap = new Map<Id, WorkflowProfiling__c>();

        if (!newRecords.isEmpty()) {

            Set<Id> accountIds = new Set<Id>();

            for (WorkflowProfiling__c eachWorkflowProfiling : newRecords) {
                accountIds.add(eachWorkflowProfiling.Account__c);
            }

            for (WorkflowProfiling__c existingRecord : [
                    SELECT Id, Workflow__c, Rating__c
                    FROM WorkflowProfiling__c
                    WHERE Account__c = :accountIds
            ]
            ) {
                existingRecordsMap.put(existingRecord.Workflow__c, existingRecord);
            }

            List<WorkflowProfiling__c> recordsToUpsert = new List<WorkflowProfiling__c>();

            // Iterate through new records
            for (WorkflowProfiling__c newRecord : newRecords) {
                // Check if there's a matching existing record
                WorkflowProfiling__c existingRecord = existingRecordsMap.get(newRecord.Workflow__c);

                if (existingRecord != null) {
                    // Update the existing record's rating
                    existingRecord.Rating__c = newRecord.Rating__c;
                    existingRecord.Inactive__c = newRecord.Inactive__c;
                    recordsToUpsert.add(existingRecord);
                } else {
                    // No matching record found, insert a new record
                    recordsToUpsert.add(newRecord);
                }
            }

            // Perform the upsert operation to either insert or update records
            if (!recordsToUpsert.isEmpty()) {
                upsert recordsToUpsert;
            }
        }

    }

    /**
     * getProductFamilyListByWorkflowId Get a list of ProductFamily__c records and its associated Non_ERP_Products__c
     * @author ohanafi@salesforce.com | 22-12-2023
     *
     * @param workflowId   Workflow ID
     * @param accountId   Account ID
     *
     * @return List<ProductFamilyWrapper> - List of ProductFamily__c records
     */
    @AuraEnabled
    public static List<ProductFamilyWrapper> getProductFamilyListByWorkflowId(Id workflowId, Id accountId) {
        List<ProductFamilyWrapper> productFamilyWrapperList = new List<ProductFamilyWrapper>();

        Account acc = [SELECT Id, Country__c from Account where id = :accountId LIMIT 1];

        String country = '';

        if (acc != null) {
            country = acc.Country__c;
        }

        List<ProductFamily__c> productFamilyList = new List<ProductFamily__c>();

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            productFamilyList = [
                    SELECT Id, ProductFamilyLabel__c, (
                            SELECT Id, Name, Competitor_Product__c
                            FROM Non_ERP_Products__r
                            WHERE GlobalProductShowtoallcountries__c = true OR Countries__c INCLUDES (:country)
                    )
                    FROM ProductFamily__c
                    WHERE Id IN (
                            SELECT ProductFamily__c
                            FROM WorkflowLine__c
                            WHERE Workflow__c = :workflowId
                    )
            ];        } else {
            productFamilyList = [
                    SELECT Id, ProductFamilyLabel__c, (
                            SELECT Id, Name, Competitor_Product__c
                            FROM Non_ERP_Products__r
                            WHERE ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
                    )
                    FROM ProductFamily__c
                    WHERE Id IN (
                            SELECT ProductFamily__c
                            FROM WorkflowLine__c
                            WHERE Workflow__c = :workflowId
                    )
            ];
        }



        // Collect Non_ERP_Products__c Ids
        Set<String> nonERPProductIds = new Set<String>();
        for (ProductFamily__c productFamily : productFamilyList) {
            for (Non_ERP_Products__c nonERPProduct : productFamily.Non_ERP_Products__r) {
                nonERPProductIds.add(nonERPProduct.Id);
            }
        }

        // Map to hold active ProductProfiling__c Ids related to Non_ERP_Products__c
        Map<Id, Id> activeNonErpProductsIds = new Map<Id, Id>();

        // Map to hold inactive ProductProfiling__c Ids related to Non_ERP_Products__c
        Map<Id, Id> inactiveNonErpProductsIds = new Map<Id, Id>();

        for (Product_Profiling__c productProfiling : [
                SELECT Id, Product_Name__c, Inactive__c
                FROM Product_Profiling__c
                WHERE Product_Name__c IN :nonERPProductIds AND Account__c = :accountId
        ]) {
            if(!productProfiling.Inactive__c){
                activeNonErpProductsIds.put(productProfiling.Product_Name__c, productProfiling.Id);
            } else {
                inactiveNonErpProductsIds.put(productProfiling.Product_Name__c, productProfiling.Id);
            }
        }

        // Get the order values for each ProductFamily__c in a map
        Map<Id, Integer> familyOrderMap = new Map<Id, Integer>();
        for (WorkflowLine__c line : [SELECT ProductFamily__c, Order__c FROM WorkflowLine__c WHERE Workflow__c = :workflowId]) {
            familyOrderMap.put(line.ProductFamily__c, (Integer) line.Order__c);
        }

        // Populate ProductFamilyWrapperList
        for (ProductFamily__c productFamily : productFamilyList) {
            ProductFamilyWrapper wrapper = new ProductFamilyWrapper(familyOrderMap, productFamily);

            for (Non_ERP_Products__c nonERPProduct : productFamily.Non_ERP_Products__r) {
                if (nonERPProduct.Competitor_Product__c) {
                    Boolean isActive = activeNonErpProductsIds.containsKey(nonERPProduct.Id);
                    Boolean isInactive = inactiveNonErpProductsIds.containsKey(nonERPProduct.Id);
                    wrapper.competitorProducts.add(new NonERPProductWrapper(nonERPProduct, isActive, isInactive, isActive ? activeNonErpProductsIds.get(nonERPProduct.Id) : (isInactive ? inactiveNonErpProductsIds.get(nonERPProduct.Id) : null)));
                } else {
                    Boolean isActive = activeNonErpProductsIds.containsKey(nonERPProduct.Id);
                    Boolean isInactive = inactiveNonErpProductsIds.containsKey(nonERPProduct.Id);
                    wrapper.dsProducts.add(new NonERPProductWrapper(nonERPProduct, isActive, isInactive, isActive ? activeNonErpProductsIds.get(nonERPProduct.Id) : (isInactive ? inactiveNonErpProductsIds.get(nonERPProduct.Id) : null)));
                }
            }

            // Sorting the Non ERP Products alphabetically (asc)
            wrapper.dsProducts.sort();
            wrapper.competitorProducts.sort();

            productFamilyWrapperList.add(wrapper);
        }

        // Sorting Product Families based on the Workflow Lines order
        productFamilyWrapperList.sort();

        return productFamilyWrapperList;

    }

    public class NonERPProductWrapper implements Comparable {
        @AuraEnabled public Non_ERP_Products__c product;
        @AuraEnabled public Boolean active;
        @AuraEnabled public Boolean inactive;
        @AuraEnabled public String productProfilingId;

        public NonERPProductWrapper(Non_ERP_Products__c product, Boolean active, Boolean inactive, String productProfilingId) {
            this.product = product;
            this.active = active;
            this.inactive = inactive;
            this.productProfilingId = productProfilingId;
        }

        public Integer compareTo(Object other) {
            NonERPProductWrapper otherWrapper = (NonERPProductWrapper) other;
            return this.product.Name.compareTo(otherWrapper.product.Name);
        }
    }

    public class ProductFamilyWrapper implements Comparable {
        @AuraEnabled public ProductFamily__c productFamily;
        @AuraEnabled public List<NonERPProductWrapper> competitorProducts;
        @AuraEnabled public List<NonERPProductWrapper> dsProducts;
        private Map<Id, Integer> orderMap; // Map to hold the order

        public ProductFamilyWrapper(Map<Id, Integer> orderMap, ProductFamily__c productFamily) {
            this.competitorProducts = new List<NonERPProductWrapper>();
            this.dsProducts = new List<NonERPProductWrapper>();
            this.orderMap = orderMap;
            this.productFamily = productFamily;
        }

        public ProductFamilyWrapper() {
            this.competitorProducts = new List<NonERPProductWrapper>();
            this.dsProducts = new List<NonERPProductWrapper>();
        }

        // Method to sort Product Families based on the order retrieved from the Workflow Lines
        public Integer compareTo(Object other) {
            Integer thisOrder = orderMap.containsKey(this.productFamily.Id) ? orderMap.get(this.productFamily.Id) : 99999999;
            Integer otherOrder = orderMap.containsKey(((ProductFamilyWrapper)other).productFamily.Id) ? orderMap.get(((ProductFamilyWrapper)other).productFamily.Id) : 99999999;
            if (thisOrder == otherOrder) return 0;
            if (thisOrder > otherOrder) return 1;
            return -1;
        }

    }
}
