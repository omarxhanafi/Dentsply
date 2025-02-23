// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionConsent extends SObject 
{
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
    BusinessBrand?: BusinessBrand;
    BusinessBrandId?: string;
    CombinedAttachments?: CombinedAttachment[];
    CommSubscriptionChannelType?: CommSubscriptionChannelType;
    CommSubscriptionChannelTypeId?: string;
    /**
     * The reciprocal relationship for {@link CommSubscriptionTiming.CommSubscriptionConsentId}.
     */
    CommSubscriptionConsent?: CommSubscriptionTiming;
    /**
     * The reciprocal relationship for {@link CommSubscriptionTiming.CommSubscriptionConsentId}.
     */
    CommSubscriptionTimings?: CommSubscriptionTiming[];
    ConsentCapturedDateTime?: string;
    ConsentCapturedSource?: string;
    ConsentGiver?: SObject;
    ConsentGiverId?: string;
    ContactPoint?: SObject;
    ContactPointId?: string;
    ContactPointValue?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DataUsePurpose?: DataUsePurpose;
    DataUsePurposeId?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    EffectiveFromDate?: Date;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EngagementChannelType?: EngagementChannelType;
    EngagementChannelTypeId?: string;
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: CommSubscriptionConsentFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: CommSubscriptionConsentHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Party?: Individual;
    PartyId?: string;
    PartyRole?: SObject;
    PartyRoleId?: string;
    PrivacyConsentStatus?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    Shares?: CommSubscriptionConsentShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    What?: EventChangeEvent;
}