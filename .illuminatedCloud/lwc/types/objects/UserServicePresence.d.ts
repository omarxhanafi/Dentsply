// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserServicePresence extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AtCapacityDuration?: number;
    AverageCapacity?: number;
    ConfiguredCapacity?: number;
    ConfiguredInterruptCapacity?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IdleDuration?: number;
    IsAway?: boolean;
    IsCurrentState?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    ServicePresenceStatus?: ServicePresenceStatus;
    ServicePresenceStatusId?: string;
    Shares?: UserServicePresenceShare[];
    SobjectLookupValue?: AIInsightValue;
    StatusDuration?: number;
    StatusEndDate?: string;
    StatusStartDate?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
}