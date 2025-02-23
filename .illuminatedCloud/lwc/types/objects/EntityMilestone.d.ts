// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EntityMilestone extends SObject 
{
    ActualElapsedTimeInDays?: number;
    ActualElapsedTimeInHrs?: number;
    ActualElapsedTimeInMins?: number;
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
    BusinessHours?: BusinessHours;
    BusinessHoursId?: string;
    CombinedAttachments?: CombinedAttachment[];
    CompletionDate?: string;
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
    ElapsedTimeInDays?: number;
    ElapsedTimeInHrs?: number;
    ElapsedTimeInMins?: number;
    Feeds?: EntityMilestoneFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: EntityMilestoneHistory[];
    IsCompleted?: boolean;
    IsDeleted?: boolean;
    IsViolated?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MilestoneType?: MilestoneType;
    MilestoneTypeId?: string;
    Name?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentEntity?: WorkOrder;
    ParentEntityId?: string;
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    SlaProcess?: SlaProcess;
    SlaProcessId?: string;
    SobjectLookupValue?: AIInsightValue;
    StartDate?: string;
    StoppedTimeInDays?: number;
    StoppedTimeInHrs?: number;
    StoppedTimeInMins?: number;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetDate?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TargetResponseInDays?: number;
    TargetResponseInHrs?: number;
    TargetResponseInMins?: number;
    TimeRemainingInDays?: number;
    TimeRemainingInHrs?: string;
    TimeRemainingInMins?: string;
    TimeSinceTargetInDays?: number;
    TimeSinceTargetInHrs?: string;
    TimeSinceTargetInMins?: string;
}