// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PendingServiceRouting extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    CapacityPercentage?: number;
    CapacityWeight?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    CustomRequestedDateTime?: string;
    DropAdditionalSkillsTimeout?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Group?: Group;
    GroupId?: string;
    IsDeleted?: boolean;
    IsInterruptible?: boolean;
    IsPreferredUserRequired?: boolean;
    IsPushAttempted?: boolean;
    IsPushed?: boolean;
    IsReadyForRouting?: boolean;
    IsTransfer?: boolean;
    LastDeclinedAgentSession?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    PausedCapacityPercentage?: number;
    PausedCapacityWeight?: number;
    /**
     * The reciprocal relationship for {@link AgentWork.PendingServiceRoutingId}.
     */
    PendingServiceRouting?: AgentWork;
    PreferredUser?: User;
    PreferredUserId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PushTimeout?: number;
    Queue?: Group;
    QueueId?: string;
    RelatedRecord?: FlowRecordRelation;
    RoutingModel?: string;
    RoutingPriority?: number;
    RoutingType?: string;
    Serial?: number;
    ServiceChannel?: ServiceChannel;
    ServiceChannelId?: string;
    Shares?: PendingServiceRoutingShare[];
    /**
     * The reciprocal relationship for {@link SkillRequirement.RelatedRecordId}.
     */
    SkillRequirements?: SkillRequirement[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TransferRequester?: User;
    TransferRequesterId?: string;
    WorkItem?: SObject;
    WorkItemId?: string;
}