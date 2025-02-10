// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ShipmentChangeEvent extends SObject 
{
    ActualDeliveryDate: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DeliveredTo: SObject;
    DeliveredToId: string;
    DeliveryMethod: OrderDeliveryMethod;
    DeliveryMethodId: string;
    Description: string;
    DestinationLocation: Location;
    DestinationLocationId: string;
    ExpectedDeliveryDate: string;
    FulfillmentOrder: FulfillmentOrder;
    FulfillmentOrderId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: User;
    OwnerId: string;
    Provider: string;
    ReplayId: string;
    ShipFromAddress: Address;
    ShipFromCity: string;
    ShipFromCountry: string;
    ShipFromGeocodeAccuracy: string;
    ShipFromLatitude: number;
    ShipFromLongitude: number;
    ShipFromPostalCode: string;
    ShipFromState: string;
    ShipFromStreet: string;
    ShipmentNumber: string;
    ShipToAddress: Address;
    ShipToCity: string;
    ShipToCountry: string;
    ShipToGeocodeAccuracy: string;
    ShipToLatitude: number;
    ShipToLongitude: number;
    ShipToName: string;
    ShipToPostalCode: string;
    ShipToState: string;
    ShipToStreet: string;
    SourceLocation: Location;
    SourceLocationId: string;
    Status: string;
    TotalItemsQuantity: number;
    TrackingNumber: string;
    TrackingUrl: string;
}