// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Quote Process</b></h3>
 * <p>Quote process is the parent object for configuration data that drives a particular quote process.</p>
 */
declare interface SBQQ__QuoteProcess__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ProcessInput__c.SBQQ__QuoteProcess__c}.
     */
    Inputs__r: SBQQ__ProcessInput__c[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineGroup__c.SBQQ__QuoteProcess__c}.
     */
    QuoteLineGroups__r: SBQQ__QuoteLineGroup__c[];
    /**
     * <h3><b>Default</b></h3>
     * <p>Marks this quote process as default.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Default__c: boolean;
    /**
     * <h3><b>Guided Only</b></h3>
     * <p>Flag that controls whether quotes covered by this process force guided product selection or allow for ad-hoc filtering.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__GuidedOnly__c: boolean;
    /**
     * <h3><b>Auto Select Product?</b></h3>
     * <p>Flag that determines if product is auto selected if it&#39;s the only one returned by a search.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__ProductAutoSelected__c: boolean;
    /**
     * <h3><b>Product Configuration Initializer</b></h3>
     * <p>Custom Visualforce page that will be invoked on every configurable product to initialize the options.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(200)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductConfigurationInitializer__c: string;
    /**
     * <h3><b>Product Search Executor</b></h3>
     * <p>Name of VisualForce page that performs custom product search.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(200)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductSearchExecutor__c: string;
    /**
     * <h3><b>Sort Order</b></h3>
     * <p>Determines display order of quote processes in Line Editor (pick list rendering only).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SortOrder__c: number;
}