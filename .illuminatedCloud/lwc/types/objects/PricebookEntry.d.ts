// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricebookEntry extends SObject 
{
    /**
     * <h3><b>Approval Level 1</b></h3>
     * <p>Field to catch the monetary value of the first level approval needed for the SKU</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevel1__c?: number;
    /**
     * <h3><b>Approval Level 2</b></h3>
     * <p>Field to catch the monetary value of the second level approval needed for the SKU</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevel2__c?: number;
    /**
     * <h3><b>Approval Level 3</b></h3>
     * <p>Field to catch the monetary value of the third level approval needed for the SKU</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevel3__c?: number;
    AssetActionSources?: AssetActionSource[];
    ContextRecord?: FlowExecutionErrorEvent;
    /**
     * The reciprocal relationship for {@link ContractLineItem.PricebookEntryId}.
     */
    ContractLineItems?: ContractLineItem[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Dummy Field</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dummy_Field__c?: string;
    /**
     * <h3><b>Free Product Threshold</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FreeProductThreshold__c?: number;
    Histories?: PricebookEntryHistory[];
    IsActive?: boolean;
    IsArchived?: boolean;
    IsDeleted?: boolean;
    IsDerived?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * <h3><b>Local Product Description</b></h3>
     * <p>TFUS-000001282</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(120)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LocalProductDescription__c?: string;
    Name?: string;
    /**
     * <h3><b>No Contract</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    No_Contract__c?: boolean;
    OpportunityLineItems?: OpportunityLineItem[];
    OrderItems?: OrderItem[];
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    /**
     * The reciprocal relationship for {@link ContractLineItem.PricebookEntryId}.
     */
    PricebookEntry?: ContractLineItem;
    PriceBookEntryDerivedPrices?: PriceBookEntryDerivedPrice[];
    /**
     * <h3><b>Primary?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Primary__c?: boolean;
    Product2?: Product2;
    Product2Id?: string;
    ProductCode?: string;
    /**
     * The reciprocal relationship for {@link ProductConsumed.PricebookEntryId}.
     */
    ProductsConsumed?: ProductConsumed[];
    ProductSellingModel?: ProductSellingModel;
    ProductSellingModelId?: string;
    QuoteLineItems?: QuoteLineItem[];
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * <h3><b>Retail Price</b></h3>
     * <p>To be filled with the retail price if the Pricebook has wholesale prices</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Retail_Price__c?: number;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    UnitPrice?: number;
    UseStandardPrice?: boolean;
    /**
     * <h3><b>Wholesale Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Wholesale_Price__c?: number;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.PricebookEntryId}.
     */
    WorkOrderLineItems?: WorkOrderLineItem[];
}