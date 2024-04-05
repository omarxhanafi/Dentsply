/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Platform Event Trigger Handler
Test class      NotificationEventTest

History
01-01-2024      Create new class
----------------------------------------------------------------------------------------*/
public class NotificationTriggerHandler extends TriggerHandler {
    private List<Notification__e> newNotificationList;

    public NotificationTriggerHandler() {
        newNotificationList = (List<Notification__e>) Trigger.new;
    }

    protected override void afterInsert() {
        NotificationTriggerHelper.logExceptionInstantly(newNotificationList);
    }
}