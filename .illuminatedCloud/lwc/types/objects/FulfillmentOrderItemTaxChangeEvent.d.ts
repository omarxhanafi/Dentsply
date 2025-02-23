// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillmentOrderItemTaxChangeEvent extends SObject 
{
    Amount?: number;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    FulfillmentOrder?: FulfillmentOrder;
    FulfillmentOrderId?: string;
    FulfillmentOrderItemAdjust?: FulfillmentOrderItemAdjustment;
    FulfillmentOrderItemAdjustId?: string;
    FulfillmentOrderItemTaxNumber?: string;
    FulfillmentOrderLineItem?: FulfillmentOrderLineItem;
    FulfillmentOrderLineItemId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Rate?: number;
    ReplayId?: string;
    TaxEffectiveDate?: Date;
    Type?: string;
}