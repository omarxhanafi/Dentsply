// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Topic extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomBrands: CustomBrand[];
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: TopicFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    LinkedEntity: ContentDocumentLinkChangeEvent;
    ListEmailRecipientSources: ListEmailRecipientSource[];
    Localization: TopicLocalization[];
    ManagedTopicType: string;
    Name: string;
    Network: Network;
    NetworkId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TalkingAbout: number;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Topic: KnowledgeableUser;
    TopicAssignments: TopicAssignment[];
}