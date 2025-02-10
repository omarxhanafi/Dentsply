// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Entitlement extends SObject 
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
    Asset: Asset;
    AssetId: string;
    AssetWarranty: AssetWarranty;
    AssetWarrantyId: string;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    BusinessHours: BusinessHours;
    BusinessHoursId: string;
    Cases: Case[];
    CasesPerEntitlement: number;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    ContractLineItem: ContractLineItem;
    ContractLineItemId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EndDate: Date;
    Entitlement: CaseChangeEvent;
    /**
     * The reciprocal relationship for {@link EntitlementContact.EntitlementId}.
     */
    EntitlementContacts: EntitlementContact[];
    EventRelations: EventRelation[];
    Events: Event[];
    Feeds: EntitlementFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: EntitlementHistory[];
    IsDeleted: boolean;
    IsPerIncident: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Location: Location;
    LocationId: string;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
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
    RemainingCases: number;
    RemainingWorkOrders: number;
    ServiceContract: ServiceContract;
    ServiceContractId: string;
    SlaProcess: SlaProcess;
    SlaProcessId: string;
    SobjectLookupValue: AIInsightValue;
    StartDate: Date;
    Status: string;
    SvcApptBookingWindows: OperatingHours;
    SvcApptBookingWindowsId: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    Type: string;
    What: EventChangeEvent;
    WorkOrders: WorkOrder[];
    WorkOrdersPerEntitlement: number;
}