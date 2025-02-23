// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceNode extends SObject 
{
    CompletedDate?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ElapsedTimeInDays?: number;
    ElapsedTimeInHours?: number;
    ElapsedTimeInMinutes?: number;
    IsDeleted?: boolean;
    LastActor?: User;
    LastActorId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NodeStatus?: string;
    ProcessInstance?: ProcessInstance;
    ProcessInstanceId?: string;
    ProcessNode?: ProcessNode;
    ProcessNodeId?: string;
    ProcessNodeName?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}