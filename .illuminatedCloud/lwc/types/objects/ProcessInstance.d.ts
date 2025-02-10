// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstance extends SObject 
{
    CompletedDate: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ElapsedTimeInDays: number;
    ElapsedTimeInHours: number;
    ElapsedTimeInMinutes: number;
    IsDeleted: boolean;
    LastActor: User;
    LastActorId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Nodes: ProcessInstanceNode[];
    ProcessDefinition: ProcessDefinition;
    ProcessDefinitionId: string;
    ProcessInstance: ProcessInstanceStepChangeEvent;
    RelatedRecord: FlowRecordRelation;
    Status: string;
    Steps: ProcessInstanceStep[];
    StepsAndWorkitems: ProcessInstanceHistory[];
    SubmittedBy: User;
    SubmittedById: string;
    SystemModstamp: string;
    TargetObject: SObject;
    TargetObjectId: string;
    Workitems: ProcessInstanceWorkitem[];
}