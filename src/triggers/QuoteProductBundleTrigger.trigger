/*------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-08-08
Description:    Generic Trigger for QuoteProductBundle__c (Following Trigger Framework)
------------------------------------------------------------*/

trigger QuoteProductBundleTrigger on QuoteProductBundle__c  (
        before insert
        , before update
        , before delete
        , after insert
        , after update
        , after delete
        , after undelete) {
    new QuoteProductBundleTriggerHandler().run();
}