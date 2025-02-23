// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OwnedContentDocument extends SObject 
{
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentSize?: number;
    ContentUrl?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExternalDataSourceName?: string;
    ExternalDataSourceType?: string;
    FileExtension?: string;
    FileType?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    Title?: string;
}