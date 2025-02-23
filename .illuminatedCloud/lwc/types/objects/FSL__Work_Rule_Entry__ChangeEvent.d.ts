// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FSL__Work_Rule_Entry__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Work Rule</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Work_Rule__c})</td></tr>
     * </table>
     */
    FSL__Work_Rule__c?: string;
    /**
     * <h3><b>Work Rule</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Work_Rule__c})</td></tr>
     * </table>
     */
    FSL__Work_Rule__r?: FSL__Work_Rule__c;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    RecordType?: RecordType;
    RecordTypeId?: string;
    ReplayId?: string;
}