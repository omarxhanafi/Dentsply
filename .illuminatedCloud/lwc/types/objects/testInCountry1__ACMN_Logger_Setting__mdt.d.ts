// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>ACMN Logger Setting</b></h3>
 * <p>Settings to manage ACMN Logger</p>
 */
declare interface testInCountry1__ACMN_Logger_Setting__mdt extends SObject 
{
    DeveloperName: string;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    QualifiedApiName: string;
    SystemModstamp: string;
    /**
     * <h3><b>Logger Service Class</b></h3>
     * <p>Used to define a custom logger extension class.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    testInCountry1__Custom_Logger_Class__c: string;
    /**
     * <h3><b>Custom Permission API Name</b></h3>
     * <p>The API name of the custom permission required for the service</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    testInCountry1__Custom_Permission_API_Name__c: string;
    /**
     * <h3><b>Description</b></h3>
     * <p>Logging Service description</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    testInCountry1__Description__c: string;
    /**
     * <h3><b>Enabled</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    testInCountry1__Enabled__c: boolean;
    /**
     * <h3><b>Use Custom Permissions</b></h3>
     * <p>Used to define whether the service enforces the use of the Custom Permission ACMN_Logging_Enabled</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    testInCountry1__Use_Custom_Permissions__c: boolean;
}