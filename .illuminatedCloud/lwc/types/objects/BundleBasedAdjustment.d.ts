// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BundleBasedAdjustment extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AdjustmentType?: string;
    AdjustmentValue?: number;
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
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    EffectiveFrom?: string;
    EffectiveTo?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: BundleBasedAdjustmentFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: BundleBasedAdjustmentHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    /**
     * <h3><b>Lower Bound</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LowerBound__c?: number;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentProduct?: Product2;
    ParentProductId?: string;
    ParentProductSellingModel?: ProductSellingModel;
    ParentProductSellingModelId?: string;
    ParentRecord?: NetworkFeedResponseMetric;
    PriceAdjustmentSchedule?: PriceAdjustmentSchedule;
    PriceAdjustmentScheduleId?: string;
    PricingTerm?: number;
    PricingTermUnit?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Product?: Product2;
    ProductId?: string;
    ProductSellingModel?: ProductSellingModel;
    ProductSellingModelId?: string;
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    RootBundle?: Product2;
    RootBundleId?: string;
    RootProductSellingModel?: ProductSellingModel;
    RootProductSellingModelId?: string;
    ScheduleType?: string;
    SellingModelType?: string;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    /**
     * <h3><b>Upper Bound</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UpperBound__c?: number;
    What?: EventChangeEvent;
}