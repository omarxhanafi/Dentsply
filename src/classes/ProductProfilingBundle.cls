public with sharing class ProductProfilingBundle {
 
    // @AuraEnabled annotation exposes the methods to Lightning Components and Flows
    @AuraEnabled
    public String productId;
 
    @AuraEnabled
    public String productName;

    @AuraEnabled
    public String manufacturerName;

    @AuraEnabled
    public String workflow;

    @AuraEnabled
    public String workflowLine;
 
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
            String workflow,
            String workflowLine
    ) {
        this.productId = productId;
        this.productName = productName;
        this.manufacturerName = manufacturerName;
        this.workflow = workflow;
        this.workflowLine = workflowLine;
    }
}