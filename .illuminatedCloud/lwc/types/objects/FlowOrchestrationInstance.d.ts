// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationInstance extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.FlowOrchestrationInstanceId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    CurrentStage?: string;
    Duration?: number;
    /**
     * The reciprocal relationship for {@link FlowOrchestrationLog.OrchestrationInstanceId}.
     */
    FlowOrchestrationLogs?: FlowOrchestrationLog[];
    /**
     * The reciprocal relationship for {@link FlowOrchestrationStageInstance.OrchestrationInstanceId}.
     */
    FlowOrchestrationStageInstances?: FlowOrchestrationStageInstance[];
    /**
     * The reciprocal relationship for {@link FlowOrchestrationStepInstance.OrchestrationInstanceId}.
     */
    FlowOrchestrationStepInstances?: FlowOrchestrationStepInstance[];
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Interview?: FlowInterview;
    InterviewId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OrchestrationDeveloperName?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: FlowOrchestrationInstanceShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TriggeringRecord?: string;
}