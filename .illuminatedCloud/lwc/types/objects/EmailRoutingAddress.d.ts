// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailRoutingAddress extends SObject 
{
    Address: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EmailRoutingAddress: EmailMessage;
    EmailServicesAddress: EmailServicesAddress;
    EmailServicesAddressId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PersonalName: string;
    SetupEntityAccessItems: SetupEntityAccess[];
    SystemModstamp: string;
}