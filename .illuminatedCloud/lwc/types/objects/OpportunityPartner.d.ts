// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityPartner extends SObject 
{
    AccountTo?: Account;
    AccountToId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    IsPrimary?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    ReversePartner?: OpportunityPartner;
    ReversePartnerId?: string;
    Role?: string;
    SystemModstamp?: string;
}