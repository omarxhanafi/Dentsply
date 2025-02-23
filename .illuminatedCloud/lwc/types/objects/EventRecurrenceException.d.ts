// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventRecurrenceException extends SObject 
{
    ActivityDateOriginal?: string;
    ActivityDateTimeOriginal?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Event?: Event;
    EventId?: string;
    IsAllDayEventOriginal?: boolean;
    IsDeletion?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RecurrenceEvent?: Event;
    RecurrenceEventId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}