// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniScriptSavedSession extends SObject 
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
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: OmniScriptSavedSessionFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FileBasedOmniScriptName: string;
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    IsContentEncoded: boolean;
    IsDeleted: boolean;
    IsWebCompEnabled: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastSavedDateTime: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OmniScript: OmniProcess;
    OmniScriptId: string;
    OmniScriptLanguage: string;
    OmniScriptLocaleCode: string;
    OmniScriptSubType: string;
    OmniScriptType: string;
    OmniScriptVersionNumber: number;
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    RelatedLabel: string;
    RelatedName: string;
    RelatedRecord: FlowRecordRelation;
    RelatedRecordIdentifier: string;
    RelatedType: string;
    RelativeResumeUrl: string;
    ResumeUrl: string;
    SavedSessionKey: string;
    Shares: OmniScriptSavedSessionShare[];
    SobjectLookupValue: AIInsightValue;
    Status: string;
    StatusCategory: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}