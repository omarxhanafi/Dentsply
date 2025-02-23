// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingEndUser extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Contact?: Contact;
    ContactId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    ConversationParticipants?: ConversationParticipant[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    HasInitialResponseSent?: boolean;
    Histories?: MessagingEndUserHistory[];
    IsDeleted?: boolean;
    IsFullyOptedIn?: boolean;
    IsoCountryCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    Locale?: string;
    MessageType?: string;
    MessagingChannel?: MessagingChannel;
    MessagingChannelId?: string;
    MessagingConsentStatus?: string;
    MessagingEndUser?: MessagingDeliveryError;
    MessagingPlatformKey?: string;
    /**
     * The reciprocal relationship for {@link MessagingSession.MessagingEndUserId}.
     */
    MessagingSessions?: MessagingSession[];
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    ProfilePictureUrl?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: MessagingEndUserShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}