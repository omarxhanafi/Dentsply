// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkFeedResponseMetric extends SObject 
{
    BestComment?: FeedComment;
    BestCommentDateTime?: string;
    BestCommentId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FeedItem?: FeedItem;
    FeedItemCreatedBy?: SObject;
    FeedItemCreatedById?: string;
    FeedItemDateTime?: string;
    FeedItemId?: string;
    FirstComment?: FeedComment;
    FirstCommentDateTime?: string;
    FirstCommentId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MarkedAsBestCommentDateTime?: string;
    Name?: string;
    Network?: Network;
    NetworkId?: string;
    ParentRecord?: SObject;
    ParentRecordId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}