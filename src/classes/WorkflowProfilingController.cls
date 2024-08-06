/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Workflow Profiling Controller Class.
 * @Test-Class      Test_WorkflowProfilingController
 *
 * @History
 * 15-09-2023   Omar     TFUS-000006118 - Create Workflow Profiling Controller Class
 * 07-12-2023   Omar     Added the deleteWorkflowProfilings method
 * 21-05-2024   Omar     TFUS-000006676 - Excluding Germany, Austria and Switzerland from the global definition
 * 05-08-2024   Omar     TFUS-000006810 / TFUS-000006847 - Creating a PP record from the WP component & Prioritizing displaying PP records that are linked to the account
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

        // Getting the list of product families
        List<ProductFamily__c> productFamilyList = getProductFamilyList(country, workflowId);

        // Collect Non_ERP_Products__c Ids
        Set<String> nonERPProductIds = new Set<String>();
        for (ProductFamily__c productFamily : productFamilyList) {
            for (Non_ERP_Products__c nonERPProduct : productFamily.Non_ERP_Products__r) {
                nonERPProductIds.add(nonERPProduct.Id);
            }
        }

        List<Product_Profiling__c> productProfilingList = [
                SELECT Id, Product_Name__c, Inactive__c, Contact__c
                FROM Product_Profiling__c
                WHERE Product_Name__c IN :nonERPProductIds AND Account__c = :accountId
        ];

        // Get the order values for each ProductFamily__c in a map
        Map<Id, Integer> familyOrderMap = new Map<Id, Integer>();
        for (WorkflowLine__c line : [SELECT ProductFamily__c, Order__c FROM WorkflowLine__c WHERE Workflow__c = :workflowId]) {
            familyOrderMap.put(line.ProductFamily__c, (Integer) line.Order__c);
        }

        // Populate ProductFamilyWrapperList
        for (ProductFamily__c productFamily : productFamilyList) {
            ProductFamilyWrapper wrapper = new ProductFamilyWrapper(familyOrderMap, productFamily);

            for (Non_ERP_Products__c nonERPProduct : productFamily.Non_ERP_Products__r) {
                Product_Profiling__c selectedPPRecord = findProductProfilingRecord(productProfilingList, nonERPProduct);

                if(!nonERPProduct.Competitor_Product__c){
                    if(selectedPPRecord != null){
                        wrapper.dsProducts.add(new NonERPProductWrapper(nonERPProduct, !selectedPPRecord.Inactive__c, selectedPPRecord.Inactive__c, selectedPPRecord.Id));
                    } else {
                        wrapper.dsProducts.add(new NonERPProductWrapper(nonERPProduct, false, false, null));
                    }

                } else {
                    if(selectedPPRecord != null){
                        wrapper.competitorProducts.add(new NonERPProductWrapper(nonERPProduct, !selectedPPRecord.Inactive__c, selectedPPRecord.Inactive__c, selectedPPRecord.Id));
                    } else {
                        wrapper.competitorProducts.add(new NonERPProductWrapper(nonERPProduct, false, false, null));
                    }
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

    /**
     * findProductProfilingRecord Find the corresponding PP record from a Non ERP Product by prioritizing the ones that are linked to the account instead of the contact
     * @author ohanafi@salesforce.com | 05-08-2024
     *
     * @param productProfilingList   List of PP records
     * @param nonERPProduct   Non ERP Product
     *
     * @return Product_Profiling__c - Selected PP record
     */
    private static Product_Profiling__c findProductProfilingRecord(List<Product_Profiling__c> productProfilingList, Non_ERP_Products__c nonERPProduct) {
        List<Product_Profiling__c> matchingPPRecords = new List<Product_Profiling__c>();
        Product_Profiling__c selectedPPRecord = null;

        for (Product_Profiling__c eachProductProfiling : productProfilingList) {
            if (eachProductProfiling.Product_Name__c == nonERPProduct.Id) {
                matchingPPRecords.add(eachProductProfiling);
            }
        }

        if (!matchingPPRecords.isEmpty()) {
            // Prioritize records linked to the Account (Contact__c == null)
            List<Product_Profiling__c> accountPPRecords = new List<Product_Profiling__c>();
            for (Product_Profiling__c record : matchingPPRecords) {
                if (record.Contact__c == null) {
                    accountPPRecords.add(record);
                }
            }

            if (!accountPPRecords.isEmpty()) {
                // From accountPPRecords, prioritize active ones
                List<Product_Profiling__c> activeRecords = new List<Product_Profiling__c>();
                for (Product_Profiling__c record : accountPPRecords) {
                    if (!record.Inactive__c) {
                        activeRecords.add(record);
                    }
                }

                if (!activeRecords.isEmpty()) {
                    // Choose the first active record
                    selectedPPRecord = activeRecords[0];
                } else {
                    // If no active record, choose the first record with Contact__c == null
                    selectedPPRecord = accountPPRecords[0];
                }
            } else {
                // If no records with Contact__c == null, prioritize active ones from matching records
                List<Product_Profiling__c> activeRecords = new List<Product_Profiling__c>();
                for (Product_Profiling__c record : matchingPPRecords) {
                    if (!record.Inactive__c) {
                        activeRecords.add(record);
                    }
                }

                if (!activeRecords.isEmpty()) {
                    // Choose the first active record
                    selectedPPRecord = activeRecords[0];
                } else {
                    // If no active record, choose the first matching record
                    selectedPPRecord = matchingPPRecords[0];
                }
            }
        }
        return selectedPPRecord;
    }

    /**
     * getProductFamilyList Get a list of ProductFamily__c records based on the country and the workflow
     * @author ohanafi@salesforce.com | 05-08-2024
     *
     * @param country   Country
     * @param workflowId   Workflow ID
     *
     * @return List<ProductFamily__c> - List of ProductFamily__c records
     */
    private static List<ProductFamily__c> getProductFamilyList(String country, Id workflowId) {
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
            ];
        } else {
            productFamilyList = [
                    SELECT Id, ProductFamilyLabel__c, (
                            SELECT Id, Name, Competitor_Product__c
                            FROM Non_ERP_Products__r
                            WHERE ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT (Countries__c INCLUDES (:country))))))
                    )
                    FROM ProductFamily__c
                    WHERE Id IN (
                            SELECT ProductFamily__c
                            FROM WorkflowLine__c
                            WHERE Workflow__c = :workflowId
                    )
            ];
        }

        return productFamilyList;
    }

    /**
     * createProductProfiling Creates a new Product Profiling record for the given Account and Non ERP Product Id
     * @author ohanafi@salesforce.com | 28-06-2024
     *
     * @param accountId          Account Id
     * @param nonErpProductId    Non ERP Product Id
     */
    @AuraEnabled
    public static void createProductProfiling(Id accountId, Id nonErpProductId) {
        Product_Profiling__c newPPRecord = new Product_Profiling__c();
        newPPRecord.Account__c = accountId;
        newPPRecord.Product_Name__c = nonErpProductId;

        try {
            insert newPPRecord;
        } catch (Exception e) {
            DebugLog.addException(e, 'WorkflowProfilingController.createProductProfiling');
        }
    }


    /**
     * Wrapper class for Non_ERP_Products__c.
     */
    public class NonERPProductWrapper implements Comparable {
        //The product associated with the wrapper.
        @AuraEnabled public Non_ERP_Products__c product;

        //Indicates if the product is active.
        @AuraEnabled public Boolean active;

        //Indicates if the product is inactive.
        @AuraEnabled public Boolean inactive;

        //The ID of the product profiling record.
        @AuraEnabled public String productProfilingId;

        /**
         * Constructor for NonERPProductWrapper.
         *
         * @param product The Non_ERP_Products__c object.
         * @param active Boolean indicating if the product is active.
         * @param inactive Boolean indicating if the product is inactive.
         * @param productProfilingId The ID of the product profiling record.
         */
        public NonERPProductWrapper(Non_ERP_Products__c product, Boolean active, Boolean inactive, String productProfilingId) {
            this.product = product;
            this.active = active;
            this.inactive = inactive;
            this.productProfilingId = productProfilingId;
        }

        /**
         * Compares this NonERPProductWrapper to another based on product name.
         *
         * @param other
         * @return Integer Comparison result.
         */
        public Integer compareTo(Object other) {
            NonERPProductWrapper otherWrapper = (NonERPProductWrapper) other;
            return this.product.Name.compareTo(otherWrapper.product.Name);
        }
    }

    /**
     * Wrapper class for ProductFamily__c.
     */
    public class ProductFamilyWrapper implements Comparable {

        //The product family associated with the wrapper.
        @AuraEnabled public ProductFamily__c productFamily;

        //List of competitor products.
        @AuraEnabled public List<NonERPProductWrapper> competitorProducts;

        //List of DS products.
        @AuraEnabled public List<NonERPProductWrapper> dsProducts;

        //Map to hold the order of product families.
        private Map<Id, Integer> orderMap;

        /**
         * Constructor for ProductFamilyWrapper.
         *
         * @param orderMap Map containing the order of product families.
         * @param productFamily The ProductFamily__c object.
         */
        public ProductFamilyWrapper(Map<Id, Integer> orderMap, ProductFamily__c productFamily) {
            this.competitorProducts = new List<NonERPProductWrapper>();
            this.dsProducts = new List<NonERPProductWrapper>();
            this.orderMap = orderMap;
            this.productFamily = productFamily;
        }

        /**
         * Default constructor for ProductFamilyWrapper.
         */
        public ProductFamilyWrapper() {
            this.competitorProducts = new List<NonERPProductWrapper>();
            this.dsProducts = new List<NonERPProductWrapper>();
        }

        /**
         * Method to sort Product Families based on the order retrieved from the Workflow Lines
         *
         * @param other
         * @return Integer Comparison result.
         */
        public Integer compareTo(Object other) {
            Integer thisOrder = orderMap.containsKey(this.productFamily.Id) ? orderMap.get(this.productFamily.Id) : 99999999;
            Integer otherOrder = orderMap.containsKey(((ProductFamilyWrapper)other).productFamily.Id) ? orderMap.get(((ProductFamilyWrapper)other).productFamily.Id) : 99999999;
            if (thisOrder == otherOrder){
                return 0;
            }
            if (thisOrder > otherOrder){
                return 1;
            }
            return -1;
        }

    }
}
