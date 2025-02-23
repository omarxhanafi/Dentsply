// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedPollVote extends SObject 
{
    Choice?: FeedPollChoice;
    ChoiceId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FeedItem?: SObject;
    FeedItemId?: string;
    IsDeleted?: boolean;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
}