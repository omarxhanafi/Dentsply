// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Pricing Guidance Tier</b></h3>
 * <p>Pricing guidance tier that specifies discount for a given quantity range.</p>
 */
declare interface SBQQ__PricingGuidanceTier__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * <h3><b>Floor Discount (%)</b></h3>
     * <p>High discount for exception pricing based on past sales. If a sales rep wants to use this price, they must discount the quote line manually. This discount may require approvals based on your org&#39;s approval settings.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(4,10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__FloorDiscount__c?: number;
    /**
     * <h3><b>Lower Bound</b></h3>
     * <p>The lowest quote line quantity that applies to this tier. This number must match the upper bound of the previous tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__LowerBound__c?: number;
    /**
     * <h3><b>Norm Discount (%)</b></h3>
     * <p>Middle-range discount based on past sales. If a sales rep wants to use this price, they must discount the quote line manually. This discount may require approvals based on your org&#39;s approval settings.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(4,10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__NormDiscount__c?: number;
    /**
     * <h3><b>Pricing Guidance</b></h3>
     * <p>The pricing guidance that contains this tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__PricingGuidance__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PricingGuidance__c?: string;
    /**
     * <h3><b>Pricing Guidance</b></h3>
     * <p>The pricing guidance that contains this tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__PricingGuidance__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PricingGuidance__r?: SBQQ__PricingGuidance__c;
    /**
     * <h3><b>Target Discount (%)</b></h3>
     * <p>Ideal low-range discount based on past sales. If sales reps accept this pricing guidance, Salesforce CPQ applies a discount to reach this price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(4,10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TargetDiscount__c?: number;
    /**
     * <h3><b>Upper Bound</b></h3>
     * <p>The highest quote line quantity that applies to this tier. This number must be one above the highest quantity that you want this tier to include.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpperBound__c?: number;
}