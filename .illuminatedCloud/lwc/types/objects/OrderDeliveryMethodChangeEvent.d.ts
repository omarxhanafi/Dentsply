// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderDeliveryMethodChangeEvent extends SObject 
{
    Carrier: string;
    ChangeEventHeader: ChangeEventHeader;
    ClassOfService: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    IsActive: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    Product: Product2;
    ProductId: string;
    ReferenceNumber: string;
    ReplayId: string;
}