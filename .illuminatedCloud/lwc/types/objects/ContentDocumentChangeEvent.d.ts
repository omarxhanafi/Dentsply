// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocumentChangeEvent extends SObject 
{
    ArchivedBy: User;
    ArchivedById: string;
    ArchivedDate: Date;
    ChangeEventHeader: ChangeEventHeader;
    ContentAsset: ContentAsset;
    ContentAssetId: string;
    ContentModifiedDate: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsArchived: boolean;
    IsInternalOnly: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LatestPublishedVersion: ContentVersion;
    LatestPublishedVersionId: string;
    Owner: User;
    OwnerId: string;
    Parent: ContentWorkspace;
    ParentId: string;
    PublishStatus: string;
    ReplayId: string;
    Title: string;
}