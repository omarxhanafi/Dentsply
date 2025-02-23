// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface cadmus_core__Cadmus_Property__ChangeEvent extends SObject 
{
    /**
     * <h3><b>PropertyJson</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(100000)</td></tr>
     * </table>
     */
    cadmus_core__PropertyJson__c?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ReplayId?: string;
}