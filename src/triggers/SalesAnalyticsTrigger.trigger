/*------------------------------------------------------------	
Author: 		Omar HANAFI (Salesforce) 2022-11-30
Description:   	Generic Trigger for Sales Analytics (Following Trigger Framework)
------------------------------------------------------------*/

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