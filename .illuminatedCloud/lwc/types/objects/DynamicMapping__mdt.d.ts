// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Dynamic Mapping</b></h3>
 * <p>It provides a way to map the fields of one object to another, allowing for the seamless transfer of data between the two objects</p>
 */
declare interface DynamicMapping__mdt extends SObject 
{
    DeveloperName?: string;
    /**
     * <h3><b>Invalid Reason</b></h3>
     * <p>Provides validity assessment comments if the mapping was detected invalid.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    InvalidReason__c?: string;
    /**
     * <h3><b>isNew</b></h3>
     * <p>Determines whether a record has just been created and it hasn&#39;t yet been validated in Apex. Once the validation will run, this field will be unchecked and the field isValid will get a value.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    isNew__c?: boolean;
    /**
     * <h3><b>isValid</b></h3>
     * <p>Specifies if the mapping is correct after running a list of validations in apex. The validations will be run one time when we create a new record. The value will be modified by an apex job. Invalid mapping won&#39;t be considered in the process and will be omitted.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    isValid__c?: boolean;
    Label?: string;
    Language?: string;
    /**
     * <h3><b>Limit String Length</b></h3>
     * <p>Helps in limiting the length of a source field value so we don&#39;t exceed the maximum characters that can accept the target field.
     * Example: Source text field length = 255; Target text field length = 80; We put 80 to take only the first 80 characters.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    limitStringLength__c?: number;
    MasterLabel?: string;
    NamespacePrefix?: string;
    QualifiedApiName?: string;
    /**
     * <h3><b>Source Field Api Name</b></h3>
     * <p>SourceObjectApiName.SourceFieldApiName will be mapped to TargetObjectApiName.TargetFieldApiName</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceFieldApiName__c?: string;
    /**
     * <h3><b>Source Object Api Name</b></h3>
     * <p>SourceObjectApiName.SourceFieldApiName will be mapped to TargetObjectApiName.TargetFieldApiName</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceObjectApiName__c?: string;
    SystemModstamp?: string;
    /**
     * <h3><b>Target Field Api Name</b></h3>
     * <p>SourceObjectApiName.SourceFieldApiName will be mapped to TargetObjectApiName.TargetFieldApiName</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TargetFieldApiName__c?: string;
    /**
     * <h3><b>Target Object Api Name</b></h3>
     * <p>SourceObjectApiName.SourceFieldApiName will be mapped to TargetObjectApiName.TargetFieldApiName</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(60)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TargetObjectApiName__c?: string;
}