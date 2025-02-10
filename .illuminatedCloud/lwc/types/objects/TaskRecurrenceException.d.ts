// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskRecurrenceException extends SObject 
{
    ActivityDateOriginal: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeletion: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    RecurrenceTask: Task;
    RecurrenceTaskId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    Task: Task;
    TaskId: string;
}