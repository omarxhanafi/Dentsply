/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Quote Trigger
Test class      Test_QuoteTriggerHandler

History
8-Sept-2022     Create new Trigger
----------------------------------------------------------------------------------------*/
trigger QuoteTrigger on Quote (
        before insert,
        before update,
        before delete,
        after insert,
        after update,
        after delete,
        after undelete) {
    new QuoteTriggerHandler().run();
}