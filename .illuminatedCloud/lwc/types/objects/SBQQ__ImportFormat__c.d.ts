// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Import Format</b></h3>
 */
declare interface SBQQ__ImportFormat__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ImportColumn__c.SBQQ__ImportFormat__c}.
     */
    ImportColumns__r: SBQQ__ImportColumn__c[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * <h3><b>Active</b></h3>
     * <p>When activated, the input format becomes available for use.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Active__c: boolean;
    /**
     * <h3><b>Import Format Name</b></h3>
     * <p>A meaningful name that describes the input format.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ImportFormatName__c: string;
    /**
     * <h3><b>Target Object</b></h3>
     * <p>Target Object to be imported.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Line</code></td><td>Quote Line</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__TargetObject__c: string;
    /**
     * <h3><b># Unique Key</b></h3>
     * <p>A count of the unique Keys within the Import Format.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__ImportColumn__c.SBQQ__ImportFormat__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__ImportColumn__c.SBQQ__Key__c EQUALS True</code><br/>
     * </td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UniqueKeyCount__c: string;
}