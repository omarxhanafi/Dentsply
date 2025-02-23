// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VoiceCall extends SObject 
{
    Activity?: Task;
    ActivityId?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CallConnectDateTime?: string;
    CallDisposition?: string;
    CallDurationInSeconds?: number;
    CallEndDateTime?: string;
    CallerIdType?: string;
    CallOrigin?: string;
    CallRecording?: VoiceCallRecording;
    CallRecordingId?: string;
    CallStartDateTime?: string;
    CallType?: string;
    CombinedAttachments?: CombinedAttachment[];
    ConferenceKey?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyCode?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    Engagement?: EngagementAttendeeChangeEvent;
    EngagementAttendees?: EngagementAttendee[];
    EngagementTopics?: EngagementTopic[];
    Feeds?: VoiceCallFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FromPhoneNumber?: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    IsDeleted?: boolean;
    IsDiarizationOptIn?: boolean;
    IsRecorded?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.LinkedEntityId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MediaProvider?: CallCoachingMediaProvider;
    MediaProviderId?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Price?: number;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    Shares?: VoiceCallShare[];
    SharingRecordCollectionItems?: SharingRecordCollectionItem[];
    SobjectLookupValue?: AIInsightValue;
    SourceType?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    ToPhoneNumber?: string;
    TranscribedLanguage?: string;
    User?: User;
    UserId?: string;
    VendorCallKey?: string;
    VendorParentCallKey?: string;
    VendorType?: string;
    VoiceCall?: VoiceCallRecording;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem?: AgentWork;
}