trigger CustomAttendeeTrigger on CventEvents__Attendee__c (before insert, before update, after insert, after update, after delete) {
    new AttendeeTriggerHandler().run();
}