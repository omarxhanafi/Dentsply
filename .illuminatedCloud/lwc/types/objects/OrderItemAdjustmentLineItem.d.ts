// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItemAdjustmentLineItem extends SObject 
{
    AdjustmentAmountScope: string;
    AdjustmentCause: PriceAdjustmentTier;
    AdjustmentCauseId: string;
    AdjustmentSource: string;
    AdjustmentType: string;
    AdjustmentValue: number;
    Amount: number;
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
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: OrderItemAdjustmentLineItemFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: OrderItemAdjustmentLineItemHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Order: Order;
    OrderAdjustmentGroup: OrderAdjustmentGroup;
    OrderAdjustmentGroupId: string;
    OrderChangeLogs: OrderChangeLog[];
    OrderId: string;
    OrderItem: OrderItem;
    OrderItemId: string;
    OrderItemTaxLineItems: OrderItemTaxLineItem[];
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    Priority: number;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedAdjustmentLineItem: OrderItemAdjustmentLineItem;
    RelatedAdjustmentLineItemId: string;
    RelatedAdjustmentLineItems: OrderItemAdjustmentLineItem[];
    RelatedOrderChangeLogs: OrderChangeLog[];
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalAmtWithTax: number;
    TotalTaxAmount: number;
}