// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricingAdjBatchJob extends SObject 
{
    ActivityHistories: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    EffectiveFrom: string;
    EffectiveTo: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EventRelations: EventRelation[];
    Events: Event[];
    Feeds: PricingAdjBatchJobFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: PricingAdjBatchJobHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastTriggeredDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PricingAdjBatchJobLogs: PricingAdjBatchJobLog[];
    ProcessedRecordsCount: number;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RecordCount: number;
    RecordList: string;
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    Shares: PricingAdjBatchJobShare[];
    SobjectLookupValue: AIInsightValue;
    Status: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: string;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    UpdateType: string;
    UpdateValue: number;
    What: EventChangeEvent;
}