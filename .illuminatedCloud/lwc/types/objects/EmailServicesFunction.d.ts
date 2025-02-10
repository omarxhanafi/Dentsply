// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailServicesFunction extends SObject 
{
    Addresses: EmailServicesAddress[];
    AddressInactiveAction: string;
    ApexClass: ApexClass;
    ApexClassId: string;
    AttachmentOption: string;
    AuthenticationFailureAction: string;
    AuthorizationFailureAction: string;
    AuthorizedSenders: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ErrorRoutingAddress: string;
    FunctionInactiveAction: string;
    FunctionName: string;
    IsActive: boolean;
    IsAuthenticationRequired: boolean;
    IsErrorRoutingEnabled: boolean;
    IsTextAttachmentsAsBinary: boolean;
    IsTlsRequired: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OverLimitAction: string;
    SystemModstamp: string;
}