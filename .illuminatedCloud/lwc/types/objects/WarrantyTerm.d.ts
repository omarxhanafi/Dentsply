// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WarrantyTerm extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link AssetWarranty.WarrantyTermId}.
     */
    AssetWarrantyTerms?: AssetWarranty[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    Code?: string;
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
    EffectiveStartDate?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    ExchangeType?: string;
    Exclusions?: string;
    ExpensesCovered?: number;
    ExpensesCoveredDuration?: number;
    ExpensesCoveredUnitOfTime?: string;
    Feeds?: WarrantyTermFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: WarrantyTermHistory[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsTransferable?: boolean;
    LaborCovered?: number;
    LaborCoveredDuration?: number;
    LaborCoveredUnitOfTime?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PartsCovered?: number;
    PartsCoveredDuration?: number;
    PartsCoveredUnitOfTime?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductWarrantyTerm.WarrantyTermId}.
     */
    ProductWarrantyTerms?: ProductWarrantyTerm[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    Shares?: WarrantyTermShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    WarrantyDuration?: number;
    /**
     * The reciprocal relationship for {@link AssetWarranty.WarrantyTermId}.
     */
    WarrantyTerm?: AssetWarranty;
    WarrantyTermName?: string;
    WarrantyType?: string;
    WarrantyUnitOfTime?: string;
    What?: EventChangeEvent;
}