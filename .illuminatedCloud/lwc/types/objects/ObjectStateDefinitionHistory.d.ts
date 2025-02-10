// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ObjectStateDefinitionHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    ObjectStateDefinition: ObjectStateDefinition;
    ObjectStateDefinitionId: string;
    OldValue: any;
}