// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FSL__Crew_Management_User_Settings_Territory__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Crew Management User Settings</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Crew_Management_User_Settings__c})</td></tr>
     * </table>
     */
    FSL__Crew_Management_User_Settings__c?: string;
    /**
     * <h3><b>Crew Management User Settings</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Crew_Management_User_Settings__c})</td></tr>
     * </table>
     */
    FSL__Crew_Management_User_Settings__r?: FSL__Crew_Management_User_Settings__c;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__Service_Territory__c?: string;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__Service_Territory__r?: ServiceTerritory;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
}