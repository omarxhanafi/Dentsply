// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FSL__Scheduling_Policy_Goal__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Scheduling Policy</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Scheduling_Policy__c})</td></tr>
     * </table>
     */
    FSL__Scheduling_Policy__c: string;
    /**
     * <h3><b>Scheduling Policy</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Scheduling_Policy__c})</td></tr>
     * </table>
     */
    FSL__Scheduling_Policy__r: FSL__Scheduling_Policy__c;
    /**
     * <h3><b>Service Goal</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Service_Goal__c})</td></tr>
     * </table>
     */
    FSL__Service_Goal__c: string;
    /**
     * <h3><b>Service Goal</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Service_Goal__c})</td></tr>
     * </table>
     */
    FSL__Service_Goal__r: FSL__Service_Goal__c;
    /**
     * <h3><b>Weight</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(9,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Weight__c: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
}