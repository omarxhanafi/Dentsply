// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountContactRoleChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    ChangeEventHeader: ChangeEventHeader;
    Contact: Contact;
    ContactId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsPrimary: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ReplayId: string;
    Role: string;
}