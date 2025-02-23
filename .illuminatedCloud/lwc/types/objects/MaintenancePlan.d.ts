// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MaintenancePlan extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityHistories?: ActivityHistory[];
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
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    Contact?: Contact;
    ContactId?: string;
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
    DoesAutoGenerateWorkOrders?: boolean;
    DoesGenerateUponCompletion?: boolean;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EndDate?: Date;
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: MaintenancePlanFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Frequency?: number;
    FrequencyType?: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GenerationHorizon?: number;
    GenerationTimeframe?: number;
    GenerationTimeframeType?: string;
    Histories?: MaintenancePlanHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Location?: Location;
    LocationId?: string;
    /**
     * The reciprocal relationship for {@link MaintenanceAsset.MaintenancePlanId}.
     */
    MaintenanceAssets?: MaintenanceAsset[];
    /**
     * The reciprocal relationship for {@link MaintenanceAsset.MaintenancePlanId}.
     */
    MaintenancePlan?: MaintenanceAsset;
    MaintenancePlanNumber?: string;
    MaintenancePlanTitle?: string;
    MaintenanceWindowEndDays?: number;
    MaintenanceWindowStartDays?: number;
    /**
     * The reciprocal relationship for {@link MaintenanceWorkRule.ParentMaintenancePlanId}.
     */
    MaintenanceWorkRules?: MaintenanceWorkRule[];
    NextSuggestedMaintenanceDate?: Date;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    /**
     * The reciprocal relationship for {@link MaintenanceWorkRule.ParentMaintenancePlanId}.
     */
    ParentMaintenancePlan?: MaintenanceWorkRule;
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    ServiceContract?: ServiceContract;
    ServiceContractId?: string;
    Shares?: MaintenancePlanShare[];
    SobjectLookupValue?: AIInsightValue;
    StartDate?: Date;
    SvcApptGenerationMethod?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
    WorkOrderGenerationMethod?: string;
    WorkOrderGenerationStatus?: string;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.MaintenancePlanId}.
     */
    WorkOrderLineItems?: WorkOrderLineItem[];
    WorkOrders?: WorkOrder[];
    WorkType?: WorkType;
    WorkTypeId?: string;
}