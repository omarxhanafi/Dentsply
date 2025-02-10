// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface maps__AdvRouteSettings__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * <h3><b>Available Route Types</b></h3>
     * <p>These are the selected route types</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AvailableRouteTypes__c: string;
    /**
     * <h3><b>Default Working Hours</b></h3>
     * <p>This is the default working hours for all users</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    maps__DefaultWorkingHours__c: string;
    /**
     * <h3><b>OAuth User</b></h3>
     * <p>This is a lookup to the last user that was oauthed</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__OAuthUser__c: string;
    /**
     * <h3><b>OAuth User</b></h3>
     * <p>This is a lookup to the last user that was oauthed</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__OAuthUser__r: User;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ReplayId: string;
}