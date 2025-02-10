// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactCenterChannel extends SObject 
{
    Channel: MessagingChannel;
    ChannelId: string;
    ContactCenter: CallCenter;
    ContactCenterId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    SystemModstamp: string;
    VoicemailFallbackQueue: Group;
    VoicemailFallbackQueueId: string;
    VoicemailHandler: string;
}