// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AgentWorkSkill extends SObject 
{
    AgentWork?: AgentWork;
    AgentWorkId?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
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
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsAdditionalSkill?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Skill?: Skill;
    SkillId?: string;
    SkillLevel?: number;
    SkillPriority?: number;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    WasDropped?: boolean;
}