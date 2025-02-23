// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OperatingHours extends SObject 
{
    /**
     * The reciprocal relationship for {@link Account.OperatingHoursId}.
     */
    Accounts?: Account[];
    /**
     * The reciprocal relationship for {@link AppointmentTopicTimeSlot.OperatingHoursId}.
     */
    AppointmentTopicTimeSlots?: AppointmentTopicTimeSlot[];
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
    CombinedAttachments?: CombinedAttachment[];
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
    Feeds?: OperatingHoursFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: OperatingHoursHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    /**
     * The reciprocal relationship for {@link Account.OperatingHoursId}.
     */
    OperatingHours?: Account;
    /**
     * The reciprocal relationship for {@link OperatingHoursHoliday.OperatingHoursId}.
     */
    OperatingHoursHolidays?: OperatingHoursHoliday[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link ServiceResourcePreference.OperatingHoursId}.
     */
    ServiceResourcePreferences?: ServiceResourcePreference[];
    /**
     * The reciprocal relationship for {@link ServiceTerritory.OperatingHoursId}.
     */
    ServiceTerritories?: ServiceTerritory[];
    Shares?: OperatingHoursShare[];
    SobjectLookupValue?: AIInsightValue;
    /**
     * The reciprocal relationship for {@link Entitlement.SvcApptBookingWindowsId}.
     */
    SvcApptBookingWindows?: Entitlement;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link TimeSlot.OperatingHoursId}.
     */
    TimeSlots?: TimeSlot[];
    TimeZone?: string;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.FSL__VisitingHours__c}.
     */
    Work_Order_Line_Items__r?: WorkOrderLineItem[];
    /**
     * The reciprocal relationship for {@link WorkOrder.FSL__VisitingHours__c}.
     */
    Work_Orders__r?: WorkOrder[];
}