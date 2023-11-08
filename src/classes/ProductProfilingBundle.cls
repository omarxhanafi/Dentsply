public with sharing class ProductProfilingBundle {
 
    // @AuraEnabled annotation exposes the methods to Lightning Components and Flows
    @AuraEnabled
    public String productId;
 
    @AuraEnabled
    public String productName;
    
    @AuraEnabled
    public String manufacturerName;
 
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
}