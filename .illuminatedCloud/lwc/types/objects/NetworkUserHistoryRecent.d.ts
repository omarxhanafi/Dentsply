// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkUserHistoryRecent extends SObject 
{
    AccessTimestamp?: string;
    ActionType?: string;
    CombinedIdField?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DomainName?: string;
    FeedComment?: FeedComment;
    FeedCommentId?: string;
    FeedItem?: FeedItem;
    FeedItemId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Network?: Network;
    NetworkId?: string;
    NetworkUser?: User;
    NetworkUserId?: string;
    Record?: SObject;
    RecordId?: string;
    RecordKeyPrefix?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Url?: string;
    UserType?: string;
}