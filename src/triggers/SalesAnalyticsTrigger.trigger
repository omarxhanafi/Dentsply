/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Sales Analytics Trigger Class.
 * @Test-Class      Test_SalesAnalyticsTrigger
 *
 * @History
 * 30-11-2022   Omar     Create new Trigger Class
 */

trigger SalesAnalyticsTrigger on Sales_Analytics__c (
        before insert
        , before update
        , before delete
        , after insert
        , after update
        , after delete
        , after undelete) {
    new SalesAnalyticsTriggerHandler().run();
}