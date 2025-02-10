// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CalculationProcedureVersion extends SObject 
{
    ActivityHistories: ActivityHistory[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    CalcProcStepRelationships: CalcProcStepRelationship[];
    CalculationProcedure: CalculationProcedure;
    CalculationProcedureId: string;
    /**
     * The reciprocal relationship for {@link CalculationProcedureStep.CalculationProcedureVersionId}.
     */
    CalculationProcedureSteps: CalculationProcedureStep[];
    /**
     * The reciprocal relationship for {@link CalculationProcedureVariable.CalculationProcedureVersionId}.
     */
    CalculationProcedureVariables: CalculationProcedureVariable[];
    CombinedAttachments: CombinedAttachment[];
    Constants: string;
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
    Feeds: CalculationProcedureVersionFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: CalculationProcedureVersionHistory[];
    IsDeleted: boolean;
    IsEnabled: boolean;
    IsLoopingEnabled: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastSimulatedVariablesInput: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LoopEnd: string;
    LoopIncrement: string;
    LoopStart: string;
    Name: string;
    Namespace: string;
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