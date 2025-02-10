// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedItem extends SObject 
{
    AuditableEntities: NetworkActivityAudit[];
    BestComment: FeedComment;
    BestCommentId: string;
    Body: string;
    CommentCount: number;
    Connection: PartnerNetworkConnection;
    ConnectionId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    Entity: NetworkModeration;
    FeedAttachments: FeedAttachment[];
    FeedComments: FeedComment[];
    FeedEntity: FeedLike;
    FeedItem: Announcement;
    FeedLikes: FeedLike[];
    FeedRevisions: FeedRevision[];
    FeedSignals: FeedSignal[];
    FeedTrackedChanges: FeedTrackedChange[];
    HasContent: boolean;
    HasFeedEntity: boolean;
    HasLink: boolean;
    HasVerifiedComment: boolean;
    InsertedBy: SObject;
    InsertedById: string;
    IsClosed: boolean;
    IsDeleted: boolean;
    IsRichText: boolean;
    LastEditBy: SObject;
    LastEditById: string;
    LastEditDate: string;
    LastModifiedDate: string;
    LikeCount: number;
    LinkUrl: string;
    LocalRecord: PartnerNetworkRecordConnection;
    NetworkScope: string;
    NetworkUserHistoryRecentToFeedItem: NetworkUserHistoryRecent[];
    Parent: SObject;
    ParentId: string;
    PartnerRecord: PartnerNetworkRecordConnection;
    Record: FeedAttachment;
    RelatedRecord: ContentVersion;
    RelatedRecordId: string;
    Revision: number;
    Status: string;
    SystemModstamp: string;
    Title: string;
    TopicAssignments: TopicAssignment[];
    Type: string;
    Visibility: string;
}