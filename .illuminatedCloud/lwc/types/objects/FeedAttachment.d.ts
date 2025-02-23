// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedAttachment extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    FeedEntity?: SObject;
    FeedEntityId?: string;
    IsDeleted?: boolean;
    Record?: SObject;
    RecordId?: string;
    RelatedRecord?: FlowRecordRelation;
    Title?: string;
    Type?: string;
    Value?: string;
}