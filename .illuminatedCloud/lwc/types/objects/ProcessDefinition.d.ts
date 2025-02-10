// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessDefinition extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LockType: string;
    Name: string;
    ProcessDefinition: ProcessInstance;
    State: string;
    SystemModstamp: string;
    TableEnumOrId: string;
    Type: string;
}