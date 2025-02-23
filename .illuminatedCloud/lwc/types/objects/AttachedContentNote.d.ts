// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AttachedContentNote extends SObject 
{
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FileExtension?: string;
    FileType?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: SObject;
    LinkedEntityId?: string;
    TextPreview?: string;
    Title?: string;
}