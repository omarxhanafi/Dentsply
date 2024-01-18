/*-------------------------------------------------------------------------------------------------------
Author:         Omar Hanafi (Salesforce) 17/01/2023
Description:    Product Trigger Handler Class
History
----------------------------------------------------------------------------------------*/
public with sharing class ProductTriggerHandler extends TriggerHandler {
    private List<Product2> oldProductList, newProductList;
    private Map<Id, Product2> oldProductMap, newProductMap;

    
    public ProductTriggerHandler() {
        oldProductList = (List<Product2>) Trigger.old;
        newProductList = (List<Product2>) Trigger.new;
        oldProductMap = (Map<Id, Product2>) Trigger.oldMap;
        newProductMap = (Map<Id, Product2>) Trigger.newMap;
    }
    protected override void beforeInsert() {
        ProductTriggerHelper.assignNonERPProduct(newProductList);
    }   
}