trigger NotificationTrigger on Notification__e (after insert) {
    new NotificationTriggerHandler().run();
}