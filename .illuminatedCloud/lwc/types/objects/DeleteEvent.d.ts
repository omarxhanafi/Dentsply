// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DeleteEvent extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    DeletedBy: User;
    DeletedById: string;
    DeletedDate: string;
    Record: string;
    RecordName: string;
    RelatedRecord: FlowRecordRelation;
    SobjectName: string;
    SystemModstamp: string;
}