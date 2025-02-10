// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Shipment extends SObject 
{
    ActivityHistories: ActivityHistory[];
    ActualDeliveryDate: string;
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
    DeliveredTo: SObject;
    DeliveredToId: string;
    DeliveryMethod: OrderDeliveryMethod;
    DeliveryMethodId: string;
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
    ExpectedDeliveryDate: string;
    Feeds: ShipmentFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    FulfillmentOrder: FulfillmentOrder;
    FulfillmentOrderId: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ShipmentHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductTransfer.ShipmentId}.
     */
    ProductTransfers: ProductTransfer[];
    Provider: string;
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
    Shares: ShipmentShare[];
    ShipFromAddress: Address;
    ShipFromCity: string;
    ShipFromCountry: string;
    ShipFromGeocodeAccuracy: string;
    ShipFromLatitude: number;
    ShipFromLongitude: number;
    ShipFromPostalCode: string;
    ShipFromState: string;
    ShipFromStreet: string;
    /**
     * The reciprocal relationship for {@link ProductTransfer.ShipmentId}.
     */
    Shipment: ProductTransfer;
    /**
     * The reciprocal relationship for {@link ShipmentItem.ShipmentId}.
     */
    ShipmentItems: ShipmentItem[];
    ShipmentNumber: string;
    ShipToAddress: Address;
    ShipToCity: string;
    ShipToCountry: string;
    ShipToGeocodeAccuracy: string;
    ShipToLatitude: number;
    ShipToLongitude: number;
    ShipToName: string;
    ShipToPostalCode: string;
    ShipToState: string;
    ShipToStreet: string;
    SobjectLookupValue: AIInsightValue;
    SourceLocation: Location;
    SourceLocationId: string;
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
    TotalItemsQuantity: number;
    TrackingNumber: string;
    TrackingUrl: string;
    What: EventChangeEvent;
}