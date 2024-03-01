/*----------------------------------------------------------------------------------------
Author:         Omar Hanafi (Salesforce) 02/02/2024
Description:    Generic Trigger for Product_Profiling__c (Following Trigger Framework)
----------------------------------------------------------------------------------------*/
trigger ProductProfilingTrigger on Product_Profiling__c  (
    before insert
    , before update
    , before delete ) {
    new ProductProfilingTriggerHandler().run();
}