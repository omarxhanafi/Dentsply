// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkflowProfiling__History extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
    Parent: WorkflowProfiling__c;
    ParentId: string;
}