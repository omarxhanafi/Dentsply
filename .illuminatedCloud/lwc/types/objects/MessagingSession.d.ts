// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingSession extends SObject 
{
    AcceptTime?: string;
    AgentMessageCount?: number;
    AgentType?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Case?: Case;
    CaseId?: string;
    Cases?: Case[];
    ChannelEndUserFormula?: string;
    ChannelGroup?: string;
    ChannelIntent?: string;
    ChannelKey?: string;
    ChannelLocale?: string;
    ChannelName?: string;
    ChannelType?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    Conversation?: Conversation;
    ConversationId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    EndedByType?: string;
    EndTime?: string;
    EndUserAccount?: Account;
    EndUserAccountId?: string;
    EndUserContact?: Contact;
    EndUserContactId?: string;
    EndUserMessageCount?: number;
    Engagement?: EngagementAttendeeChangeEvent;
    EngagementAttendees?: EngagementAttendee[];
    EngagementTopics?: EngagementTopic[];
    Feeds?: MessagingSessionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: MessagingSessionHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.LinkedEntityId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MessagingChannel?: MessagingChannel;
    MessagingChannelId?: string;
    MessagingEndUser?: MessagingEndUser;
    MessagingEndUserId?: string;
    /**
     * The reciprocal relationship for {@link MessagingSessionMetrics.MessagingSessionId}.
     */
    MessagingSessionMetricsAgg?: MessagingSessionMetrics[];
    Name?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    Origin?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PreviewDetails?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    SessionKey?: string;
    Shares?: MessagingSessionShare[];
    Source?: CaseChangeEvent;
    StartTime?: string;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TargetUser?: User;
    TargetUserId?: string;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem?: AgentWork;
}