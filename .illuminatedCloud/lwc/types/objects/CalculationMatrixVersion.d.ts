// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CalculationMatrixVersion extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    ApiName?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    /**
     * The reciprocal relationship for {@link CalcMatrixColumnRange.CalculationMatrixVersionId}.
     */
    CalcMatrixVersionColumnRanges?: CalcMatrixColumnRange[];
    CalculationMatrix?: CalculationMatrix;
    CalculationMatrixId?: string;
    /**
     * The reciprocal relationship for {@link CalculationMatrixRow.CalculationMatrixVersionId}.
     */
    CalculationMatrixRows?: CalculationMatrixRow[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DecisionMatrixDefinitionVer?: DecisionMatrixDefinitionVersion;
    DecisionMatrixDefinitionVerId?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    DscnModelNoteExportStatus?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EndDateTime?: string;
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: CalculationMatrixVersionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GroupKey?: string;
    GroupKeyValue?: string;
    Histories?: CalculationMatrixVersionHistory[];
    IsDeleted?: boolean;
    IsEnabled?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LoadProcessStatus?: string;
    MatrixType?: string;
    Name?: string;
    Namespace?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Rank?: number;
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    SobjectLookupValue?: AIInsightValue;
    StartDateTime?: string;
    SubGroupKey?: string;
    SubGroupKeyValue?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    VersionNumber?: number;
    What?: EventChangeEvent;
}