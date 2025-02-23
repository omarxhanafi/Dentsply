// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedLike extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FeedEntity?: SObject;
    FeedEntityId?: string;
    FeedItem?: SObject;
    FeedItemId?: string;
    InsertedBy?: User;
    InsertedById?: string;
    IsDeleted?: boolean;
    RelatedRecord?: FlowRecordRelation;
}