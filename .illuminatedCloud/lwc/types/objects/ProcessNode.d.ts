// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessNode extends SObject 
{
    Description: string;
    DeveloperName: string;
    Name: string;
    ProcessDefinition: ProcessDefinition;
    ProcessDefinitionId: string;
    ProcessNode: ProcessInstanceHistory;
    StepNode: ProcessInstanceStep;
    SystemModstamp: string;
}