// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AsyncOperationTracker extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AsyncOperationNumber: string;
    AsyncOperationTrackers: AsyncOperationTracker[];
    ContextRecord: FlowExecutionErrorEvent;
    CorrelationIdentifier: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ExpiresAt: string;
    FailedJobItems: number;
    FinishedAt: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    JobType: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Owner: SObject;
    OwnerId: string;
    ParentOperation: AsyncOperationTracker;
    ParentOperationId: string;
    PrimaryRevenueTransactionErrorLogs: RevenueTransactionErrorLog[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    ReferenceEntity: SObject;
    ReferenceEntityId: string;
    RelatedRecord: FlowRecordRelation;
    Response: string;
    RevenueTransactionErrorLogs: RevenueTransactionErrorLog[];
    SequenceNumber: number;
    Shares: AsyncOperationTrackerShare[];
    SobjectLookupValue: AIInsightValue;
    StartedAt: string;
    Status: string;
    StepName: string;
    SubmittedAt: string;
    SuccessfulJobItems: number;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalJobItems: number;
}