// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Quote Term</b></h3>
 * <p>Legal term printed on quote document.</p>
 */
declare interface SBQQ__QuoteTerm__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Localization__c.SBQQ__QuoteTerm__c}.
     */
    Localizations__r?: SBQQ__Localization__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteTerm__c.SBQQ__StandardTerm__c}.
     */
    ModifiedTerms__r?: SBQQ__QuoteTerm__c[];
    Name?: string;
    /**
     * <h3><b>Active</b></h3>
     * <p>Flag that indicates whether this quote term is available for use.</p>
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
     * <p>Can only be entered if the Conditions Met is Custom. Enter a combination of the Term Condition Index #s, AND, OR, and parenthesis (e.g. (123 AND 124) AND 125).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__AdvancedCondition__c?: string;
    /**
     * <h3><b>Body</b></h3>
     * <p>Body containing text of the term.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Body__c?: string;
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
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">All</code></td><td>All</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Any</code></td><td>Any</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Custom</code></td><td>Custom</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__ConditionsMet__c?: string;
    /**
     * <h3><b>Locked</b></h3>
     * <p>Controls a Quote Term being editable by a user.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Locked__c?: boolean;
    /**
     * <h3><b>Parent Term</b></h3>
     * <p>Parent term for this term.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteTerm__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ParentTerm__c?: string;
    /**
     * <h3><b>Parent Term</b></h3>
     * <p>Parent term for this term.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteTerm__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ParentTerm__r?: SBQQ__QuoteTerm__c;
    /**
     * <h3><b>Print Order</b></h3>
     * <p>Order in which the terms are printed on quote document.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PrintOrder__c?: number;
    /**
     * <h3><b>Quote</b></h3>
     * <p>Quote to which this term applies.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__c?: string;
    /**
     * <h3><b>Quote</b></h3>
     * <p>Quote to which this term applies.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__r?: SBQQ__Quote__c;
    /**
     * <h3><b>Standard Term</b></h3>
     * <p>Specifies the standard term that is being modified.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteTerm__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__StandardTerm__c?: string;
    /**
     * <h3><b>Standard Term</b></h3>
     * <p>Specifies the standard term that is being modified.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteTerm__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__StandardTerm__r?: SBQQ__QuoteTerm__c;
    /**
     * <h3><b>Status</b></h3>
     * <p>Status of this quote term.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Draft</code></td><td>Draft</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">In Review</code></td><td>In Review</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Approved</code></td><td>Approved</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rejected</code></td><td>Rejected</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__Status__c?: string;
    /**
     * <h3><b>Template Content</b></h3>
     * <p>Template Content to which this term is applied.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__TemplateContent__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TemplateContent__c?: string;
    /**
     * <h3><b>Template Content</b></h3>
     * <p>Template Content to which this term is applied.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__TemplateContent__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TemplateContent__r?: SBQQ__TemplateContent__c;
    /**
     * <h3><b>Type</b></h3>
     * <p>Indicates if the term is standard, custom, or modified.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(ISBLANK(SBQQ__Quote__c),ISBLANK(SBQQ__StandardTerm__c)), $Label.SBQQ__lbl_standard, IF(AND(NOT(ISBLANK(SBQQ__Quote__c)),ISBLANK(SBQQ__StandardTerm__c)), $Label.SBQQ__lbl_custom, $Label.SBQQ__lbl_modified))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Type__c?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteTerm__c.SBQQ__ParentTerm__c}.
     */
    SubTerms__r?: SBQQ__QuoteTerm__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__TermCondition__c.SBQQ__QuoteTerm__c}.
     */
    UseConditions__r?: SBQQ__TermCondition__c[];
}