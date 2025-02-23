// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailServicesAddress extends SObject 
{
    AuthorizedSenders?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    EmailDomainName?: string;
    EmailServicesAddress?: EmailRoutingAddress;
    Function?: EmailServicesFunction;
    FunctionId?: string;
    IsActive?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LocalPart?: string;
    RunAsUser?: User;
    RunAsUserId?: string;
    SystemModstamp?: string;
}