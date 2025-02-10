// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessInstanceChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CompletedDate: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastActor: User;
    LastActorId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ProcessDefinition: ProcessDefinition;
    ProcessDefinitionId: string;
    ReplayId: string;
    Status: string;
    SubmittedBy: User;
    SubmittedById: string;
    TargetObject: SObject;
    TargetObjectId: string;
}