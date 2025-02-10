// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FolderedContentDocument extends SObject 
{
    ContentDocument: ContentDocument;
    ContentDocumentId: string;
    ContentSize: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FileExtension: string;
    FileType: string;
    IsDeleted: boolean;
    IsFolder: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ParentContentFolder: ContentFolder;
    ParentContentFolderId: string;
    SystemModstamp: string;
    Title: string;
}