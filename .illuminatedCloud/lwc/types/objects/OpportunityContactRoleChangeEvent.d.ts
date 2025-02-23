// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityContactRoleChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    ReplayId?: string;
    Role?: string;
}