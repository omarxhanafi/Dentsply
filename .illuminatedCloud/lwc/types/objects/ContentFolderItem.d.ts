// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentFolderItem extends SObject 
{
    ContentSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FileExtension?: string;
    FileType?: string;
    IsDeleted?: boolean;
    IsFolder?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ParentContentFolder?: ContentFolder;
    ParentContentFolderId?: string;
    SystemModstamp?: string;
    Title?: string;
}