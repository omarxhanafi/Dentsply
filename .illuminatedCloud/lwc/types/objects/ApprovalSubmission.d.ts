// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApprovalSubmission extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmissionDetail.ApprovalSubmissionId}.
     */
    ApprovalSubmissionDetails?: ApprovalSubmissionDetail[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.ApprovalSubmissionId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    Comments?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowOrchestrationInstance?: FlowOrchestrationInstance;
    FlowOrchestrationInstanceId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    RelatedRecordObjectName?: string;
    Shares?: ApprovalSubmissionShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SubmittedBy?: User;
    SubmittedById?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}