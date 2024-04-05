trigger AttendeeTempTrigger on CventEvents__AttendeeTemp__c (after insert, before insert,after update) {
    new AttendeeTempTriggerHandler().run();
}