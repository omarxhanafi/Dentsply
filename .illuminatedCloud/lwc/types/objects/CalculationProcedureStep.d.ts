// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CalculationProcedureStep extends SObject 
{
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    /**
     * The reciprocal relationship for {@link CalcProcStepRelationship.CalcProcStepId}.
     */
    CalcProcStepRelationships: CalcProcStepRelationship[];
    CalculationMatrix: CalculationMatrix;
    CalculationMatrixId: string;
    CalculationMatrixType: string;
    CalculationProcedure: string;
    CalculationProcedureVersion: CalculationProcedureVersion;
    CalculationProcedureVersionId: string;
    CombinedAttachments: CombinedAttachment[];
    ConditionsConvertedText: string;
    ConditionsExpressionText: string;
    ConditionsUiFormattedText: string;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DecisionTable: DecisionTable;
    DecisionTableId: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: CalculationProcedureStepFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FormulaConvertedText: string;
    FormulaExpressionText: string;
    FormulaUiFormattedText: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: CalculationProcedureStepHistory[];
    InputVariablesFormatText: string;
    IsConditionalStep: boolean;
    IsDeleted: boolean;
    IsResultIncluded: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Namespace: string;
    OutputVariablesFormatText: string;
    OutputVariablesMappingText: string;
    Parent: FeedComment;
    /**
     * The reciprocal relationship for {@link CalcProcStepRelationship.ParentCalcProcStepId}.
     */
    ParentCalcProcStepRelationships: CalcProcStepRelationship[];
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ReferenceProcedure: CalculationProcedure;
    ReferenceProcedureId: string;
    RelatedRecord: FlowRecordRelation;
    ReturnMessageValueSet: string;
    SobjectLookupValue: AIInsightValue;
    Stage: string;
    StageStepSequence: number;
    StepType: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}