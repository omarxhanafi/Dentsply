// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocument extends SObject 
{
    ArchivedBy: User;
    ArchivedById: string;
    ArchivedDate: Date;
    AuditableEntities: NetworkActivityAudit[];
    /**
     * The reciprocal relationship for {@link AuthorizationFormText.ContentDocumentId}.
     */
    AuthorizationFormTexts: AuthorizationFormText[];
    /**
     * The reciprocal relationship for {@link Campaign.CampaignImageId}.
     */
    CampaignImage: Campaign;
    ChildRecord: ContentFolderMember;
    ContentAsset: ContentAsset;
    ContentAssetId: string;
    ContentDistributions: ContentDistribution[];
    ContentDocListViewMappings: ContentDocumentListViewMapping[];
    ContentDocument: AttachedContentDocument;
    ContentDocumentLinks: ContentDocumentLink[];
    ContentModifiedDate: string;
    ContentSize: number;
    ContentVersions: ContentVersion[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link DocumentGenerationProcess.TokenDataContentDocumentId}.
     */
    DocGenerationProcessContentDocs: DocumentGenerationProcess[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateContentDoc.ContentDocumentId}.
     */
    DocTempContentDocContentDocs: DocumentTemplateContentDoc[];
    Entity: NetworkModeration;
    EntityIdentifier: ContentNotification;
    Feeds: ContentDocumentFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FileExtension: string;
    FileType: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ContentDocumentHistory[];
    /**
     * The reciprocal relationship for {@link IntegrationProviderExecution.RequestPayloadId}.
     */
    IntegrationProviderExecutions: IntegrationProviderExecution[];
    IsArchived: boolean;
    IsDeleted: boolean;
    IsInternalOnly: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LatestPublishedVersion: ContentVersion;
    LatestPublishedVersionId: string;
    MediaContent: VoiceCallRecording;
    Owner: User;
    OwnerId: string;
    Parent: ContentWorkspace;
    ParentEntities: NetworkActivityAudit[];
    ParentId: string;
    ParentRecord: NetworkFeedResponseMetric;
    PublishStatus: string;
    Record: FeedAttachment;
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link IntegrationProviderExecution.RequestPayloadId}.
     */
    RequestPayload: IntegrationProviderExecution;
    /**
     * The reciprocal relationship for {@link IntegrationProviderExecution.ResponsePayloadId}.
     */
    ResponsePayload: IntegrationProviderExecution;
    SharingPrivacy: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Title: string;
    TopicAssignments: TopicAssignment[];
}