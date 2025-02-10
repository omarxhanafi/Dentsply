// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PartnerNetworkConnection extends SObject 
{
    Account: Account;
    AccountId: string;
    Connection: AccountFeed;
    ConnectionName: string;
    ConnectionReceived: Account;
    ConnectionSent: Account;
    ConnectionStatus: string;
    Contact: Contact;
    ContactId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PrimaryContact: User;
    PrimaryContactId: string;
    ResponseDate: string;
    UserOrGroup: GroupMember;
}