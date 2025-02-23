// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderAdjustmentGroup extends SObject 
{
    AdjustmentCause?: PriceAdjustmentTier;
    AdjustmentCauseId?: string;
    AdjustmentSource?: string;
    AdjustmentType?: string;
    AdjustmentValue?: number;
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
    Feeds?: OrderAdjustmentGroupFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GrandTotalAmount?: number;
    Histories?: OrderAdjustmentGroupHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Order?: Order;
    OrderChangeLogs?: OrderChangeLog[];
    OrderId?: string;
    OrderItemAdjustmentLineItems?: OrderItemAdjustmentLineItem[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Priority?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedAdjustmentGroup?: OrderAdjustmentGroup;
    RelatedAdjustmentGroupId?: string;
    RelatedAdjustmentGroups?: OrderAdjustmentGroup[];
    RelatedOrderChangeLogs?: OrderChangeLog[];
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalAmount?: number;
    TotalTaxAmount?: number;
    Type?: string;
}