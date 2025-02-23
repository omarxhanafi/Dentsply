// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GlobalAdminSettings__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Assign Suggested Owner to Sales Leads</b></h3>
     * <p>It will assign suggested owners to the new sales lead record inserted or imported. The sales lead records should not have an owner pre-populated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    AssignSuggestedOwnerToSalesLeads__c?: boolean;
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
    SetupOwner?: SObject;
    SetupOwnerId?: string;
}