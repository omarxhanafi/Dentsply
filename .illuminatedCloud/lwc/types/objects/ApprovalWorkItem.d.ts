// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApprovalWorkItem extends SObject 
{
    ApprovalChainName?: string;
    ApprovalConditionName?: string;
    ApprovalSubmission?: ApprovalSubmission;
    /**
     * The reciprocal relationship for {@link ApprovalSubmissionDetail.ApprovalWorkItemId}.
     */
    ApprovalSubmissionDetails?: ApprovalSubmissionDetail[];
    ApprovalSubmissionId?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AssignedTo?: SObject;
    AssignedToId?: string;
    Comments?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowOrchestrationWorkItem?: FlowOrchestrationWorkItem;
    FlowOrchestrationWorkItemId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    RelatedRecordObjectName?: string;
    ReviewedBy?: User;
    ReviewedById?: string;
    ReviewedDate?: string;
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}