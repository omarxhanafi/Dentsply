// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkOrderLineItem extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    Address?: Address;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    /**
     * <h3><b>Article (SKU)</b></h3>
     * <p>Article number from the Product record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product2.Article__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ArticleSKU__c?: string;
    Asset?: Asset;
    AssetActionSourceReferences?: AssetActionSource[];
    AssetId?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.ParentWorkOrderLineItemId}.
     */
    ChildWorkOrderLineItems?: WorkOrderLineItem[];
    City?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.RootWorkOrderLineItemId}.
     */
    DescendantWorkOrderLineItems?: WorkOrderLineItem[];
    Description?: string;
    DigitalSignatures?: DigitalSignature[];
    Discount?: number;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    Duration?: number;
    DurationInMinutes?: number;
    DurationType?: string;
    /**
     * The reciprocal relationship for {@link DynamicDataCapture.ParentRecordId}.
     */
    DynamicDataCaptures?: DynamicDataCapture[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EndDate?: string;
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: WorkOrderLineItemFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * <h3><b>Is Fill In Candidate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    FSL__IsFillInCandidate__c?: boolean;
    /**
     * <h3><b>Visiting Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OperatingHours})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__VisitingHours__c?: string;
    /**
     * <h3><b>Visiting Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OperatingHours})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__VisitingHours__r?: OperatingHours;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GeocodeAccuracy?: string;
    Histories?: WorkOrderLineItemHistory[];
    IsClosed?: boolean;
    IsDeleted?: boolean;
    IsGeneratedFromMaintenancePlan?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Latitude?: number;
    LineItemNumber?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.LinkedEntityId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListPrice?: number;
    Location?: Location;
    LocationId?: string;
    Longitude?: number;
    MaintenancePlan?: MaintenancePlan;
    MaintenancePlanId?: string;
    MinimumCrewSize?: number;
    /**
     * The reciprocal relationship for {@link WorkPlan.ParentRecordId}.
     */
    NewWorkPlans?: WorkPlan[];
    /**
     * The reciprocal relationship for {@link WorkStep.ParentRecordId}.
     */
    NewWorkSteps?: WorkStep[];
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Order?: Order;
    OrderId?: string;
    Parent?: DigitalSignatureChangeEvent;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ParentWorkOrderLineItem?: WorkOrderLineItem;
    ParentWorkOrderLineItemId?: string;
    PostalCode?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Priority?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Product2?: Product2;
    Product2Id?: string;
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.WorkOrderLineItemId}.
     */
    ProductRequestLineItems?: ProductRequestLineItem[];
    /**
     * The reciprocal relationship for {@link ProductRequest.WorkOrderLineItemId}.
     */
    ProductRequests?: ProductRequest[];
    /**
     * The reciprocal relationship for {@link ProductConsumed.WorkOrderLineItemId}.
     */
    ProductsConsumed?: ProductConsumed[];
    /**
     * The reciprocal relationship for {@link ProductRequired.ParentRecordId}.
     */
    ProductsRequired?: ProductRequired[];
    Quantity?: number;
    RecommendedCrewSize?: number;
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
    /**
     * The reciprocal relationship for {@link ResourcePreference.RelatedRecordId}.
     */
    ResourcePreferences?: ResourcePreference[];
    ReturnOrder?: ReturnOrder;
    ReturnOrderId?: string;
    ReturnOrderLineItem?: ReturnOrderLineItem;
    ReturnOrderLineItemId?: string;
    RootWorkOrderLineItem?: WorkOrderLineItem;
    RootWorkOrderLineItemId?: string;
    ServiceAppointmentCount?: number;
    ServiceAppointments?: ServiceAppointment[];
    /**
     * The reciprocal relationship for {@link ServiceReport.ParentId}.
     */
    ServiceReports?: ServiceReport[];
    ServiceReportTemplate?: ServiceReportLayout;
    ServiceReportTemplateId?: string;
    ServiceTerritory?: ServiceTerritory;
    ServiceTerritoryId?: string;
    /**
     * The reciprocal relationship for {@link SkillRequirement.RelatedRecordId}.
     */
    SkillRequirements?: SkillRequirement[];
    SobjectLookupValue?: AIInsightValue;
    StartDate?: string;
    State?: string;
    Status?: string;
    StatusCategory?: string;
    Street?: string;
    Subject?: string;
    Subtotal?: number;
    SuggestedMaintenanceDate?: Date;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    /**
     * The reciprocal relationship for {@link TimeSheetEntry.WorkOrderLineItemId}.
     */
    TimeSheetEntries?: TimeSheetEntry[];
    TopicAssignments?: TopicAssignment[];
    TotalPrice?: number;
    UnitPrice?: number;
    What?: EventChangeEvent;
    WorkOrder?: WorkOrder;
    WorkOrderId?: string;
    /**
     * The reciprocal relationship for {@link ProductConsumed.WorkOrderLineItemId}.
     */
    WorkOrderLineItem?: ProductConsumed;
    /**
     * The reciprocal relationship for {@link WorkPlan.WorkOrderLineItemId}.
     */
    WorkPlans?: WorkPlan[];
    /**
     * The reciprocal relationship for {@link WorkStep.WorkOrderLineItemId}.
     */
    WorkSteps?: WorkStep[];
    WorkType?: WorkType;
    WorkTypeId?: string;
}