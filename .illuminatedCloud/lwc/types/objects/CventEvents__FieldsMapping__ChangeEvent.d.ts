// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CventEvents__FieldsMapping__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Cvent Field</b></h3>
     * <p>Attendee Temp field API name used for mapping.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__CventField__c: string;
    /**
     * <h3><b>Cvent Object</b></h3>
     * <p>Stores mnemonic Cvent object name (either &#39;EVENT&#39;, &#39;SESSION&#39;, &#39;CONTACT&#39;, &#39;ATTENDEE&#39; or &#39;RESPONDENT&#39;).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(64)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__CventObject__c: string;
    /**
     * <h3><b>Default Value</b></h3>
     * <p>Value which is filled in the target field in case the source field value is empty.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__DefaultValue__c: string;
    /**
     * <h3><b>Is Required</b></h3>
     * <p>Indicates whether this mapping is required.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__IsRequired__c: boolean;
    /**
     * <h3><b>Object</b></h3>
     * <p>Salesforce target object name used for mapping.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(24)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Object__c: string;
    /**
     * <h3><b>Salesforce Field</b></h3>
     * <p>Contact/Lead/Campaign Member field API name used for mapping.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__SalesforceField__c: string;
    /**
     * <h3><b>Sync Direction</b></h3>
     * <p>Indicates the direction of the data flow this field mapping will be applied to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__SyncDirection__c: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    SetupOwner: SObject;
    SetupOwnerId: string;
}