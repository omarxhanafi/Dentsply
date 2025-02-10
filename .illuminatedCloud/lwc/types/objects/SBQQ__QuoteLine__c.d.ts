// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Quote Line</b></h3>
 * <p>Individual line item on a quote.</p>
 */
declare interface SBQQ__QuoteLine__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link SBQQ__AttributeValue__c.SBQQ__QuoteLine__c}.
     */
    AttributeValues__r: SBQQ__AttributeValue__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__BlockPrice__c.SBQQ__QuoteLine__c}.
     */
    BlockPrices__r: SBQQ__BlockPrice__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__Source__c}.
     */
    Clones__r: SBQQ__QuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ContractedPrice__c.SBQQ__OriginalQuoteLine__c}.
     */
    ContractedPrices__r: SBQQ__ContractedPrice__c[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * The reciprocal relationship for {@link SBQQ__DiscountSchedule__c.SBQQ__QuoteLine__c}.
     */
    Discount_Schedules__r: SBQQ__DiscountSchedule__c[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Subscription__c.SBQQ__OriginalQuoteLine__c}.
     */
    OriginalQuoteLine__r: SBQQ__Subscription__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__PriceSchedule__c.SBQQ__QuoteLine__c}.
     */
    PriceSchedules__r: SBQQ__PriceSchedule__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__RequiredBy__c}.
     */
    Quote_Lines__r: SBQQ__QuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLinePricingGuidance__c.SBQQ__QuoteLine__c}.
     */
    QuoteLinePricingGuidance__r: SBQQ__QuoteLinePricingGuidance__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineConsumptionSchedule__c.SBQQ__QuoteLine__c}.
     */
    QuoteLines__r: SBQQ__QuoteLineConsumptionSchedule__c[];
    /**
     * <h3><b>Additional Disc.</b></h3>
     * <p>Total additional discount extends on this line item. Additional discount is defined as discount extended on top of volume discount or negotiated prices.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(SBQQ__RegularPrice__c - SBQQ__CustomerPrice__c) *  SBQQ__EffectiveQuantity__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__AdditionalDiscount__c: number;
    /**
     * <h3><b>Additional Disc. (Amt)</b></h3>
     * <p>Additional customer discount extended on this line item in terms of absolute amount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__AdditionalDiscountAmount__c: number;
    /**
     * <h3><b>Additional Quantity</b></h3>
     * <p>Additional quantity for this product which contributes to volume discount calculations.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__AdditionalQuantity__c: number;
    /**
     * <h3><b>Allow Asset Refunds</b></h3>
     * <p>Indicates whether the underlying asset may have its quantity refunded. Only relevant for Amendments.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__AllowAssetRefund__c: boolean;
    /**
     * <h3><b>Batch Quantity</b></h3>
     * <p>For products sold in batches quantity in each batch. Defaulted from the product record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BatchQuantity__c: number;
    /**
     * <h3><b>Billing Frequency</b></h3>
     * <p>Defines the billing frequency.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BillingFrequency__c: string;
    /**
     * <h3><b>Billing Type</b></h3>
     * <p>The billing type that defines when the billing occurs. Billing in advance lets you bill your customers for products or services before you provide them; Billing in arrears lets you bill your customers after the products or services are provided.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BillingType__c: string;
    /**
     * <h3><b>Block Price</b></h3>
     * <p>Assign a fixed price to a product based on quantity and quantity range. This overrides the automatic calculation of quantity * unit price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__BlockPrice__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BlockPrice__c: string;
    /**
     * <h3><b>Block Price</b></h3>
     * <p>Assign a fixed price to a product based on quantity and quantity range. This overrides the automatic calculation of quantity * unit price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__BlockPrice__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BlockPrice__r: SBQQ__BlockPrice__c;
    /**
     * <h3><b>Package</b></h3>
     * <p>Indicates whether this line item represents a package; meaning, it includes other line items in this quote.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Bundle__c: boolean;
    /**
     * <h3><b>Bundled</b></h3>
     * <p>Indicates the product on this line item is bundled (included) by another product in this quote. Bundled lines items are zero price and do not allow price or quantity to be edited.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Bundled__c: boolean;
    /**
     * <h3><b>Original Quantity</b></h3>
     * <p>For items with calculated quantities this field hold the original (user entered) quantity.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__BundledQuantity__c: number;
    /**
     * <h3><b>Carry-Over Line</b></h3>
     * <p>Denotes this line as an auto-mapped option on an Upgraded Bundle.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__CarryoverLine__c: boolean;
    /**
     * <h3><b>Charge Type</b></h3>
     * <p>The type of the product charge.  This is a system field that is derived from the associated product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ChargeType__c: string;
    /**
     * <h3><b>Component Cost</b></h3>
     * <p>Total cost of components in this package.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ComponentCost__c: number;
    /**
     * <h3><b>Component Discounted By Package</b></h3>
     * <p>Fixes additional discount for this component to the parent package discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__ComponentDiscountedByPackage__c: boolean;
    /**
     * <h3><b>Component List Total</b></h3>
     * <p>List total of components in this configuration. This field is only populated if this line item references configurable product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ComponentListTotal__c: number;
    /**
     * <h3><b>Component Percent of Total Scope</b></h3>
     * <p>Subscription scope set at the component level. This field overrides the subscriptions cope copied from the product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Package</code></td><td>Package</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Components</code></td><td>Components</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Both</code></td><td>Package &amp; Components</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Entire Hierarchy</code></td><td>Entire Hierarchy</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__ComponentSubscriptionScope__c: string;
    /**
     * <h3><b>Component Net Total</b></h3>
     * <p>Sum total of components in this configuration. This field is only populated if this line item references configurable product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ComponentTotal__c: number;
    /**
     * <h3><b>Component Uplifted By Package</b></h3>
     * <p>Fixes uplift for this component to the parent package uplift. Uplift only applies to multi-segmented products.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__ComponentUpliftedByPackage__c: boolean;
    /**
     * <h3><b>Component Visibility</b></h3>
     * <p>Visibility of this component line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(SBQQ__ProductOption__r.SBQQ__QuoteLineVisibility__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ComponentVisibility__c: string;
    /**
     * <h3><b>Compound Discount (%)</b></h3>
     * <p>Discount rate compounded by quantity (historic).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(5,3)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__CompoundDiscountRate__c: number;
    /**
     * <h3><b>Configuration Required</b></h3>
     * <p>Flag that marks this quote line as requiring configuration. Can be used by custom code to request this product be re-configured.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__ConfigurationRequired__c: boolean;
    /**
     * <h3><b>Contracted Price</b></h3>
     * <p>Contracted price if the product has negotiated pricing for opportunity&#39;s account. Contracted Prices are available on the Account and can be applied to any product in any price book.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__ContractedPrice__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ContractedPrice__c: string;
    /**
     * <h3><b>Contracted Price</b></h3>
     * <p>Contracted price if the product has negotiated pricing for opportunity&#39;s account. Contracted Prices are available on the Account and can be applied to any product in any price book.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__ContractedPrice__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ContractedPrice__r: SBQQ__ContractedPrice__c;
    /**
     * <h3><b>Cost</b></h3>
     * <p>Cost record for this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Cost__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Cost__c: string;
    /**
     * <h3><b>Cost</b></h3>
     * <p>Cost record for this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Cost__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Cost__r: SBQQ__Cost__c;
    /**
     * <h3><b>Cost Editable</b></h3>
     * <p>Specifies whether cost can be edited on this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__CostEditable__c: boolean;
    /**
     * <h3><b>Customer Unit Price</b></h3>
     * <p>Customer unit price for the product quoted by this line item. This is the Net Unit Price excluding any partner discounts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__CustomerPrice__c: number;
    /**
     * <h3><b>Customer Total</b></h3>
     * <p>Customer total price for this quote line item. This is the Net Total excluding any partner discounts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(SBQQ__Renewal__c, !SBQQ__Existing__c, ISBLANK(SBQQ__PriorQuantity__c)), 0, SBQQ__CustomerPrice__c * SBQQ__EffectiveQuantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__CustomerTotal__c: number;
    /**
     * <h3><b>Default Subscription Term</b></h3>
     * <p>Term length of the subscription, which only applies if the product is a subscription. It is copied from the Subscription Term of the related product when the line item is first generated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DefaultSubscriptionTerm__c: number;
    /**
     * <h3><b>Description</b></h3>
     * <p>Description for this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Description__c: string;
    /**
     * <h3><b>Price Dimension</b></h3>
     * <p>Dimensions within an MDQ Product that all each segment to be priced independently. Each Product may contain several Price Dimensions. Yearly Price Dimensions are treated as Subscriptions.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Dimension__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Dimension__c: string;
    /**
     * <h3><b>Price Dimension</b></h3>
     * <p>Dimensions within an MDQ Product that all each segment to be priced independently. Each Product may contain several Price Dimensions. Yearly Price Dimensions are treated as Subscriptions.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Dimension__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Dimension__r: SBQQ__Dimension__c;
    /**
     * <h3><b>Additional Disc. (%)</b></h3>
     * <p>Additional customer discount extended for this line item expressed in terms of percentage.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(9,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Discount__c: number;
    /**
     * <h3><b>Discount Schedule</b></h3>
     * <p>Specify discounts in terms of % or Amt to be discounted off the product&#39;s price using quantity purchased or term. Set quantity/term ranges in tiers of different discount %. Discount is applied to List Price &amp; resulting total is stored in the Regular Price</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountSchedule__c: string;
    /**
     * <h3><b>Discount Schedule</b></h3>
     * <p>Specify discounts in terms of % or Amt to be discounted off the product&#39;s price using quantity purchased or term. Set quantity/term ranges in tiers of different discount %. Discount is applied to List Price &amp; resulting total is stored in the Regular Price</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountSchedule__r: SBQQ__DiscountSchedule__c;
    /**
     * <h3><b>Discount Schedule Type</b></h3>
     * <p>Discount schedule type. Must be a stored value because it&#39;s used in formula fields that are rolled up.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Range</code></td><td>Range</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Slab</code></td><td>Slab</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__DiscountScheduleType__c: string;
    /**
     * <h3><b>Discount Tier</b></h3>
     * <p>Discount tier used by this line item. This field is only populated if a product is volume discounted and discount schedule is of type &quot;Range&quot;.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountTier__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountTier__c: string;
    /**
     * <h3><b>Discount Tier</b></h3>
     * <p>Discount tier used by this line item. This field is only populated if a product is volume discounted and discount schedule is of type &quot;Range&quot;.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountTier__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountTier__r: SBQQ__DiscountTier__c;
    /**
     * <h3><b>Distributor Discount</b></h3>
     * <p>This is a discount that is applied to partner price and reflected in the net price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DistributorDiscount__c: number;
    /**
     * <h3><b>Dynamic Option ID</b></h3>
     * <p>Contains feature id and product id to identify the feature and optional SKU associated with this line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DynamicOptionId__c: string;
    /**
     * <h3><b>Earliest Valid Amendment Start Date</b></h3>
     * <p>The earliest safe date for an amendment quote line to start before it becomes back-dated and therefore forbidden.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EarliestValidAmendmentStartDate__c: Date;
    /**
     * <h3><b>Effective End Date</b></h3>
     * <p>Effective end date for this subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(SBQQ__SubscriptionType__c, &quot;Evergreen&quot;), null, IF(ISBLANK(SBQQ__EndDate__c), IF(ISBLANK(SBQQ__Group__r.SBQQ__EndDate__c),SBQQ__Quote__r.SBQQ__EndDate__c,SBQQ__Group__r.SBQQ__EndDate__c),SBQQ__EndDate__c) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EffectiveEndDate__c: Date;
    /**
     * <h3><b>Effective Quantity</b></h3>
     * <p>Effective quantity used in computing totals. Same as quantity unless the product is block priced, covered by &quot;Slab&quot; discount schedule, or an existing subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(OR(ISPICKVAL(SBQQ__DiscountScheduleType__c, &#39;Slab&#39;),ISPICKVAL(SBQQ__PricingMethod__c, &#39;Block&#39;)),IF(OR(AND(!SBQQ__Existing__c, !SBQQ__CarryoverLine__c, SBQQ__Quantity__c == 0),AND(OR(SBQQ__Existing__c, SBQQ__CarryoverLine__c),OR(SBQQ__Quantity__c == SBQQ__PriorQuantity__c - SBQQ__UpgradedQuantity__c,AND(!SBQQ__AllowAssetRefund__c, ISPICKVAL(SBQQ__SubscriptionPricing__c, &#39;&#39;), SBQQ__Quantity__c &lt; SBQQ__PriorQuantity__c - SBQQ__UpgradedQuantity__c)))),0,1),IF(AND(!SBQQ__Existing__c, !SBQQ__CarryoverLine__c),SBQQ__Quantity__c,IF(SBQQ__Quantity__c &gt;= SBQQ__PriorQuantity__c - SBQQ__UpgradedQuantity__c,IF(ISPICKVAL(SBQQ__SubscriptionPricing__c, &#39;Percent Of Total&#39;),SBQQ__Quantity__c,SBQQ__Quantity__c - SBQQ__PriorQuantity__c + SBQQ__UpgradedQuantity__c),IF(AND(!SBQQ__AllowAssetRefund__c, ISPICKVAL(SBQQ__SubscriptionPricing__c, &#39;&#39;)),0,SBQQ__Quantity__c - SBQQ__PriorQuantity__c + SBQQ__UpgradedQuantity__c))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EffectiveQuantity__c: number;
    /**
     * <h3><b>Effective Start Date</b></h3>
     * <p>Effective start date for this subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(SBQQ__StartDate__c), IF(ISBLANK(SBQQ__Group__r.SBQQ__StartDate__c),SBQQ__Quote__r.SBQQ__StartDate__c,SBQQ__Group__r.SBQQ__StartDate__c), SBQQ__StartDate__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EffectiveStartDate__c: Date;
    /**
     * <h3><b>Effective Subscription Term</b></h3>
     * <p>Effective term for this subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(SBQQ__SubscriptionTerm__c), IF(ISBLANK(SBQQ__Group__r.SBQQ__SubscriptionTerm__c),SBQQ__Quote__r.SBQQ__SubscriptionTerm__c,SBQQ__Group__r.SBQQ__SubscriptionTerm__c), SBQQ__SubscriptionTerm__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EffectiveSubscriptionTerm__c: number;
    /**
     * <h3><b>End Date</b></h3>
     * <p>Date the service represented by this line item will end (only applies if product is a subscription).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__EndDate__c: Date;
    /**
     * <h3><b>Existing</b></h3>
     * <p>Indicates the customer already owns this product. This is typically used for products with options during add-on quoting. The product is on the quote solely to drive the Configurator.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Existing__c: boolean;
    /**
     * <h3><b>Favorite</b></h3>
     * <p>Favorite to which this Quote Line belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Favorite__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Favorite__c: string;
    /**
     * <h3><b>Favorite</b></h3>
     * <p>Favorite to which this Quote Line belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Favorite__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Favorite__r: SBQQ__Favorite__c;
    /**
     * <h3><b>Generate Contracted Price</b></h3>
     * <p>Will generate a contracted price based on the adjusted quote line if flagged.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Price</code></td><td>Price</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Discount Schedule</code></td><td>Discount Schedule</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Do Not Generate</code></td><td>Do Not Generate</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__GenerateContractedPrice__c: string;
    /**
     * <h3><b>Gross Profit</b></h3>
     * <p>Gross profit amount on this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__GrossProfit__c: number;
    /**
     * <h3><b>Group</b></h3>
     * <p>Group to which this line belongs, if any.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLineGroup__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Group__c: string;
    /**
     * <h3><b>Group</b></h3>
     * <p>Group to which this line belongs, if any.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLineGroup__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Group__r: SBQQ__QuoteLineGroup__c;
    /**
     * <h3><b>Guidance</b></h3>
     * <p>Ideal low-range discount based on past sales. If sales reps accept this pricing guidance, Salesforce CPQ applies a discount to reach this price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Guidance__c: number;
    /**
     * <h3><b>Has Consumption Schedules</b></h3>
     * <p>Indicates if the Quote Line has at least one consumption schedule</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__HasConsumptionSchedule__c: boolean;
    /**
     * <h3><b>Hidden</b></h3>
     * <p>Denotes whether this line item is hidden in generated PDF documents.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Hidden__c: boolean;
    /**
     * <h3><b>Incomplete</b></h3>
     * <p>Flag set internally by application logic when a line is saved to an incomplete database. This may happen when price rules are evaluated. Test this field in validation rules to avoid them firing prematurely. Do NOT add to page layout or otherwise update.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Incomplete__c: boolean;
    /**
     * <h3><b>List Unit Price</b></h3>
     * <p>List unit price for the product quoted by this line item. List Price originates from the price book.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ListPrice__c: number;
    /**
     * <h3><b>List Total</b></h3>
     * <p>List total price for this quote line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(OR(AND(SBQQ__Renewal__c, !SBQQ__Existing__c, !SBQQ__CarryoverLine__c, ISBLANK(SBQQ__PriorQuantity__c)),SBQQ__Bundled__c),0,CASE(SBQQ__PricingMethod__c,&#39;Block&#39;,SBQQ__ProratedListPrice__c * SBQQ__EffectiveQuantity__c,SBQQ__ProratedListPrice__c * IF(OR(AND(!SBQQ__Existing__c, !SBQQ__CarryoverLine__c), ISPICKVAL(SBQQ__SubscriptionPricing__c, &#39;Percent Of Total&#39;)),SBQQ__Quantity__c,SBQQ__Quantity__c - BLANKVALUE(SBQQ__PriorQuantity__c, 0) + BLANKVALUE(SBQQ__UpgradedQuantity__c, 0))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ListTotal__c: number;
    /**
     * <h3><b>Markup</b></h3>
     * <p>Markup amount on this item. This value is automatically calculated by applying markup rate or absolute amount to the product cost.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(NOT(ISBLANK(SBQQ__MarkupRate__c)), SBQQ__UnitCost__c * SBQQ__MarkupRate__c, SBQQ__UnitCost__c + SBQQ__MarkupAmount__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Markup__c: number;
    /**
     * <h3><b>Markup (Amt)</b></h3>
     * <p>Markup amount for this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__MarkupAmount__c: number;
    /**
     * <h3><b>Markup (%)</b></h3>
     * <p>Markup on this line item expressed as a percentage.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(6,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__MarkupRate__c: number;
    /**
     * <h3><b>Maximum List Unit Price</b></h3>
     * <p>Maximum list unit price for this product. Used to enforce list price ceiling for products with dynamically calculated list prices.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__MaximumPrice__c: number;
    /**
     * <h3><b>Minimum List Unit Price</b></h3>
     * <p>Minimum list unit price for this product. Used to enforce list price floor for products with dynamically calculated list prices.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__MinimumPrice__c: number;
    /**
     * <h3><b>Net Unit Price</b></h3>
     * <p>Net unit price for the product quoted by this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__NetPrice__c: number;
    /**
     * <h3><b>Net Total</b></h3>
     * <p>Net total price for this quote line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(SBQQ__Renewal__c, !SBQQ__Existing__c, ISBLANK(SBQQ__PriorQuantity__c)), 0, SBQQ__NetPrice__c * SBQQ__EffectiveQuantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__NetTotal__c: number;
    /**
     * <h3><b>Non Discountable</b></h3>
     * <p>Marks this line item as non-discountable.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__NonDiscountable__c: boolean;
    /**
     * <h3><b>Non Partner Discountable</b></h3>
     * <p>Marks this line item non discountable for partners.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__NonPartnerDiscountable__c: boolean;
    /**
     * <h3><b>Number</b></h3>
     * <p>Number indicating this line&#39;s position within its group or quote.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Number__c: number;
    /**
     * <h3><b>Optional</b></h3>
     * <p>Marks this line as optional. Optional line items don&#39;t contribute to quote totals and are not transferred to the Opportunity.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Optional__c: boolean;
    /**
     * <h3><b>Option Discount (%)</b></h3>
     * <p>If this line is for an optional SKU, this field captures any discount given to the package and extended to the option.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OptionDiscount__c: number;
    /**
     * <h3><b>Option Discount (Amt)</b></h3>
     * <p>Discount extended on this product because it&#39;s part of a package.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OptionDiscountAmount__c: number;
    /**
     * <h3><b>Option Level</b></h3>
     * <p>Indicates nest level of this option (only applies to lines that are generated from options).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OptionLevel__c: number;
    /**
     * <h3><b>Option Type</b></h3>
     * <p>Indicates the Option Type, which is copied from related Product Option. Determines how quantity is calculated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Component</code></td><td>Component</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Accessory</code></td><td>Accessory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Related Product</code></td><td>Related Product</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__OptionType__c: string;
    /**
     * <h3><b>Original Price</b></h3>
     * <p>The original unit price for the product quoted by this line item.  Original Price originates from the price book.  Also known as MSRP.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OriginalPrice__c: number;
    /**
     * <h3><b>Original Quote Line Id</b></h3>
     * <p>The id of the original quote line which this line was derived from.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__OriginalQuoteLineId__c: string;
    /**
     * <h3><b>Original Unit Cost</b></h3>
     * <p>Cost for one unit of product quoted on this line item if Cost Schedules were not applied.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OriginalUnitCost__c: number;
    /**
     * <h3><b>Package Cost</b></h3>
     * <p>Total cost for this package including the cost of its components.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__ComponentCost__c + (SBQQ__UnitCost__c * SBQQ__Quantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PackageCost__c: number;
    /**
     * <h3><b>Package List Total</b></h3>
     * <p>Total list price of this package including its components.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__ComponentListTotal__c +  SBQQ__ListTotal__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PackageListTotal__c: number;
    /**
     * <h3><b>Package Product Code</b></h3>
     * <p>Product code for the package generated by appending codes of selected components according to specified pattern.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PackageProductCode__c: string;
    /**
     * <h3><b>Package Product Description</b></h3>
     * <p>Product Description for the package generated by appending descriptions of selected components according to specified pattern.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PackageProductDescription__c: string;
    /**
     * <h3><b>Package Total</b></h3>
     * <p>Total price of this package including its components.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__ComponentTotal__c + SBQQ__NetTotal__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PackageTotal__c: number;
    /**
     * <h3><b>Partner Discount</b></h3>
     * <p>If your organization sells through a channel/VARl, you can give a “partner discount” on quote or the individual product line item on the quote. By default, partner discounts are applied after all automatic and discretionary discounts. The partner discount is taken into account in the Partner Price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PartnerDiscount__c: number;
    /**
     * <h3><b>Partner Unit Price</b></h3>
     * <p>Partner unit price. Price after partner discount but before distributor discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PartnerPrice__c: number;
    /**
     * <h3><b>Partner Total</b></h3>
     * <p>Total of the Partner Discount. By default, partner discounts are applied after all automatic and discretionary discounts. The partner discount is taken into account in the Partner Price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(SBQQ__Renewal__c, !SBQQ__Existing__c, ISBLANK(SBQQ__PriorQuantity__c)), 0, SBQQ__PartnerPrice__c * SBQQ__EffectiveQuantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PartnerTotal__c: number;
    /**
     * <h3><b>Previous Segment Regular Price</b></h3>
     * <p>When set, this value takes the place of the previous segment&#39;s regular price when calculating Uplift for this segment.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PreviousSegmentPrice__c: number;
    /**
     * <h3><b>Previous Segment Uplift</b></h3>
     * <p>When set, this value takes the place of the previous segment&#39;s uplift amount when calculating Uplift for this segment.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PreviousSegmentUplift__c: number;
    /**
     * <h3><b>Pricebook Entry Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(64)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PricebookEntryId__c: string;
    /**
     * <h3><b>Price Editable</b></h3>
     * <p>Flag that indicates if price is editable for this line item</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__PriceEditable__c: boolean;
    /**
     * <h3><b>Pricing Method</b></h3>
     * <p>Determines how the price for this line item is set. &quot;List&quot; = calculated by subtracting discount from list price. &quot;Cost&quot;  = calculated by adding markup to cost.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">List</code></td><td>List</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cost</code></td><td>Cost</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Block</code></td><td>Block</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Percent Of Total</code></td><td>Percent Of Total</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Custom</code></td><td>Custom</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__PricingMethod__c: string;
    /**
     * <h3><b>Pricing Method Editable</b></h3>
     * <p>Specifies whether pricing method can be edited on this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__PricingMethodEditable__c: boolean;
    /**
     * <h3><b>Prior Quantity</b></h3>
     * <p>Combined quantity of this product from prior purchases.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__PriorQuantity__c: number;
    /**
     * <h3><b>Product</b></h3>
     * <p>Product quoted by this line item.</p>
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
     * <p>Product quoted by this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Product__r: Product2;
    /**
     * <h3><b>Product Code</b></h3>
     * <p>Code for the product referenced by this line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Product__r.ProductCode</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductCode__c: string;
    /**
     * <h3><b>Product Family</b></h3>
     * <p>How you would categorize/group/organize this within Salesforce (whether it&#39;s a new or existing Product Family). Additionally, this field can be used during product selection to filter to the correct product or product SKU.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(SBQQ__Product__r.Family)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductFamily__c: string;
    /**
     * <h3><b>Product Name</b></h3>
     * <p>Name for the product referenced by this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBQQ__Product__r.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductName__c: string;
    /**
     * <h3><b>Product Option</b></h3>
     * <p>Product option that generated this line (if any).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__ProductOption__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductOption__c: string;
    /**
     * <h3><b>Product Option</b></h3>
     * <p>Product option that generated this line (if any).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__ProductOption__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductOption__r: SBQQ__ProductOption__c;
    /**
     * <h3><b>Product Subscription Type</b></h3>
     * <p>Set the quote line&#39;s product subscription type.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProductSubscriptionType__c: string;
    /**
     * <h3><b>Prorated List Price</b></h3>
     * <p>Prorated list unit price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProratedListPrice__c: number;
    /**
     * <h3><b>Prorated Unit Price</b></h3>
     * <p>Prorated price for the product quoted by this line item. This price will only differ from Special Price if the product is a subscription and the line item is being prorated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProratedPrice__c: number;
    /**
     * <h3><b>Prorate Multiplier</b></h3>
     * <p>Calculated ratio used to compute Prorated Price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,4)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ProrateMultiplier__c: number;
    /**
     * <h3><b>Quantity</b></h3>
     * <p>Quantity being quoted.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quantity__c: number;
    /**
     * <h3><b>Quote</b></h3>
     * <p>Quote to which this line item belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__c: string;
    /**
     * <h3><b>Quote</b></h3>
     * <p>Quote to which this line item belongs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link SBQQ__Quote__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Quote__r: SBQQ__Quote__c;
    /**
     * <h3><b>Regular Unit Price</b></h3>
     * <p>Unit price before additional discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RegularPrice__c: number;
    /**
     * <h3><b>Regular Total</b></h3>
     * <p>Unit price before additional discount multiplied by quantity.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(SBQQ__Renewal__c, !SBQQ__Existing__c, ISBLANK(SBQQ__PriorQuantity__c)), 0, SBQQ__RegularPrice__c * SBQQ__EffectiveQuantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RegularTotal__c: number;
    /**
     * <h3><b>Renewal</b></h3>
     * <p>Indicates this line item represents a product being renewed. Only non-subscription products for quote type &quot;Renewal&quot; will have this field set to true. Under normal circumstances this field should not be modified via UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Renewal__c: boolean;
    /**
     * <h3><b>Renewed Asset</b></h3>
     * <p>Asset being renewed if this line item represents product renewal.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Asset})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RenewedAsset__c: string;
    /**
     * <h3><b>Renewed Asset</b></h3>
     * <p>Asset being renewed if this line item represents product renewal.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Asset})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RenewedAsset__r: Asset;
    /**
     * <h3><b>Renewed Subscription</b></h3>
     * <p>Subscription being renewed by this quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Subscription__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RenewedSubscription__c: string;
    /**
     * <h3><b>Renewed Subscription</b></h3>
     * <p>Subscription being renewed by this quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Subscription__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RenewedSubscription__r: SBQQ__Subscription__c;
    /**
     * <h3><b>Required By</b></h3>
     * <p>Links this line to another line in the same quote whose product requires this line&#39;s product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RequiredBy__c: string;
    /**
     * <h3><b>Required By</b></h3>
     * <p>Links this line to another line in the same quote whose product requires this line&#39;s product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__RequiredBy__r: SBQQ__QuoteLine__c;
    /**
     * <h3><b>Segment Index</b></h3>
     * <p>For multi-segmented Products, Index representing this Quote Line&#39;s position in the segment table.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SegmentIndex__c: number;
    /**
     * <h3><b>Segment Key</b></h3>
     * <p>For multi-segmented Products, this is a shared key used to group multi-dimensional Quote Lines together.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SegmentKey__c: string;
    /**
     * <h3><b>Segment Label</b></h3>
     * <p>For multi-segmented Products, this is the Column header label (e.g. &quot;Year 1&quot;) associated with this line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(25)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SegmentLabel__c: string;
    /**
     * <h3><b>Source</b></h3>
     * <p>Source of cloned quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Source__c: string;
    /**
     * <h3><b>Source</b></h3>
     * <p>Source of cloned quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__QuoteLine__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Source__r: SBQQ__QuoteLine__c;
    /**
     * <h3><b>Special Price</b></h3>
     * <p>Special (volume-discounted or contracted) unit price for the product being quoted by this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SpecialPrice__c: number;
    /**
     * <h3><b>Special Price Description</b></h3>
     * <p>Name of the Discount Tier or description of Contracted Price that generated special price for this line item</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SpecialPriceDescription__c: string;
    /**
     * <h3><b>Special Price Type</b></h3>
     * <p>Stores the type of special price offered on this line item. Null value indicates there is no special pricing. Under normal circumstances this field should not be modified via UI.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Contracted Price</code></td><td>Contracted Price</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Renewal</code></td><td>Renewal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Custom</code></td><td>Custom</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__SpecialPriceType__c: string;
    /**
     * <h3><b>Start Date</b></h3>
     * <p>Date the service represented by this line item will begin (only applies if product is a subscription).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__StartDate__c: Date;
    /**
     * <h3><b>Subscribed Asset IDs</b></h3>
     * <p>Comma separated list of asset IDs covered by this subscription line. Only applicable to renewal quotes.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(19000)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscribedAssetIds__c: string;
    /**
     * <h3><b>Percent of Total Base</b></h3>
     * <p>Determines the price that serves as the base for percent-of-total calculations.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscriptionBase__c: string;
    /**
     * <h3><b>Percent of Total Category</b></h3>
     * <p>Category defined on the product to limit percent-of-total calculations to certain products. Copied from the product record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hardware</code></td><td>Hardware</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Software</code></td><td>Software</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__SubscriptionCategory__c: string;
    /**
     * <h3><b>Percent of Total (%)</b></h3>
     * <p>Percent of non-subscription total to be used as the price of this subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(4,3)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscriptionPercent__c: number;
    /**
     * <h3><b>Subscription Pricing</b></h3>
     * <p>Method of calculating the subscription price. A blank value indicates that the line item isn&#39;t a subscription product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fixed Price</code></td><td>Fixed Price</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Percent Of Total</code></td><td>Percent Of Total</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__SubscriptionPricing__c: string;
    /**
     * <h3><b>Percent of Total Scope</b></h3>
     * <p>Determines how percent of total product prices are calculated. If scope is set to &quot;Quote&quot; any non-subscription and include in percent of total product is used in calculating every percent of total price. If scope is set to &quot;Group&quot; only products in the same group as the percent of total product are used in calculation.</p>
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
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Group</code></td><td>Group</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__SubscriptionScope__c: string;
    /**
     * <h3><b>Percent of Total Target Price</b></h3>
     * <p>Price of the subscription target product on which maintenance should calculate.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscriptionTargetPrice__c: number;
    /**
     * <h3><b>Subscription Term</b></h3>
     * <p>Term for the subscription product in this line. If the product is not a subscription this value has no effect.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscriptionTerm__c: number;
    /**
     * <h3><b>Subscription Type</b></h3>
     * <p>Indicates the subscription type to determine contract&#39;s pricing.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__SubscriptionType__c: string;
    /**
     * <h3><b>Taxable</b></h3>
     * <p>Is this line item taxable.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SBQQ__Taxable__c: boolean;
    /**
     * <h3><b>Tax code</b></h3>
     * <p>Specifies the tax code for taxation rules.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TaxCode__c: string;
    /**
     * <h3><b>Term Discount</b></h3>
     * <p>Discount calculated by applying subscription term against term discount schedule.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscount__c: number;
    /**
     * <h3><b>Term Discount Schedule</b></h3>
     * <p>Schedule for discounts based on subscription term. This is useful when you want to show a breakdown of payments in separate groups, for different terms, yet you want to discount reflected for the entire duration of the subscription. Leave Term Discount Level blank if you want discount schedules applied based on the term of each line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscountSchedule__c: string;
    /**
     * <h3><b>Term Discount Schedule</b></h3>
     * <p>Schedule for discounts based on subscription term. This is useful when you want to show a breakdown of payments in separate groups, for different terms, yet you want to discount reflected for the entire duration of the subscription. Leave Term Discount Level blank if you want discount schedules applied based on the term of each line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscountSchedule__r: SBQQ__DiscountSchedule__c;
    /**
     * <h3><b>Term Discount Tier</b></h3>
     * <p>Tier within the term discount schedule used to discount this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountTier__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscountTier__c: string;
    /**
     * <h3><b>Term Discount Tier</b></h3>
     * <p>Tier within the term discount schedule used to discount this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountTier__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TermDiscountTier__r: SBQQ__DiscountTier__c;
    /**
     * <h3><b>Total Discount (Amt)</b></h3>
     * <p>Total discount amount for this line item including volume discount, contracted discount, and additional discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(SBQQ__Bundled__c, 0, IF(ISPICKVAL(SBQQ__DiscountScheduleType__c, &#39;Slab&#39;) &amp;&amp; NOT(SBQQ__Existing__c), (SBQQ__ProratedListPrice__c * SBQQ__Quantity__c - SBQQ__CustomerPrice__c), IF(ISPICKVAL(SBQQ__DiscountScheduleType__c, &#39;Slab&#39;) &amp;&amp; SBQQ__Existing__c, (SBQQ__ProratedListPrice__c * (SBQQ__Quantity__c-SBQQ__PriorQuantity__c) - SBQQ__CustomerPrice__c), (SBQQ__ProratedListPrice__c -  SBQQ__CustomerPrice__c) * SBQQ__EffectiveQuantity__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TotalDiscountAmount__c: number;
    /**
     * <h3><b>Total Discount (%)</b></h3>
     * <p>Total discount for this line item including volume discount, contracted discount, and additional discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(15,3)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(SBQQ__ProratedListPrice__c == 0, 0, IF(ISPICKVAL(SBQQ__DiscountScheduleType__c, &#39;Slab&#39;) &amp;&amp; NOT(SBQQ__Existing__c), IF(SBQQ__Quantity__c == 0, 0, (SBQQ__ProratedListPrice__c * SBQQ__Quantity__c - SBQQ__CustomerPrice__c) / (SBQQ__Quantity__c * SBQQ__ProratedListPrice__c)), IF(ISPICKVAL(SBQQ__DiscountScheduleType__c, &#39;Slab&#39;) &amp;&amp; SBQQ__Existing__c, IF(SBQQ__Quantity__c == SBQQ__PriorQuantity__c, 0, (SBQQ__ProratedListPrice__c * (SBQQ__Quantity__c-SBQQ__PriorQuantity__c) - SBQQ__CustomerPrice__c) / ((SBQQ__Quantity__c-SBQQ__PriorQuantity__c) * SBQQ__ProratedListPrice__c)), (SBQQ__ProratedListPrice__c - SBQQ__CustomerPrice__c) / SBQQ__ProratedListPrice__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TotalDiscountRate__c: number;
    /**
     * <h3><b>Unit Cost</b></h3>
     * <p>Cost for one unit of product quoted on this line item.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UnitCost__c: number;
    /**
     * <h3><b>Unprorated Net Price</b></h3>
     * <p>The full-term Net Price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UnproratedNetPrice__c: number;
    /**
     * <h3><b>Upgraded Asset</b></h3>
     * <p>Asset being upgraded by this quote line. Only populated if this quote line represents an upgrade.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Asset})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpgradedAsset__c: string;
    /**
     * <h3><b>Upgraded Asset</b></h3>
     * <p>Asset being upgraded by this quote line. Only populated if this quote line represents an upgrade.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Asset})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpgradedAsset__r: Asset;
    /**
     * <h3><b>Upgraded Quantity</b></h3>
     * <p>Quantity being upgraded.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpgradedQuantity__c: number;
    /**
     * <h3><b>Upgraded Subscription</b></h3>
     * <p>Subscription being upgraded by this quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Subscription__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpgradedSubscription__c: string;
    /**
     * <h3><b>Upgraded Subscription</b></h3>
     * <p>Subscription being upgraded by this quote line.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__Subscription__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpgradedSubscription__r: SBQQ__Subscription__c;
    /**
     * <h3><b>Uplift</b></h3>
     * <p>Uplift is applied as a % against the previous year&#39;s price; the resulting price is entered into the Regular Price field on top of Special or Contracted Prices. Uplifts compound year after year. Uplift cannot be applied to the 1st Year of any Subscription.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(7,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0.0</code></td></tr>
     * </table>
     */
    SBQQ__Uplift__c: number;
    /**
     * <h3><b>Uplift (Amt)</b></h3>
     * <p>Uplift (Amt) is measured as a currency amount. This is a system-calculated field, as Uplift can only be applied to MDQ segments in percent.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__UpliftAmount__c: number;
    /**
     * <h3><b>Volume Discount</b></h3>
     * <p>Discount schedules allow you to specify volume discounts based on a percentage of the product&#39;s price to be discounted using the quantity purchased or term. You can set the quantity or term ranges in tiers of different discount percentages. You can also apply discount schedules to Subscription Term.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(12,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__VolumeDiscount__c: number;
    /**
     * The reciprocal relationship for {@link SBQQ__SubscribedQuoteLine__c.SBQQ__AssetQuoteLine__c}.
     */
    SubscribedQuoteLines__r: SBQQ__SubscribedQuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__SubscribedQuoteLine__c.SBQQ__SubscriptionQuoteLine__c}.
     */
    SubscriptionQuoteLines__r: SBQQ__SubscribedQuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__Subscription__c.SBQQ__QuoteLine__c}.
     */
    Subscriptions__r: SBQQ__Subscription__c[];
}