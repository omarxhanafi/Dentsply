// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpressionFilter extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    Context: MacroInstruction;
    ContextId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    ExpressionFilter: ExpressionFilterCriteria;
    FilterConditionLogic: string;
    FilterDescription: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}