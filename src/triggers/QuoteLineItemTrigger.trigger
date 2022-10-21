/*------------------------------------------------------------
Author:         Miguel Coimbra (Salesforce) 2022-08-08
Description:    Generic Trigger for QuoteLineItem (Following Trigger Framework)
------------------------------------------------------------*/

trigger QuoteLineItemTrigger on QuoteLineItem  (
        before insert
        , before update
        , before delete
        , after insert
        , after update
        , after delete
        , after undelete) {
    new QuoteLineItemTriggerHandler().run();
}