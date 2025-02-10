// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataUsePurposeHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    DataUsePurpose: DataUsePurpose;
    DataUsePurposeId: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}