// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingEndUserChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    ChangeEventHeader: ChangeEventHeader;
    Contact: Contact;
    ContactId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    HasInitialResponseSent: boolean;
    IsFullyOptedIn: boolean;
    IsoCountryCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Lead: Lead;
    LeadId: string;
    Locale: string;
    MessageType: string;
    MessagingChannel: MessagingChannel;
    MessagingChannelId: string;
    MessagingConsentStatus: string;
    MessagingPlatformKey: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ProfilePictureUrl: string;
    ReplayId: string;
}