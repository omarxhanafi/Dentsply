// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Country</b></h3>
 */
declare interface Country_Configuration__mdt extends SObject 
{
    /**
     * <h3><b>Account Default User ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Default_User_ID__c: string;
    DeveloperName: string;
    /**
     * The reciprocal relationship for {@link DI_Account_Record_Type_Mapping__mdt.Country__c}.
     */
    DI_Account_Record_Type_Mappings__r: DI_Account_Record_Type_Mapping__mdt[];
    Label: string;
    Language: string;
    /**
     * <h3><b>Market</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Metadata Relationship({@link Market__mdt})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Market__c: string;
    /**
     * <h3><b>Market</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Metadata Relationship({@link Market__mdt})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Market__r: Market__mdt;
    MasterLabel: string;
    /**
     * <h3><b>Movex Prefix</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(12)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Prefix__c: string;
    NamespacePrefix: string;
    QualifiedApiName: string;
    SystemModstamp: string;
}