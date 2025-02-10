// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpressionSetVersion extends SObject 
{
    ActivityHistories: ActivityHistory[];
    ApiName: string;
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
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EndDateTime: string;
    EventRelations: EventRelation[];
    Events: Event[];
    ExpressionSet: ExpressionSet;
    ExpressionSetDefinitionVer: ExpressionSetDefinitionVersion;
    ExpressionSetDefinitionVerId: string;
    ExpressionSetId: string;
    Feeds: ExpressionSetVersionFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ExpressionSetVersionHistory[];
    IsActive: boolean;
    IsDeleted: boolean;
    IsLoopingEnabled: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LatestSimulationResult: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LoopEndVariableName: string;
    LoopIncrementVariableName: string;
    LoopStartVariableName: string;
    Name: string;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    Rank: number;
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    ShouldShowExplExternally: boolean;
    SobjectLookupValue: AIInsightValue;
    StartDateTime: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    VersionNumber: number;
    What: EventChangeEvent;
}