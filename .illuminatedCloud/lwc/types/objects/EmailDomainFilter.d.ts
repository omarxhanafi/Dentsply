// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailDomainFilter extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EmailRelay: EmailRelay;
    EmailRelayId: string;
    FromDomain: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PriorityNumber: number;
    SystemModstamp: string;
    ToDomain: string;
}