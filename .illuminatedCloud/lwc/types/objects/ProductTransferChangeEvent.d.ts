// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductTransferChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    DestinationLocation: Location;
    DestinationLocationId: string;
    ExpectedPickupDate: string;
    IsReceived: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: User;
    OwnerId: string;
    Product2: Product2;
    Product2Id: string;
    ProductRequestLineItem: ProductRequestLineItem;
    ProductRequestLineItemId: string;
    ProductTransferNumber: string;
    QuantityReceived: number;
    QuantitySent: number;
    QuantityUnitOfMeasure: string;
    ReceivedBy: SObject;
    ReceivedById: string;
    ReplayId: string;
    ReturnOrderLineItem: ReturnOrderLineItem;
    ReturnOrderLineItemId: string;
    Shipment: Shipment;
    ShipmentId: string;
    SourceLocation: Location;
    SourceLocationId: string;
    SourceProductItem: ProductItem;
    SourceProductItemId: string;
    Status: string;
}