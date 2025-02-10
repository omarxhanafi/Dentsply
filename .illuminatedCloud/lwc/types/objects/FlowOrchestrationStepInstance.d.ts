// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationStepInstance extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    Label: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    OrchestrationInstance: FlowOrchestrationInstance;
    OrchestrationInstanceId: string;
    Owner: SObject;
    OwnerId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: FlowOrchestrationStepInstanceShare[];
    SobjectLookupValue: AIInsightValue;
    StageInstance: FlowOrchestrationStageInstance;
    StageInstanceId: string;
    Status: string;
    StepType: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}