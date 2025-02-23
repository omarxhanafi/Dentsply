// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Schmoopy</b></h3>
 */
declare interface Schmoopy__mdt extends SObject 
{
    DeveloperName?: string;
    Label?: string;
    Language?: string;
    MasterLabel?: string;
    /**
     * <h3><b>Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Name__c?: string;
    NamespacePrefix?: string;
    QualifiedApiName?: string;
    SystemModstamp?: string;
}