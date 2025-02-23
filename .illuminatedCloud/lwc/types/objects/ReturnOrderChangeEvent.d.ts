// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReturnOrderChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Case?: Case;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    DestinationLocation?: Location;
    DestinationLocationId?: string;
    ExpectedArrivalDate?: string;
    ExpirationDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Order?: Order;
    OrderId?: string;
    Owner?: User;
    OwnerId?: string;
    ProductRequest?: ProductRequest;
    ProductRequestId?: string;
    ProductServiceCampaign?: ProductServiceCampaign;
    ProductServiceCampaignId?: string;
    ReplayId?: string;
    ReturnedBy?: User;
    ReturnedById?: string;
    ReturnOrderNumber?: string;
    ShipFromAddress?: Address;
    ShipFromCity?: string;
    ShipFromCountry?: string;
    ShipFromGeocodeAccuracy?: string;
    ShipFromLatitude?: number;
    ShipFromLongitude?: number;
    ShipFromPostalCode?: string;
    ShipFromState?: string;
    ShipFromStreet?: string;
    ShipmentType?: string;
    SourceLocation?: Location;
    SourceLocationId?: string;
    Status?: string;
    StatusCategory?: string;
}