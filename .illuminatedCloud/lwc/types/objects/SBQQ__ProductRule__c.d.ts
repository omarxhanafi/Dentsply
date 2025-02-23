// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Product Rule</b></h3>
 * <p>Rule that governs valid product configurations.</p>
 */
declare interface SBQQ__ProductRule__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link SBQQ__ProductAction__c.SBQQ__Rule__c}.
     */
    Actions__r?: SBQQ__ProductAction__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ConfigurationRule__c.SBQQ__ProductRule__c}.
     */
    ConfigurationRules__r?: SBQQ__ConfigurationRule__c[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ErrorCondition__c.SBQQ__Rule__c}.
     */
    ErrorConditions__r?: SBQQ__ErrorCondition__c[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__LookupQuery__c.SBQQ__ProductRule__c}.
     */
    ProductRuleLookupQueries__r?: SBQQ__LookupQuery__c[];
    /**
     * <h3><b>Active</b></h3>
     * <p>Flag that indicates whether this rule is active or inactive.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Active__c?: boolean;
    /**
     * <h3><b>Advanced Condition</b></h3>
     * <p>Can only be entered if the Conditions Met is Custom. Enter a combination of the Error Condition Index #s, AND, OR, and parenthesis (e.g. (123 AND 124) AND 125).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__AdvancedCondition__c?: string;
    /**
     * <h3><b>Conditions Met</b></h3>
     * <p>Choose the behavior for your conditions: All is AND, Any is OR, Custom is a combination of AND/OR.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">All</code></td><td>All</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Any</code></td><td>Any</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Custom</code></td><td>Custom</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__ConditionsMet__c?: string;
    /**
     * <h3><b>Message</b></h3>
     * <p>Enter a message to displayed when rule is activated.  An error message will be displayed when a Validations is fired.  A warning message will be displayed when an Alert is fired. Does not apply to Filter rules.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ErrorMessage__c?: string;
    /**
     * <h3><b>Evaluation Event</b></h3>
     * <p>Event that causes this rule to be evaluated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Load</code></td><td>Load</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Edit</code></td><td>Edit</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Save</code></td><td>Save</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Always</code></td><td>Always</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__EvaluationEvent__c?: string;
    /**
     * <h3><b>Evaluation Order</b></h3>
     * <p>Order in which this price rule is evaluated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EvaluationOrder__c?: number;
    /**
     * <h3><b>Lookup Message Field</b></h3>
     * <p>Field on Lookup Object corresponding to Product Rule Message. Field must be text.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Message__c</code></td><td>SBQQ__Message__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__LookupMessageField__c?: string;
    /**
     * <h3><b>Lookup Object</b></h3>
     * <p>API Name of the Custom Object that stores the lookup data.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__LookupData__c</code></td><td>SBQQ__LookupData__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__LookupObject__c?: string;
    /**
     * <h3><b>Lookup Product Field</b></h3>
     * <p>Field on Lookup Object corresponding to Product Action Product Lookup. Field must be a lookup to the Product object.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Product__c</code></td><td>SBQQ__Product__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__LookupProductField__c?: string;
    /**
     * <h3><b>Lookup Required Field</b></h3>
     * <p>Field on Lookup Object corresponding to Product Action Required checkbox. Field must be checkbox.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Required__c</code></td><td>SBQQ__Required__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__LookupRequiredField__c?: string;
    /**
     * <h3><b>Lookup Type Field</b></h3>
     * <p>Field on Lookup Object corresponding to Product Action Type picklist. Field must be a Picklist or Text.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Type__c</code></td><td>SBQQ__Type__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__LookupTypeField__c?: string;
    /**
     * <h3><b>Scope</b></h3>
     * <p>Scopes the rule to the entire quote or specific product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote</code></td><td>Quote</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product</code></td><td>Product</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__Scope__c?: string;
    /**
     * <h3><b>Type</b></h3>
     * <p>Type of rule. Validation displays error messages. Selection causes products to be added or suggested. Alert displays a warning, but requires no rectification. Filter refines option lookup results for Dynamic Bundles.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Validation</code></td><td>Validation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Selection</code></td><td>Selection</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Alert</code></td><td>Alert</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Filter</code></td><td>Filter</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__Type__c?: string;
}