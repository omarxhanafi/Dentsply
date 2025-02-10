// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AgentWork extends SObject 
{
    AcceptDateTime: string;
    ActiveTime: number;
    AcwExtensionCount: number;
    AcwExtensionDuration: number;
    AfterConversationActualTime: number;
    AgentCapacityWhenDeclined: number;
    AgentIntCapacityWhenDeclined: number;
    AgentWork: AgentWorkSkill;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AssignedDateTime: string;
    CancelDateTime: string;
    CapacityPercentage: number;
    CapacityWeight: number;
    CloseDateTime: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DeclineDateTime: string;
    DeclineReason: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    HandleTime: number;
    IsDeleted: boolean;
    IsInterruptible: boolean;
    IsPreferredUserRequired: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    OriginalGroup: Group;
    OriginalGroupId: string;
    OriginalQueue: Group;
    OriginalQueueId: string;
    Owner: SObject;
    OwnerId: string;
    PausedCapacityPercentage: number;
    PausedCapacityWeight: number;
    PendingServiceRouting: PendingServiceRouting;
    PendingServiceRoutingId: string;
    PreferredUser: User;
    PreferredUserId: string;
    PushTimeout: number;
    PushTimeoutDateTime: string;
    RelatedRecord: FlowRecordRelation;
    RequestDateTime: string;
    RoutingModel: string;
    RoutingPriority: number;
    RoutingType: string;
    ServiceChannel: ServiceChannel;
    ServiceChannelId: string;
    Shares: AgentWorkShare[];
    ShouldSkipCapacityCheck: boolean;
    SobjectLookupValue: AIInsightValue;
    SpeedToAnswer: number;
    Status: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    User: User;
    UserId: string;
    WorkItem: SObject;
    WorkItemId: string;
}