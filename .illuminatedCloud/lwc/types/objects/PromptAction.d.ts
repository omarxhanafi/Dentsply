// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PromptAction extends SObject 
{
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
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastDisplayDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastResult: string;
    LastResultDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    PromptAction: PromptError;
    PromptVersion: PromptVersion;
    PromptVersionId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: PromptActionShare[];
    SnoozeUntil: string;
    StepCount: number;
    StepNumber: number;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TimesActionTaken: number;
    TimesDismissed: number;
    TimesDisplayed: number;
    TimesSnoozed: number;
    User: User;
    UserId: string;
}