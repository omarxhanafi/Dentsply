// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceStepChangeEvent extends SObject 
{
    Actor?: SObject;
    ActorId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Comments?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ElapsedTimeInDays?: number;
    OriginalActor?: SObject;
    OriginalActorId?: string;
    ProcessInstance?: ProcessInstance;
    ProcessInstanceId?: string;
    ReplayId?: string;
    StepNode?: ProcessNode;
    StepNodeId?: string;
    StepStatus?: string;
}