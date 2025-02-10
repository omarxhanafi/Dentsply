// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniProcess extends SObject 
{
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    CustomHtmlTemplates: string;
    CustomJavaScript: string;
    Description: string;
    DesignerCustomizationType: string;
    DiscoveryFrameworkUsageType: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    ElementTypeComponentMapping: string;
    Feeds: OmniProcessFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    IsActive: boolean;
    IsDeleted: boolean;
    IsIntegrationProcedure: boolean;
    IsMetadataCacheDisabled: boolean;
    IsOmniScriptEmbeddable: boolean;
    IsTestProcedure: boolean;
    IsWebCompEnabled: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastPreviewPage: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Namespace: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OmniProcessDefinitions: OmniProcessCompilation[];
    OmniProcessElements: OmniProcessElement[];
    OmniProcessKey: string;
    OmniProcessType: string;
    OSSavedSessionOmniProcess: OmniScriptSavedSession[];
    OverrideKey: string;
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PropertySetConfig: string;
    RelatedRecord: FlowRecordRelation;
    RequiredPermission: string;
    ResponseCacheType: string;
    Shares: OmniProcessShare[];
    SobjectLookupValue: AIInsightValue;
    SubType: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Type: string;
    UniqueName: string;
    VersionNumber: number;
    WebComponentKey: string;
}