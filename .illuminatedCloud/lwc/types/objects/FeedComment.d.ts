// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedComment extends SObject 
{
    AuditableEntities: NetworkActivityAudit[];
    BestComment: AccountFeed;
    CommentBody: string;
    CommentType: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    Entity: NetworkModeration;
    FeedAttachments: FeedAttachment[];
    FeedEntity: FeedLike;
    FeedItem: SObject;
    FeedItemId: string;
    FeedRevisions: FeedRevision[];
    FeedThreadedComments: FeedComment[];
    FirstComment: NetworkFeedResponseMetric;
    HasEntityLinks: boolean;
    InsertedBy: User;
    InsertedById: string;
    IsDeleted: boolean;
    IsRichText: boolean;
    IsVerified: boolean;
    LastEditBy: SObject;
    LastEditById: string;
    LastEditDate: string;
    LocalRecord: PartnerNetworkRecordConnection;
    NetworkUserHistoryRecentToFeedComment: NetworkUserHistoryRecent[];
    Parent: SObject;
    ParentId: string;
    PartnerRecord: PartnerNetworkRecordConnection;
    RelatedRecord: ContentVersion;
    RelatedRecordId: string;
    Revision: number;
    Status: string;
    SystemModstamp: string;
    ThreadChildrenCount: number;
    ThreadLastUpdatedDate: string;
    ThreadLevel: number;
    ThreadParent: FeedComment;
    ThreadParentId: string;
}