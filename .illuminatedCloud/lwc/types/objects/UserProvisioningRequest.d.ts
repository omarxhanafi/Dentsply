// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserProvisioningRequest extends SObject 
{
    AppName?: string;
    ApprovalStatus?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    ConnectedApp?: ConnectedApplication;
    ConnectedAppId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExternalUserId?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Manager?: User;
    ManagerId?: string;
    Name?: string;
    Operation?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: UserProvisioningRequest;
    ParentId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    RetryCount?: number;
    SalesforceUser?: User;
    SalesforceUserId?: string;
    ScheduleDate?: string;
    /**
     * The reciprocal relationship for {@link UserProvisioningRequest.ParentId}.
     */
    Shares?: UserProvisioningRequest[];
    SobjectLookupValue?: AIInsightValue;
    State?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    UserProvAccount?: UserProvAccount;
    UserProvAccountId?: string;
    UserProvConfig?: UserProvisioningConfig;
    UserProvConfigId?: string;
    UserProvisioningRequest?: UserProvisioningLog;
}