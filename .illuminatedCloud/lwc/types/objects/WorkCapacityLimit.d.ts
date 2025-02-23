// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkCapacityLimit extends SObject 
{
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
    CapacityLimitRelaxation?: string;
    CombinedAttachments?: CombinedAttachment[];
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
    EndDate?: Date;
    Feeds?: WorkCapacityLimitFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: WorkCapacityLimitHistory[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsFriday?: boolean;
    IsMonday?: boolean;
    IsSaturday?: boolean;
    IsSunday?: boolean;
    IsSvcTerrOnlyLimit?: boolean;
    IsThursday?: boolean;
    IsTuesday?: boolean;
    IsWednesday?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LimitationUnits?: string;
    LimitationValue?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    ServiceTerritory?: ServiceTerritory;
    ServiceTerritoryId?: string;
    Shares?: WorkCapacityLimitShare[];
    StartDate?: Date;
    SvcApptField?: string;
    SvcApptFieldValDplyNm?: string;
    SvcApptFieldValue?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TimePeriod?: string;
    TopicAssignments?: TopicAssignment[];
    WorkCapacityLimitNumber?: string;
}