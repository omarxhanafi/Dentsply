// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordsetFilterCriteria extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApptBundleAggrPolicy.FilterCriteriaId}.
     */
    ApptBundleAggrPolicies: ApptBundleAggrPolicy[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    CustomLogic: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: RecordsetFilterCriteriaFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FilteredObject: string;
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: RecordsetFilterCriteriaHistory[];
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LogicalOperator: string;
    /**
     * The reciprocal relationship for {@link MaintenanceWorkRule.RecordsetFilterCriteriaId}.
     */
    MaintenanceWorkRules: MaintenanceWorkRule[];
    Name: string;
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    /**
     * The reciprocal relationship for {@link MaintenanceWorkRule.RecordsetFilterCriteriaId}.
     */
    RecordsetFilterCriteria: MaintenanceWorkRule;
    /**
     * The reciprocal relationship for {@link RecordsetFilterCriteriaRule.RecordsetFilterCriteriaId}.
     */
    RecordsetFilterCriteriaRules: RecordsetFilterCriteriaRule[];
    /**
     * The reciprocal relationship for {@link RecordsetFltrCritMonitor.RecordsetFilterCriteriaId}.
     */
    RecordsetFltrCritMonitors: RecordsetFltrCritMonitor[];
    RelatedRecord: FlowRecordRelation;
    Shares: RecordsetFilterCriteriaShare[];
    /**
     * The reciprocal relationship for {@link Shift.RecordsetFilterCriteriaId}.
     */
    ShiftRecordsetFilterCriteria: Shift[];
    /**
     * The reciprocal relationship for {@link ShiftTemplate.RecordsetFilterCriteriaId}.
     */
    ShiftTemplates: ShiftTemplate[];
    SobjectLookupValue: AIInsightValue;
    SourceObject: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link TimeSlot.RecordsetFilterCriteriaId}.
     */
    TimeSlots: TimeSlot[];
}