// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Announcement extends SObject 
{
    Announcement: CollaborationGroup;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ExpirationDate: string;
    FeedItem: FeedItem;
    FeedItemId: string;
    IsArchived: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: CollaborationGroup;
    ParentId: string;
    RelatedRecord: FlowRecordRelation;
    SendEmails: boolean;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}