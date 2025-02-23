// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkCapacityUsage extends SObject 
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
    AvailCapacityHours?: number;
    CapacityLimitRelaxation?: string;
    CombinedAttachments?: CombinedAttachment[];
    ConsumptionToLimitRatio?: number;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    EndDate?: Date;
    Feeds?: WorkCapacityUsageFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    IsDeleted?: boolean;
    IsSvcTerrOnlyLimit?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LimitationPercentage?: number;
    LimitationUnits?: string;
    LimitationValue?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    OriginalLimit?: number;
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
    Shares?: WorkCapacityUsageShare[];
    StartDate?: Date;
    SvcApptField?: string;
    SvcApptFieldValDplyNm?: string;
    SvcApptFieldValue?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TimeConsumedInHours?: number;
    TimeConsumedInMinutes?: number;
    TimePeriod?: string;
    TopicAssignments?: TopicAssignment[];
    WcuUniqueField1?: string;
    WcuUniqueField2?: string;
    WorkCapacityUsageNumber?: string;
}