// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductTransfer extends SObject 
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
    CurrencyIsoCode: string;
    Description: string;
    DestinationLocation: Location;
    DestinationLocationId: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EventRelations: EventRelation[];
    Events: Event[];
    ExpectedPickupDate: string;
    Feeds: ProductTransferFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ProductTransferHistory[];
    IsDeleted: boolean;
    IsProduct2Serialized: boolean;
    IsReceived: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Product2: Product2;
    Product2Id: string;
    /**
     * The reciprocal relationship for {@link ProductItemTransaction.RelatedRecordId}.
     */
    ProductItemTransactions: ProductItemTransaction[];
    ProductRequest: ProductRequest;
    ProductRequestId: string;
    ProductRequestLineItem: ProductRequestLineItem;
    ProductRequestLineItemId: string;
    ProductTransferNumber: string;
    /**
     * The reciprocal relationship for {@link ProductTransferState.ProductTransferId}.
     */
    ProductTransferStates: ProductTransferState[];
    QuantityReceived: number;
    QuantitySent: number;
    QuantityUnitOfMeasure: string;
    ReceivedBy: SObject;
    ReceivedById: string;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    ReturnOrder: ReturnOrder;
    ReturnOrderId: string;
    ReturnOrderLineItem: ReturnOrderLineItem;
    ReturnOrderLineItemId: string;
    /**
     * The reciprocal relationship for {@link SerializedProductTransaction.RelatedRecordId}.
     */
    SerializedProductTransactions: SerializedProductTransaction[];
    Shares: ProductTransferShare[];
    Shipment: Shipment;
    ShipmentExpectedDeliveryDate: string;
    ShipmentId: string;
    ShipmentStatus: string;
    ShipmentTrackingNumber: string;
    ShipmentTrackingUrl: string;
    SobjectLookupValue: AIInsightValue;
    SourceLocation: Location;
    SourceLocationId: string;
    SourceProductItem: ProductItem;
    SourceProductItemId: string;
    Status: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    TopicAssignments: TopicAssignment[];
    What: EventChangeEvent;
}