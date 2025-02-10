// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TMFC_TeamForce_User_Story__Feed extends SObject 
{
    BestComment: FeedComment;
    BestCommentId: string;
    Body: string;
    CommentCount: number;
    Connection: PartnerNetworkConnection;
    ConnectionId: string;
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    FeedAttachments: FeedAttachment[];
    FeedComments: FeedComment[];
    FeedEntity: FeedLike;
    FeedItem: FeedPollChoice;
    FeedLikes: FeedLike[];
    FeedSignals: FeedSignal[];
    FeedTrackedChanges: FeedTrackedChange[];
    InsertedBy: SObject;
    InsertedById: string;
    IsDeleted: boolean;
    IsRichText: boolean;
    LastModifiedDate: string;
    LikeCount: number;
    LinkUrl: string;
    NetworkScope: string;
    Parent: TMFC_TeamForce_User_Story__c;
    ParentId: string;
    RelatedRecord: ContentVersion;
    RelatedRecordId: string;
    SystemModstamp: string;
    Title: string;
    Type: string;
    Visibility: string;
}