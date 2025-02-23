// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReturnOrderLineItemChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    DestinationLocation?: Location;
    DestinationLocationId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OrderItem?: OrderItem;
    OrderItemId?: string;
    ProcessingPlan?: string;
    Product2?: Product2;
    Product2Id?: string;
    ProductItem?: ProductItem;
    ProductItemId?: string;
    ProductRequestLineItem?: ProductRequestLineItem;
    ProductRequestLineItemId?: string;
    QuantityExpected?: number;
    QuantityReceived?: number;
    QuantityRejected?: number;
    QuantityReturned?: number;
    QuantityUnitOfMeasure?: string;
    ReasonForChangeText?: string;
    ReasonForRejection?: string;
    ReasonForReturn?: string;
    RepaymentMethod?: string;
    ReplayId?: string;
    ReturnOrder?: ReturnOrder;
    ReturnOrderId?: string;
    ReturnOrderLineItemNumber?: string;
    SourceLocation?: Location;
    SourceLocationId?: string;
}