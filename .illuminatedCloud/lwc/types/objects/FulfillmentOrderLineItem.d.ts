// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillmentOrderLineItem extends SObject 
{
    Action: string;
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
    EndDate: string;
    Feeds: FulfillmentOrderLineItemFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    FulfillmentOrder: FulfillmentOrder;
    FulfillmentOrderId: string;
    /**
     * The reciprocal relationship for {@link FulfillmentOrderItemAdjustment.FulfillmentOrderLineItemId}.
     */
    FulfillmentOrderItemAdjustments: FulfillmentOrderItemAdjustment[];
    FulfillmentOrderItemTaxes: FulfillmentOrderItemTax[];
    FulfillmentOrderLineItem: FulfillOrdItemQtyChgEvent;
    FulfillmentOrderLineItemNumber: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    GrossUnitPrice: number;
    IsDeleted: boolean;
    IsReship: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    OrderItem: OrderItem;
    OrderItemId: string;
    OriginalQuantity: number;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Product2: Product2;
    Product2Id: string;
    Quantity: number;
    QuantityUnitOfMeasure: string;
    RejectedQuantity: number;
    RejectReason: string;
    RelatedRecord: FlowRecordRelation;
    ReshipReason: string;
    ServiceDate: string;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalAdjustmentAmount: number;
    TotalAdjustmentAmountWithTax: number;
    TotalAdjustmentTaxAmount: number;
    TotalAmount: number;
    TotalLineAmount: number;
    TotalLineAmountWithTax: number;
    TotalLineTaxAmount: number;
    TotalPrice: number;
    TotalTaxAmount: number;
    Type: string;
    TypeCode: string;
    UnitPrice: number;
}