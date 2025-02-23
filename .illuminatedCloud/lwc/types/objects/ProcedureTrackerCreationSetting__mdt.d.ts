// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Procedure Tracker Creation Setting</b></h3>
 */
declare interface ProcedureTrackerCreationSetting__mdt extends SObject 
{
    /**
     * <h3><b>Country List</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    CountryList__c?: string;
    DeveloperName?: string;
    Label?: string;
    Language?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    /**
     * <h3><b>Number Of Days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NumberOfDays__c?: number;
    QualifiedApiName?: string;
    SystemModstamp?: string;
}