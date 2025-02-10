// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactRequest extends SObject 
{
    ActivityHistories: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
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
    IsCallback: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    PreferredChannel: string;
    PreferredPhone: string;
    PrimaryRecord: PendingServiceRoutingInteractionInfo;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    RequestDescription: string;
    RequestReason: string;
    Shares: ContactRequestShare[];
    SobjectLookupValue: AIInsightValue;
    Status: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    What: SObject;
    WhatId: string;
    Who: SObject;
    WhoId: string;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
}