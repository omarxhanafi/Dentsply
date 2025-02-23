// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface cadmus_core__Pack__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Active</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    cadmus_core__Active__c?: boolean;
    /**
     * <h3><b>Customer Pack Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISBLANK(cadmus_core__Migrated_Customer_Pack_Id__c ) ,IF( ISBLANK(cadmus_core__Migrated_Customer_Pack_Id_2__c ) , $Organization.Id + &#39;_&#39; + Id , cadmus_core__Migrated_Customer_Pack_Id_2__c ) , cadmus_core__Migrated_Customer_Pack_Id__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    cadmus_core__Customer_Pack_Id__c?: string;
    /**
     * <h3><b>Leading Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link cadmus_core__Doc_Config__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Leading_Doc_Config__c?: string;
    /**
     * <h3><b>Leading Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link cadmus_core__Doc_Config__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Leading_Doc_Config__r?: cadmus_core__Doc_Config__c;
    /**
     * <h3><b>Migrated Customer Pack Id 2</b></h3>
     * <p>If you migrate a pack from another Org or a Sandbox, use this field to copy the Pack Id from that other Org/Sandbox</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-sensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Migrated_Customer_Pack_Id_2__c?: string;
    /**
     * <h3><b>Migrated Customer Pack Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Migrated_Customer_Pack_Id__c?: string;
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