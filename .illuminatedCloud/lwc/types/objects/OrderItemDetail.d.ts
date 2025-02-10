// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItemDetail extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AssetActionSourceReferences: AssetActionSource[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    BillingReference: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: OrderItemDetailFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: OrderItemDetailHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LineNumber: number;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    NetUnitPrice: number;
    OrderItem: OrderItem;
    OrderItemId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PriceWaterfallIdentifier: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Quantity: number;
    ReferenceDate: Date;
    ReferenceNumber: string;
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalLineAmount: number;
    TotalPrice: number;
    UnitPrice: number;
}