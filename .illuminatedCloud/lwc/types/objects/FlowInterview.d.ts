// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowInterview extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrentElement?: string;
    CurrentFlowVersion?: string;
    EngineType?: string;
    Error?: string;
    FlowVersionView?: FlowVersionView;
    FlowVersionViewId?: string;
    Guid?: string;
    Interview?: FlowOrchestrationInstance;
    InterviewLabel?: string;
    InterviewStatus?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterFlowVersion?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    /**
     * The reciprocal relationship for {@link WorkStep.PausedFlowInterviewId}.
     */
    PausedFlowInterview?: WorkStep;
    PauseLabel?: string;
    /**
     * The reciprocal relationship for {@link RecordAction.FlowInterviewId}.
     */
    RecordActions?: RecordAction[];
    RecordRelations?: FlowRecordRelation[];
    SerializedView?: string;
    Shares?: FlowInterviewShare[];
    StageRelations?: FlowStageRelation[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    WasPausedFromScreen?: boolean;
    /**
     * The reciprocal relationship for {@link WorkStep.PausedFlowInterviewId}.
     */
    WorkSteps?: WorkStep[];
}