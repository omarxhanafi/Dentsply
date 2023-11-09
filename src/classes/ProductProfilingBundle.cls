public with sharing class ProductProfilingBundle {
 
    // @AuraEnabled annotation exposes the methods to Lightning Components and Flows
    @AuraEnabled
    public String productId;
 
    @AuraEnabled
    public String productName;

    @AuraEnabled
    public String manufacturerName;

    @AuraEnabled
    public String productFamilyLabel;
 
    // Define the structure of the Apex-Defined Variable
    public ProductProfilingBundle(
            String productId,
            String productName,
            String manufacturerName
    ) {
        this.productId = productId;
        this.productName = productName;
        this.manufacturerName = manufacturerName;
    }

    public ProductProfilingBundle(
            String productId,
            String productName,
            String manufacturerName,
            String productFamilyLabel
    ) {
        this.productId = productId;
        this.productName = productName;
        this.manufacturerName = manufacturerName;
        this.productFamilyLabel = productFamilyLabel;
    }
}