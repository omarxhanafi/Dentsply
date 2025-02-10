// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountPartner extends SObject 
{
    AccountFrom: Account;
    AccountFromId: string;
    AccountTo: Account;
    AccountToId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    IsPrimary: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Opportunity: Opportunity;
    OpportunityId: string;
    ReversePartner: AccountPartner;
    ReversePartnerId: string;
    Role: string;
    SystemModstamp: string;
}