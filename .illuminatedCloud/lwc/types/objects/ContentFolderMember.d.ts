// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentFolderMember extends SObject 
{
    ChildRecord?: ContentDocument;
    ChildRecordId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ParentContentFolder?: ContentFolder;
    ParentContentFolderId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}