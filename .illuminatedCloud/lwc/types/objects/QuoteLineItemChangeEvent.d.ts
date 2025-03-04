// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuoteLineItemChangeEvent extends SObject 
{
    /**
     * <h3><b>Base Discount (%)</b></h3>
     * <p>Will show the customer specific or offer specific pre defined discount.
     * This is (1-BasePrice/RetailPrice)*100</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BaseDiscount__c?: number;
    /**
     * <h3><b>Base Price</b></h3>
     * <p>Shows the Customer or quote specific price if any exists. This could be a price set and being pre-approved in the Product Bundle, or if later using e.g. the AX pricing microservice should have the customer price from AX. Both scenarios this is a discounted price that is already set and approved. Not a dicounted price set by the rep/user. If no pre-approved discounted price is provided this will be the same as the retail price or list price if coming from SFDC.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BasePrice__c?: number;
    /**
     * <h3><b>Can Be Deleted</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CanBeDeleted__c?: boolean;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    Discount?: number;
    /**
     * <h3><b>Discounted Sales Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(NULLVALUE(Discount, 0) = 0, UnitPrice, UnitPrice * (1 - Discount))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DiscountedUnitPrice__c?: number;
    /**
     * <h3><b>Extra Applied Discount</b></h3>
     * <p>Quantity * (BasePrice__c - NetPrice__c)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ExtraAppliedDiscount__c?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LineNumber?: string;
    /**
     * <h3><b>Net Price</b></h3>
     * <p>Shows the final discounted price - the Net Price per Unit</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NetPrice__c?: number;
    OpportunityLineItem?: OpportunityLineItem;
    OpportunityLineItemId?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    Quote?: Quote;
    QuoteId?: string;
    /**
     * <h3><b>Quote Line Bundle</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link QuoteProductBundle__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    QuoteProductBundle__c?: string;
    /**
     * <h3><b>Quote Line Bundle</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link QuoteProductBundle__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    QuoteProductBundle__r?: QuoteProductBundle__c;
    ReplayId?: string;
    /**
     * <h3><b>Retail Price</b></h3>
     * <p>Shows the Retail price of the Quote Line item.
     * This can come from the Bundle pricing, AX microservice or if from nowhere else it will be the SFDC PriceBook list price.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    RetailPrice__c?: number;
    ServiceDate?: Date;
    SortOrder?: number;
    /**
     * <h3><b>Tariff Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product2.TariffCode__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TariffCode__c?: string;
    /**
     * <h3><b>Total Discount Amount</b></h3>
     * <p>Quantity * (RetailPrice__c - NetPrice__c)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalDiscountAmount__c?: number;
    /**
     * <h3><b>Total Discount (%)</b></h3>
     * <p>(RetailPrice__c - NetPrice__c) / RetailPrice__c</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalDiscountPercentage__c?: number;
    /**
     * <h3><b>Total List Price</b></h3>
     * <p>PricebookEntry.UnitPrice * Quantity
     * Calculated by the record-triggered Flow</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalListPrice__c?: number;
    /**
     * <h3><b>Total Price w/ VAT</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalPriceVAT__c?: number;
    /**
     * <h3><b>Total Unit Price</b></h3>
     * <p>Quantity * UnitPrice. Calculated Total amount without discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalUnitPrice__c?: number;
    /**
     * <h3><b>Unit Discount Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UnitDiscountAmount__c?: number;
    UnitPrice?: number;
    /**
     * <h3><b>VAT Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VATAmount__c?: number;
    /**
     * <h3><b>VAT Amount (Numeric)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VATAmountNumeric__c?: number;
    /**
     * <h3><b>VAT</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    VATRate__c?: number;
    /**
     * <h3><b>VATRateText</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VATRateText__c?: string;
}