// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointAddressChangeEvent extends SObject 
{
    ActiveFromDate: Date;
    ActiveToDate: Date;
    Address: Address;
    AddressType: string;
    BestTimeToContactEndTime: Time;
    BestTimeToContactStartTime: Time;
    BestTimeToContactTimezone: string;
    ChangeEventHeader: ChangeEventHeader;
    City: string;
    ContactPointPhone: ContactPointPhone;
    ContactPointPhoneId: string;
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    GeocodeAccuracy: string;
    IsDefault: boolean;
    IsPrimary: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Latitude: number;
    Longitude: number;
    Name: string;
    Owner: User;
    OwnerId: string;
    Parent: SObject;
    ParentId: string;
    PostalCode: string;
    ReplayId: string;
    State: string;
    Street: string;
}