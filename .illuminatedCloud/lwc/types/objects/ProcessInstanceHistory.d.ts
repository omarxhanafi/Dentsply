// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceHistory extends SObject 
{
    Actor?: SObject;
    ActorId?: string;
    Comments?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ElapsedTimeInDays?: number;
    ElapsedTimeInHours?: number;
    ElapsedTimeInMinutes?: number;
    IsDeleted?: boolean;
    IsPending?: boolean;
    OriginalActor?: SObject;
    OriginalActorId?: string;
    ProcessInstance?: ProcessInstance;
    ProcessInstanceId?: string;
    ProcessNode?: ProcessNode;
    ProcessNodeId?: string;
    RemindersSent?: number;
    StepStatus?: string;
    SystemModstamp?: string;
    TargetObject?: SObject;
    TargetObjectId?: string;
}