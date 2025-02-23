// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingSessionChangeEvent extends SObject 
{
    AcceptTime?: string;
    AgentMessageCount?: number;
    AgentType?: string;
    Case?: Case;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ChannelEndUserFormula?: string;
    ChannelGroup?: string;
    ChannelIntent?: string;
    ChannelKey?: string;
    ChannelLocale?: string;
    ChannelName?: string;
    ChannelType?: string;
    Conversation?: Conversation;
    ConversationId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EndedByType?: string;
    EndTime?: string;
    EndUserAccount?: Account;
    EndUserAccountId?: string;
    EndUserContact?: Contact;
    EndUserContactId?: string;
    EndUserMessageCount?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    MessagingChannel?: MessagingChannel;
    MessagingChannelId?: string;
    MessagingEndUser?: MessagingEndUser;
    MessagingEndUserId?: string;
    Name?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    Origin?: string;
    Owner?: User;
    OwnerId?: string;
    PreviewDetails?: string;
    ReplayId?: string;
    SessionKey?: string;
    StartTime?: string;
    Status?: string;
    TargetUser?: User;
    TargetUserId?: string;
}