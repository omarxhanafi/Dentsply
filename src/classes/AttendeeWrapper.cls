/*-------------------------------------------------------------------------------------------------------
Description:    Wrapper to help the communication between LWC & Controller
History
2023-03-13      Houssam ADIB        Create New Wrapper
----------------------------------------------------------------------------------------*/
public class AttendeeWrapper {

    @AuraEnabled
    public CventEvents__Event__c            event           { get; set; }
    @AuraEnabled
    public CventEvents__AttendeeTemp__c     tempAttendee    { get; set; }
    @AuraEnabled
    public CventEvents__Attendee__c         attendee        { get; set; }
    @AuraEnabled
    public Lead                             lead            { get; set; }
    @AuraEnabled
    public Contact                          contact         { get; set; }
    @AuraEnabled
    public Boolean                          matched         { get; set; }

}