/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Sales Analytics Trigger Handler Class.
 * @Test-Class      Test_SalesAnalyticsHandlerTrigger
 *
 * @History
 * 30-11-2022   Omar     Create new Trigger Handler Class
 */

public with sharing class SalesAnalyticsTriggerHandler extends TriggerHandler{
    private List<Sales_Analytics__c> oldSalesAnalyticsList, newSalesAnalyticsList;
    private Map<Id, Sales_Analytics__c> oldSalesAnalyticsMap, newSalesAnalyticsMap;

    public SalesAnalyticsTriggerHandler() {
        oldSalesAnalyticsList = (List<Sales_Analytics__c>) Trigger.old;
        newSalesAnalyticsList = (List<Sales_Analytics__c>) Trigger.new;
        oldSalesAnalyticsMap = (Map<Id, Sales_Analytics__c>) Trigger.oldMap;
        newSalesAnalyticsMap = (Map<Id, Sales_Analytics__c>) Trigger.newMap;
    }
    
    protected override void beforeInsert() {
//        SalesAnalyticsTriggerHelper.createProcedureTrackers(newSalesAnalyticsList);
    }
    
    protected override void beforeUpdate() {
    }
}