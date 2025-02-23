// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentNote extends SObject 
{
    Content?: string;
    ContentModifiedDate?: string;
    ContentSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FileExtension?: string;
    FileType?: string;
    IsDeleted?: boolean;
    IsReadOnly?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    LatestContent?: ContentBody;
    LatestContentId?: string;
    LatestPublishedVersion?: ContentVersion;
    LatestPublishedVersionId?: string;
    Owner?: User;
    OwnerId?: string;
    SharingPrivacy?: string;
    TextPreview?: string;
    Title?: string;
}