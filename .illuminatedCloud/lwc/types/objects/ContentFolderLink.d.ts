// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentFolderLink extends SObject 
{
    ContentFolder: ContentFolder;
    ContentFolderId: string;
    ContextRecord: FlowExecutionErrorEvent;
    EnableFolderStatus: string;
    IsDeleted: boolean;
    ParentEntity: ContentWorkspace;
    ParentEntityId: string;
    RelatedRecord: FlowRecordRelation;
}