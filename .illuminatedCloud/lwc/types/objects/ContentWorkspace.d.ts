// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentWorkspace extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContentFolderLinks?: ContentFolderLink[];
    ContentWorkspace?: ContentWorkspaceDoc;
    ContentWorkspaceMembers?: ContentWorkspaceMember[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefaultRecordType?: RecordType;
    DefaultRecordTypeId?: string;
    Description?: string;
    DeveloperName?: string;
    EntityIdentifier?: ContentNotification;
    FirstPublishLocation?: ContentVersion;
    IsRestrictContentTypes?: boolean;
    IsRestrictLinkedContentTypes?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastWorkspaceActivityDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NamespacePrefix?: string;
    Parent?: ContentDocument;
    RootContentFolder?: ContentFolder;
    RootContentFolderId?: string;
    ShouldAddCreatorMembership?: boolean;
    SystemModstamp?: string;
    TagModel?: string;
    WorkspaceImage?: ContentAsset;
    WorkspaceImageId?: string;
    WorkspaceType?: string;
}