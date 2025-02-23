// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniScriptSavedSession extends SObject 
{
    ActivityHistories?: ActivityHistory[];
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
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: OmniScriptSavedSessionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FileBasedOmniScriptName?: string;
    FirstPublishLocation?: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    IsContentEncoded?: boolean;
    IsDeleted?: boolean;
    IsWebCompEnabled?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastSavedDateTime?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OmniScript?: OmniProcess;
    OmniScriptId?: string;
    OmniScriptLanguage?: string;
    OmniScriptLocaleCode?: string;
    OmniScriptSubType?: string;
    OmniScriptType?: string;
    OmniScriptVersionNumber?: number;
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RecordAlertWhat?: RecordAlert[];
    RelatedLabel?: string;
    RelatedName?: string;
    RelatedRecord?: FlowRecordRelation;
    RelatedRecordIdentifier?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    RelatedType?: string;
    Relation?: EventRelationChangeEvent;
    RelativeResumeUrl?: string;
    ResumeUrl?: string;
    SavedSessionKey?: string;
    Shares?: OmniScriptSavedSessionShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    StatusCategory?: string;
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