// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchJobPartFailedRecordHistory extends SObject 
{
    BatchJobPartFailedRecord: BatchJobPartFailedRecord;
    BatchJobPartFailedRecordId: string;
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}