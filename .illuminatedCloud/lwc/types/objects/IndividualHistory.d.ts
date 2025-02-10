// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IndividualHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    Individual: Individual;
    IndividualId: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}