// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniDataPack extends SObject 
{
    ActionType: string;
    ActivationStatus: string;
    AsyncApexJobIdentifier: string;
    AsyncJobStatus: string;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    CombinedAttachments: CombinedAttachment[];
    Component: string;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: OmniDataPackFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    IsAddedToMultiPack: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    MultiPackUpdatedBy: User;
    MultiPackUpdatedById: string;
    MultiPackUpdatedDateTime: string;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessStatus: string;
    RelatedRecord: FlowRecordRelation;
    Shares: OmniDataPackShare[];
    SobjectLookupValue: AIInsightValue;
    Source: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Version: number;
}