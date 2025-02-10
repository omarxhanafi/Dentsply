// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailStatus extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EmailTemplateName: string;
    FirstOpenDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastOpenDate: string;
    RelatedRecord: FlowRecordRelation;
    Task: Task;
    TaskId: string;
    TimesOpened: number;
    Who: SObject;
    WhoId: string;
}