// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Discount Tier</b></h3>
 * <p>Discount tier that specifies discount for a given quantity range.</p>
 */
declare interface SBQQ__DiscountTier__c extends SObject 
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
     * The reciprocal relationship for {@link SBQQ__PriceTier__c.SBQQ__OriginalDiscountTier__c}.
     */
    PriceTiers__r?: SBQQ__PriceTier__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__DiscountTier__c}.
     */
    QuoteLines__r?: SBQQ__QuoteLine__c[];
    /**
     * <h3><b>Discount (%)</b></h3>
     * <p>Discount percentage applied when quantity falls in this tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(4,10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Discount__c?: number;
    /**
     * <h3><b>Discount ({0})</b></h3>
     * <p>Discount amount applied when quantity falls in this tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountAmount__c?: number;
    /**
     * <h3><b>Lower Bound</b></h3>
     * <p>Lower bound of the quantity range for this tier</p>
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
     * <h3><b>Number</b></h3>
     * <p>Number indicating this tier&#39;s position within the schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Number__c?: number;
    /**
     * <h3><b>Price</b></h3>
     * <p>The actual price of this discount tier. This field will be populated when a new set of discount schedules are created for a new Order record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(11,7)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Price__c?: number;
    /**
     * <h3><b>Schedule</b></h3>
     * <p>Discount Schedule to which this tier belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Schedule__c?: string;
    /**
     * <h3><b>Schedule</b></h3>
     * <p>Discount Schedule to which this tier belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Schedule__r?: SBQQ__DiscountSchedule__c;
    /**
     * <h3><b>Upper Bound</b></h3>
     * <p>Upper bound of the quantity range for this tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpperBound__c?: number;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__TermDiscountTier__c}.
     */
    TermDiscountedQuoteLines__r?: SBQQ__QuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuoteLine__c.SBQQ__TermDiscountTier__c}.
     */
    TermDiscountedWebQuoteLines__r?: SBQQ__WebQuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuoteLine__c.SBQQ__DiscountTier__c}.
     */
    WebQuoteLines__r?: SBQQ__WebQuoteLine__c[];
}