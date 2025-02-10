// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentHubItem extends SObject 
{
    ContentHubRepository: ContentHubRepository;
    ContentHubRepositoryId: string;
    ContentModifiedDate: string;
    ContentSize: number;
    CreatedDate: string;
    Description: string;
    ExternalContentUrl: string;
    ExternalDocumentUrl: string;
    ExternalId: string;
    FileExtension: string;
    FileType: string;
    IsFolder: boolean;
    LastModifiedDate: string;
    MimeType: string;
    Name: string;
    Owner: string;
    ParentId: string;
    Title: string;
    UpdatedBy: string;
}