// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceStep extends SObject 
{
    Actor: SObject;
    ActorId: string;
    Comments: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ElapsedTimeInDays: number;
    ElapsedTimeInHours: number;
    ElapsedTimeInMinutes: number;
    OriginalActor: SObject;
    OriginalActorId: string;
    ProcessInstance: ProcessInstance;
    ProcessInstanceId: string;
    StepNode: ProcessNode;
    StepNodeId: string;
    StepStatus: string;
    SystemModstamp: string;
}