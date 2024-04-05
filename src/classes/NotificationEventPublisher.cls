/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    Class to manage Notification__e events publishing
Test class      NotificationEventTest

History
01-01-2024     Create new class
----------------------------------------------------------------------------------------*/
public class NotificationEventPublisher {

    // Pick list values for Context field
    public static final String CVENT_CONTEXT = 'CVENT';
    public static final String EXCEPTION_CONTEXT = 'EXCEPTION LOG';

    // Pick list values for Type field
    public static final String CVENT_TYPE = 'CVENT';
    public static final String EXCEPTION_TYPE = 'EXCEPTION';

    /**
     * Method to publish a new Notification__e event
     * @author hadib@salesforce.com | 01-01-2024
     *
     * @param Context           The context of the platform event, i.e, Exception..
     * @param Type              The Type
     * @param SubType           SubType if needed
     * @param messageContent    The message content
     */
    // Method to publish a new Notification__e event
    public static void publishNotification(String Context, String Type, String SubType, String messageContent)
    {
        Notification__e notificationEvent = new Notification__e();
        notificationEvent.Context__c    = Context;
        notificationEvent.Type__c       = Type;
        notificationEvent.SubType__c    = SubType;
        notificationEvent.Message__c    = messageContent;

        // Publish the event. Use saveResult.isSuccess() To Check if the publish operation was successful
        EventBus.publish(notificationEvent);
    }

    /**
     * Method to publish a new Notification__e event with Additional Info
     * @author hadib@salesforce.com | 01-01-2024
     *
     * @param Context           The context of the platform event, i.e, Exception..
     * @param Type              The Type
     * @param SubType           SubType if needed
     * @param messageContent    The message content
     * @param AdditionalInfo    Additional Info (Long Text Area)
     */
    public static void publishNotification(String Context, String Type, String SubType, String messageContent, String AdditionalInfo)
    {
        Notification__e notificationEvent = new Notification__e();
        notificationEvent.Context__c        = Context;
        notificationEvent.Type__c           = Type;
        notificationEvent.SubType__c        = SubType;
        notificationEvent.Message__c        = messageContent;
        notificationEvent.AdditionalInfo__c = AdditionalInfo;

        // Publish the event. Use saveResult.isSuccess() To Check if the publish operation was successful
        EventBus.publish(notificationEvent);
    }
}