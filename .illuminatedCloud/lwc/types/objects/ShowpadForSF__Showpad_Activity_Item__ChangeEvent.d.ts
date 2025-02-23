// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ShowpadForSF__Showpad_Activity_Item__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
    /**
     * <h3><b>Showpad Activity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ShowpadForSF__Showpad_Activity__c})</td></tr>
     * </table>
     */
    ShowpadForSF__Showpad_Activity__c?: string;
    /**
     * <h3><b>Showpad Activity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ShowpadForSF__Showpad_Activity__c})</td></tr>
     * </table>
     */
    ShowpadForSF__Showpad_Activity__r?: ShowpadForSF__Showpad_Activity__c;
    /**
     * <h3><b>Showpad Content</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ShowpadForSF__Showpad_Content__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShowpadForSF__Showpad_Content__c?: string;
    /**
     * <h3><b>Showpad Content</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ShowpadForSF__Showpad_Content__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShowpadForSF__Showpad_Content__r?: ShowpadForSF__Showpad_Content__c;
}