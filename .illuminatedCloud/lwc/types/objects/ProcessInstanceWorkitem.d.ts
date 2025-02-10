// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceWorkitem extends SObject 
{
    Actor: SObject;
    ActorId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ElapsedTimeInDays: number;
    ElapsedTimeInHours: number;
    ElapsedTimeInMinutes: number;
    IsDeleted: boolean;
    OriginalActor: SObject;
    OriginalActorId: string;
    ProcessInstance: ProcessInstance;
    ProcessInstanceId: string;
    SystemModstamp: string;
}