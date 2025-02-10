// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Price Schedule</b></h3>
 * <p>Volume Price Schedule that applies automatic discounts based on quantity.</p>
 */
declare interface SBQQ__PriceSchedule__c extends SObject 
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
     * The reciprocal relationship for {@link SBQQ__PriceTier__c.SBQQ__PriceSchedule__c}.
     */
    PriceTiers__r: SBQQ__PriceTier__c[];
    /**
     * <h3><b>Account</b></h3>
     * <p>Account that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Account__c: string;
    /**
     * <h3><b>Account</b></h3>
     * <p>Account that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Account__r: Account;
    /**
     * <h3><b>Aggregation Scope</b></h3>
     * <p>Indicates whether quote lines referencing this schedule should be aggregated within quote, group or not at all for the purposes of volume discount calculation.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote</code></td><td>Quote</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Group</code></td><td>Group</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__AggregationScope__c: string;
    /**
     * <h3><b>Constraint Field</b></h3>
     * <p>For cross-order schedules, if you want to limit which subscriptions and assets are used to calculate your volume discounts, select the field that you want to match against the same field on the quote.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account__c</code></td><td>Account__c</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__ConstraintField__c: string;
    /**
     * <h3><b>Cross Orders</b></h3>
     * <p>Specifies whether volume discount should be applied on combined quantities across prior orders.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__CrossOrders__c: boolean;
    /**
     * <h3><b>Cross Products</b></h3>
     * <p>Flag that indicates whether volume discount calculations should aggregate quantities of all products using this schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__CrossProducts__c: boolean;
    /**
     * <h3><b>Description</b></h3>
     * <p>Description for this Price Schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(5000)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Description__c: string;
    /**
     * <h3><b>Discount Unit</b></h3>
     * <p>This is the Discount Unit for the Price Schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Percent</code></td><td>Percent</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Amount</code></td><td>Amount</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Price</code></td><td>Price</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__DiscountUnit__c: string;
    /**
     * <h3><b>Excluded Pricebook IDs</b></h3>
     * <p>Comma-seperated list of price book IDs for which this Price Schedule should not apply.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ExcludedPricebookIds__c: string;
    /**
     * <h3><b>Include Bundled Quantities</b></h3>
     * <p>If checked, the Quantities of Bundled Product Options will be included in the Aggregation Scope</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__IncludeBundledProducts__c: boolean;
    /**
     * <h3><b>Order</b></h3>
     * <p>Order that this Price Schedule applies to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Order})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Order__c: string;
    /**
     * <h3><b>Order</b></h3>
     * <p>Order that this Price Schedule applies to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Order})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Order__r: Order;
    /**
     * <h3><b>Order Product</b></h3>
     * <p>Order product that this Price Schedule applies to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OrderItem})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OrderProduct__c: string;
    /**
     * <h3><b>Order Product</b></h3>
     * <p>Order product that this Price Schedule applies to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OrderItem})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OrderProduct__r: OrderItem;
    /**
     * <h3><b>Original Discount Schedule</b></h3>
     * <p>The discount schedule that this price schedule is originated from.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OriginalDiscountSchedule__c: string;
    /**
     * <h3><b>Original Discount Schedule</b></h3>
     * <p>The discount schedule that this price schedule is originated from.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OriginalDiscountSchedule__r: SBQQ__DiscountSchedule__c;
    /**
     * <h3><b>Override Behavior</b></h3>
     * <p>Determines if the current Discount Tier that the product falls within is editable, if all Discount Tiers are editable, or none.</p>
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
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Current Tier Only</code></td><td>Current Tier Only</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__OverrideBehavior__c: string;
    /**
     * <h3><b>Price Book</b></h3>
     * <p>Price book that this Price Schedule applies to. Only used in combination with Product lookup to assign product/price book specific schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Pricebook2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Pricebook__c: string;
    /**
     * <h3><b>Price Book</b></h3>
     * <p>Price book that this Price Schedule applies to. Only used in combination with Product lookup to assign product/price book specific schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Pricebook2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Pricebook__r: Pricebook2;
    /**
     * <h3><b>Price Scale</b></h3>
     * <p>Decimal places for prices produced by this Price Schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(8,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">2</code></td></tr>
     * </table>
     */
    SBQQ__PriceScale__c: number;
    /**
     * <h3><b>Type</b></h3>
     * <p>The price type that determines how the prices or discounts are calculated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PriceType__c: string;
    /**
     * <h3><b>Product</b></h3>
     * <p>Product that this Price Schedule applies to. Only used in combination with Price Book lookup to assign product/price book specific schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Product__c: string;
    /**
     * <h3><b>Product</b></h3>
     * <p>Product that this Price Schedule applies to. Only used in combination with Price Book lookup to assign product/price book specific schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Product__r: Product2;
    /**
     * <h3><b>Quote</b></h3>
     * <p>Quote that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
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
     * <p>Quote that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
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
     * <p>Quote Line that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteLine__c: string;
    /**
     * <h3><b>Quote Line</b></h3>
     * <p>Quote Line that this Price Schedule applies to. Only used in combination with Price Schedule Override on Quote Line Editor UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteLine__r: SBQQ__QuoteLine__c;
    /**
     * <h3><b>Quote Line Quantity Field</b></h3>
     * <p>Field used to calculate Price Schedule pricing.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quantity</code></td><td>Quantity</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__QuoteLineQuantityField__c: string;
    /**
     * <h3><b>Term Discount</b></h3>
     * <p>Term discount in total applied to this price schedule.  The value is available only for Tiered price type.  For Volume price type, the term discount is available for each price tier.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscount__c: number;
    /**
     * <h3><b>Use Price For Amount</b></h3>
     * <p>If checked, the user defined Price Schedule&#39;s Discount Unit will be set to Price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__UsePriceForAmount__c: boolean;
    /**
     * <h3><b>User Defined</b></h3>
     * <p>Identifies whether this schedule was created by an end user or an admin.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__UserDefined__c: boolean;
}