// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingLink extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EntityType?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MessagingChannel?: MessagingChannel;
    MessagingChannelId?: string;
    RecordType?: RecordType;
    RecordTypeId?: string;
    ShouldAttemptAutoLink?: boolean;
    ShouldPromptCreate?: boolean;
    SystemModstamp?: string;
}