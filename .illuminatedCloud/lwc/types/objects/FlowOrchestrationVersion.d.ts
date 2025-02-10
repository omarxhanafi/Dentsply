// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationVersion extends SObject 
{
    ActivatedBy: User;
    ActivatedById: string;
    ActivatedDate: string;
    ActiveVersion: FlowOrchestration;
    ApiVersion: number;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    FlowOrchestration: FlowOrchestration;
    FlowOrchestrationId: string;
    IsDeleted: boolean;
    IsOverridable: boolean;
    IsTemplate: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    OrchestrationType: string;
    OverriddenBy: FlowOrchestration;
    OverriddenById: string;
    OverriddenOrchestration: FlowOrchestration;
    OverriddenOrchestrationId: string;
    RelatedRecord: FlowRecordRelation;
    RunInMode: string;
    SourceTemplate: FlowOrchestration;
    SourceTemplateId: string;
    Status: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TriggerObjectOrEventLabel: string;
    VersionNumber: number;
}