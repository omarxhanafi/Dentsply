// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveAgentSession extends SObject 
{
    ActivityHistories: ActivityHistory[];
    Agent: User;
    AgentId: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ChatReqAssigned: number;
    ChatReqDeclined: number;
    ChatReqEngaged: number;
    ChatReqTimedOut: number;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EventRelations: EventRelation[];
    Events: Event[];
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    Histories: LiveAgentSessionHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LoginTime: string;
    LogoutTime: string;
    Name: string;
    NumFlagLoweredAgent: number;
    NumFlagLoweredSupervisor: number;
    NumFlagRaised: number;
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    Shares: LiveAgentSessionShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    TimeAtCapacity: number;
    TimeIdle: number;
    TimeInAwayStatus: number;
    TimeInChats: number;
    TimeInOnlineStatus: number;
    What: EventChangeEvent;
}