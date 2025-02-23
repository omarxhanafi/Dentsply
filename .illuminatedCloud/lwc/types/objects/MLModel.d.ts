// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MLModel extends SObject 
{
    ApprovalStatus?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Dataset?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MLModelFactors?: MLModelFactor[];
    MLModelMetrics?: MLModelMetric[];
    Model?: AIRecordInsight;
    ModelType?: string;
    Name?: string;
    PredictionDefinition?: MLPredictionDefinition;
    PredictionDefinitionId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RecommendationDefinition?: MLRecommendationDefinition;
    RecommendationDefinitionId?: string;
    RelatedRecord?: FlowRecordRelation;
    ScoringStatus?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TrainingEndTime?: string;
    TrainingStartTime?: string;
}