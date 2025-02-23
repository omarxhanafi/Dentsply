// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillmentOrderLineItemChangeEvent extends SObject 
{
    Action?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    EndDate?: string;
    FulfillmentAsset?: FulfillmentAsset;
    FulfillmentAssetId?: string;
    FulfillmentOrder?: FulfillmentOrder;
    FulfillmentOrderId?: string;
    FulfillmentOrderLineItemNumber?: string;
    GrossUnitPrice?: number;
    IsReship?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OrderItem?: OrderItem;
    OrderItemId?: string;
    OriginalQuantity?: number;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    QuantityUnitOfMeasure?: string;
    RejectedQuantity?: number;
    RejectReason?: string;
    ReplayId?: string;
    ReshipReason?: string;
    ServiceDate?: string;
    TotalAdjustmentAmount?: number;
    TotalAdjustmentAmountWithTax?: number;
    TotalAdjustmentTaxAmount?: number;
    TotalAmount?: number;
    TotalLineAmount?: number;
    TotalLineAmountWithTax?: number;
    TotalLineTaxAmount?: number;
    TotalPrice?: number;
    TotalTaxAmount?: number;
    Type?: string;
    TypeCode?: string;
    UnitPrice?: number;
}