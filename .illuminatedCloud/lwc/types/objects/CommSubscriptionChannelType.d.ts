// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionChannelType extends SObject 
{
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
    CombinedAttachments: CombinedAttachment[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.CommSubscriptionChannelTypeId}.
     */
    CommSubscriptionChannelType: CommSubscriptionConsent;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.CommSubscriptionChannelTypeId}.
     */
    CommSubscriptionConsents: CommSubscriptionConsent[];
    CommunicationSubscription: CommSubscription;
    CommunicationSubscriptionId: string;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DataUsePurpose: CommSubscription;
    DataUsePurposeId: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    EngagementChannelType: EngagementChannelType;
    EngagementChannelTypeId: string;
    Feeds: CommSubscriptionChannelTypeFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: CommSubscriptionChannelTypeHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    MessagingChannel: MessagingChannel;
    MessagingChannelId: string;
    MessagingChannelUsage: MessagingChannelUsage;
    MessagingChannelUsageId: string;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    Shares: CommSubscriptionChannelTypeShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}