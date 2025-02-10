// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Quote Line Pricing Guidance</b></h3>
 * <p>The accepted pricing guidance on a quote line</p>
 */
declare interface SBQQ__QuoteLinePricingGuidance__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * <h3><b>Explanation</b></h3>
     * <p>An explanation of this pricing guidance and recommendations for discounts to provide. Sales reps can view this explanation with the pricing guidance in the quote line editor.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Explanation__c: string;
    /**
     * <h3><b>Floor</b></h3>
     * <p>High discount for exception pricing based on past sales. If a sales rep wants to use this price, they must discount the quote line manually. This discount may require approvals based on your org&#39;s approval settings.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Floor__c: number;
    /**
     * <h3><b>Guidance Used</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(SBQQ__QuoteLine__r.SBQQ__Discount__c == SBQQ__QuoteLine__r.SBQQ__Guidance__c, true, false)</code></td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__GuidanceUsed__c: boolean;
    /**
     * <h3><b>Viewed</b></h3>
     * <p>A sales rep has viewed this pricing guidance in the quote line editor.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__IsViewed__c: boolean;
    /**
     * <h3><b>Norm</b></h3>
     * <p>Middle-range discount based on past sales. If a sales rep wants to use this price, they must discount the quote line manually. This discount may require approvals based on your org&#39;s approval settings.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Norm__c: number;
    /**
     * <h3><b>Quote</b></h3>
     * <p>The quote containing the quote line related to this pricing guidance.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__c: string;
    /**
     * <h3><b>Quote</b></h3>
     * <p>The quote containing the quote line related to this pricing guidance.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__r: SBQQ__Quote__c;
    /**
     * <h3><b>Quote Line</b></h3>
     * <p>The quote line related to this pricing guidance.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteLine__c: string;
    /**
     * <h3><b>Quote Line</b></h3>
     * <p>The quote line related to this pricing guidance.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteLine__r: SBQQ__QuoteLine__c;
    /**
     * <h3><b>Target</b></h3>
     * <p>Ideal low-range discount based on past sales. If sales reps accept this pricing guidance, Salesforce CPQ applies a discount to reach this price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Target__c: number;
}