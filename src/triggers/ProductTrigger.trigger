/*------------------------------------------------------------
Author:         Omar Hanafi (Salesforce) 17/01/2023
Description:    Generic Trigger for Product2 (Following Trigger Framework)
------------------------------------------------------------*/
trigger ProductTrigger on Product2  (
    before insert
    , before update) {
    new ProductTriggerHandler().run();
}