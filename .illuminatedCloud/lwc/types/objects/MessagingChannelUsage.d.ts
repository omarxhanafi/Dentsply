// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingChannelUsage extends SObject 
{
    ConsentType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeploymentStatus: string;
    DeploymentType: string;
    DisabledTime: string;
    ErrorReason: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MessagingChannel: MessagingChannel;
    MessagingChannelId: string;
    MessagingChannelUsage: CommSubscriptionChannelTypeChangeEvent;
    MessagingChannelUsages: CommSubscriptionChannelType[];
    RoutingOverride: string;
    SystemModstamp: string;
}