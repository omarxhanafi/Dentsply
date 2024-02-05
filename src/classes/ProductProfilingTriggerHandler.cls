/*-------------------------------------------------------------------------------------------------------
Author:         Omar Hanafi (Salesforce) 02/02/2024
Description:    Product Profiling Trigger Handler Class
History
-------------------------------------------------------------------------------------------------------*/
public with sharing class ProductProfilingTriggerHandler extends TriggerHandler {
    private List<Product_Profiling__c> oldProductProfilingList, newProductProfilingList;
    private Map<Id, Product_Profiling__c> oldProductProfilingMap, newProductProfilingMap;

    
    public ProductProfilingTriggerHandler() {
        oldProductProfilingList = (List<Product_Profiling__c>) Trigger.old;
        newProductProfilingList = (List<Product_Profiling__c>) Trigger.new;
        oldProductProfilingMap = (Map<Id, Product_Profiling__c>) Trigger.oldMap;
        newProductProfilingMap = (Map<Id, Product_Profiling__c>) Trigger.newMap;
    }
    protected override void beforeInsert() {
        ProductProfilingTriggerHelper.assignUniqueKeyIdentifier(oldProductProfilingMap, newProductProfilingList);
    }

    protected override void beforeUpdate() {
        ProductProfilingTriggerHelper.assignUniqueKeyIdentifier(oldProductProfilingMap, newProductProfilingList);
    }
}