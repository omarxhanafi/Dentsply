// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventPayload?: string;
    EventUuid?: string;
    OrchestrationInstanceId?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    StepInstanceId?: string;
    StepStatus?: string;
}