// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRequestLineItem extends SObject 
{
    Account: Account;
    AccountId: string;
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
    Case: Case;
    CaseId: string;
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
    /**
     * <h3><b>Quantity Received</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyReceived__c: number;
    /**
     * <h3><b>Quantity Ready To Pick Up</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyShipped__c: number;
    /**
     * <h3><b>ERP Requested Quantity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyTransfer__c: number;
    /**
     * <h3><b>Last ERP Activity Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPTransDate__c: Date;
    EventRelations: EventRelation[];
    Events: Event[];
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.ParentId}.
     */
    Feeds: ProductRequestLineItem[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ProductRequestLineItemHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    NeedByDate: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Parent: ProductRequest;
    ParentEntities: NetworkActivityAudit[];
    ParentId: string;
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Product2: Product2;
    Product2Id: string;
    /**
     * The reciprocal relationship for {@link ProductTransfer.ProductRequestLineItemId}.
     */
    ProductRequestLineItem: ProductTransfer;
    ProductRequestLineItemNumber: string;
    /**
     * The reciprocal relationship for {@link ProductTransfer.ProductRequestLineItemId}.
     */
    ProductTransfers: ProductTransfer[];
    QuantityRequested: number;
    QuantityUnitOfMeasure: string;
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
    /**
     * The reciprocal relationship for {@link ReturnOrderLineItem.ProductRequestLineItemId}.
     */
    ReturnOrderLineItems: ReturnOrderLineItem[];
    ShipmentType: string;
    ShipToAddress: Address;
    ShipToCity: string;
    ShipToCountry: string;
    ShipToGeocodeAccuracy: string;
    ShipToLatitude: number;
    ShipToLongitude: number;
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
    What: EventChangeEvent;
    WorkOrder: WorkOrder;
    WorkOrderId: string;
    WorkOrderLineItem: WorkOrderLineItem;
    WorkOrderLineItemId: string;
}