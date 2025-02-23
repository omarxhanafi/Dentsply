// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReplyEmailSettings extends SObject 
{
    AutoReplyMessage?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DomainName?: string;
    FwdEmailAddress?: string;
    IsAutoReplyEnabled?: boolean;
    IsDeleteAutoRepliesEnabled?: boolean;
    IsDeleted?: boolean;
    IsEmailForwardingEnabled?: boolean;
    IsUnsubscribeManualRequestsEnabled?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    SystemModstamp?: string;
    UnsubscribeTerms?: string;
}