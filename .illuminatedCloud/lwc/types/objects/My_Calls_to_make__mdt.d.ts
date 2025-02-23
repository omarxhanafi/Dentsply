// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>My Calls to make</b></h3>
 * <p>will hold the reports of the calls to make for each country to be used to managed the display of this links in the utility bar ( My calls to make ) based on the country of the user</p>
 */
declare interface My_Calls_to_make__mdt extends SObject 
{
    /**
     * <h3><b>Country</b></h3>
     * <p>List of countries related to the same report</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country__c?: string;
    DeveloperName?: string;
    /**
     * <h3><b>isTest</b></h3>
     * <p>Used for test classes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    isTest__c?: boolean;
    Label?: string;
    Language?: string;
    /**
     * <h3><b>Link text</b></h3>
     * <p>text to be displayed on the link of redirection</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Link_text__c?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    QualifiedApiName?: string;
    /**
     * <h3><b>Report Id</b></h3>
     * <p>Id of the report to display</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Report_Id__c?: string;
    SystemModstamp?: string;
}