// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Macro extends SObject 
{
    Action: AIInsightAction;
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
    Description: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    Histories: MacroHistory[];
    IsAlohaSupported: boolean;
    IsDeleted: boolean;
    IsLightningSupported: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Macro: MacroInstruction;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: MacroShare[];
    SobjectLookupValue: AIInsightValue;
    StartingContext: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}