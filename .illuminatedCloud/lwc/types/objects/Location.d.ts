// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Location extends SObject 
{
    ActivityHistories: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link Address.ParentId}.
     */
    Addresses: Address[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link Asset.LocationId}.
     */
    Assets: Asset[];
    /**
     * The reciprocal relationship for {@link Entitlement.LocationId}.
     */
    AssetWarranties: Entitlement[];
    /**
     * The reciprocal relationship for {@link AssociatedLocation.LocationId}.
     */
    AssociatedLocations: AssociatedLocation[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    /**
     * The reciprocal relationship for {@link Location.ParentLocationId}.
     */
    ChildLocations: Location[];
    CloseDate: Date;
    CombinedAttachments: CombinedAttachment[];
    ConstructionEndDate: Date;
    ConstructionStartDate: Date;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * The reciprocal relationship for {@link ContractLineItem.LocationId}.
     */
    ContractLineItems: ContractLineItem[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link ProductRequest.DestinationLocationId}.
     */
    DestinationLocation: ProductRequest;
    /**
     * The reciprocal relationship for {@link Shipment.DestinationLocationId}.
     */
    DestinationLocationShipments: Shipment[];
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.DestinationLocationId}.
     */
    DestinationProductRequestLineItems: ProductRequestLineItem[];
    /**
     * The reciprocal relationship for {@link ProductRequest.DestinationLocationId}.
     */
    DestinationProductRequests: ProductRequest[];
    /**
     * The reciprocal relationship for {@link ProductTransfer.DestinationLocationId}.
     */
    DestinationProductTransfers: ProductTransfer[];
    /**
     * The reciprocal relationship for {@link ReturnOrderLineItem.DestinationLocationId}.
     */
    DestinationReturnOrderLineItems: ReturnOrderLineItem[];
    /**
     * The reciprocal relationship for {@link ReturnOrder.DestinationLocationId}.
     */
    DestinationReturnOrders: ReturnOrder[];
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    DrivingDirections: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    /**
     * The reciprocal relationship for {@link EquipmentBooking__c.Location__c}.
     */
    Equipment_Bookings__r: EquipmentBooking__c[];
    /**
     * <h3><b>ERP Warehouse Id</b></h3>
     * <p>This field will be used as a reference to get Location names as what it exist in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    ERPWarehouseId__c: string;
    EventRelations: EventRelation[];
    Events: Event[];
    ExternalReference: string;
    Feeds: LocationFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link FulfillmentOrder.FulfilledFromLocationId}.
     */
    FulfilledFromLocation: FulfillmentOrder;
    /**
     * The reciprocal relationship for {@link FulfillmentOrder.FulfilledFromLocationId}.
     */
    FulfillmentOrders: FulfillmentOrder[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: LocationHistory[];
    IsDeleted: boolean;
    IsInventoryLocation: boolean;
    IsMobile: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Latitude: number;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Location: Location;
    LocationLevel: number;
    LocationType: string;
    Logo: ContentAsset;
    LogoId: string;
    Longitude: number;
    /**
     * The reciprocal relationship for {@link MaintenancePlan.LocationId}.
     */
    MaintenancePlans: MaintenancePlan[];
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    OpenDate: Date;
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentLocation: Location;
    ParentLocationId: string;
    ParentRecord: NetworkFeedResponseMetric;
    PossessionDate: Date;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductItem.LocationId}.
     */
    ProductItems: ProductItem[];
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
    RemodelEndDate: Date;
    RemodelStartDate: Date;
    /**
     * The reciprocal relationship for {@link ResourcePreference.RelatedRecordId}.
     */
    ResourcePreferences: ResourcePreference[];
    RootLocation: Location;
    RootLocationId: string;
    /**
     * The reciprocal relationship for {@link ServiceResource.LocationId}.
     */
    ServiceResources: ServiceResource[];
    /**
     * The reciprocal relationship for {@link ServiceTerritoryLocation.LocationId}.
     */
    ServiceTerritories: ServiceTerritoryLocation[];
    Shares: LocationShare[];
    SobjectLookupValue: AIInsightValue;
    /**
     * The reciprocal relationship for {@link ProductRequest.SourceLocationId}.
     */
    SourceLocation: ProductRequest;
    /**
     * The reciprocal relationship for {@link Shipment.SourceLocationId}.
     */
    SourceLocationShipments: Shipment[];
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.SourceLocationId}.
     */
    SourceProductRequestLineItems: ProductRequestLineItem[];
    /**
     * The reciprocal relationship for {@link ProductRequest.SourceLocationId}.
     */
    SourceProductRequests: ProductRequest[];
    /**
     * The reciprocal relationship for {@link ProductTransfer.SourceLocationId}.
     */
    SourceProductTransfers: ProductTransfer[];
    /**
     * The reciprocal relationship for {@link ReturnOrderLineItem.SourceLocationId}.
     */
    SourceReturnOrderLineItems: ReturnOrderLineItem[];
    /**
     * The reciprocal relationship for {@link ReturnOrder.SourceLocationId}.
     */
    SourceReturnOrders: ReturnOrder[];
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    TimeZone: string;
    VisitorAddress: Address;
    VisitorAddressId: string;
    What: EventChangeEvent;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.LocationId}.
     */
    WorkOrderLineItems: WorkOrderLineItem[];
    WorkOrders: WorkOrder[];
    /**
     * The reciprocal relationship for {@link WorkPlanSelectionRule.LocationId}.
     */
    WorkPlanSelectionRules: WorkPlanSelectionRule[];
}