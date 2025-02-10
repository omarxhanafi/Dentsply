// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>ERP Integration Contract Mapping</b></h3>
 */
declare interface ERPIntegration_ContractMappings__mdt extends SObject 
{
    DeveloperName: string;
    /**
     * <h3><b>Is Voucher</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    IsVoucher__c: boolean;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    QualifiedApiName: string;
    /**
     * <h3><b>Record Type Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    RecordTypeId__c: string;
    SystemModstamp: string;
}