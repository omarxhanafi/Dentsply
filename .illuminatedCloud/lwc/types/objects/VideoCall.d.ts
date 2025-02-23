// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VideoCall extends SObject 
{
    AcceptanceTimeStamp?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CombinedAttachments?: CombinedAttachment[];
    ConsentedUser?: User;
    ConsentedUserId?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    DurationInSeconds?: number;
    EndDateTime?: string;
    Event?: Event;
    EventId?: string;
    ExternalId?: string;
    Feeds?: VideoCallFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Host?: User;
    HostId?: string;
    IntelligenceScore?: number;
    IsCallCoachingIncluded?: boolean;
    IsDeleted?: boolean;
    IsDiarizationOptIn?: boolean;
    IsRecorded?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MeetingType?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    Shares?: VideoCallShare[];
    SharingRecordCollectionItems?: SharingRecordCollectionItem[];
    SobjectLookupValue?: AIInsightValue;
    StartDateTime?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TranscribedLanguage?: string;
    VendorMeetingKey?: string;
    VendorMeetingUuid?: string;
    VendorName?: string;
    VideoCall?: VideoCallParticipantChangeEvent;
    VideoCallRecord?: VideoCallRecordingChangeEvent;
    VideoCallRecords?: VideoCallRecording[];
    VideoCalls?: VideoCallParticipant[];
}