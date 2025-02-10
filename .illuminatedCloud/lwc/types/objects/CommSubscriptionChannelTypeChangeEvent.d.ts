// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionChannelTypeChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CommunicationSubscription: CommSubscription;
    CommunicationSubscriptionId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DataUsePurpose: CommSubscription;
    DataUsePurposeId: string;
    EngagementChannelType: EngagementChannelType;
    EngagementChannelTypeId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MessagingChannel: MessagingChannel;
    MessagingChannelId: string;
    MessagingChannelUsage: MessagingChannelUsage;
    MessagingChannelUsageId: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ReplayId: string;
}