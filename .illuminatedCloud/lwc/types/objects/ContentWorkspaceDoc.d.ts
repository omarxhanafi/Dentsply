// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentWorkspaceDoc extends SObject 
{
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentWorkspace?: ContentWorkspace;
    ContentWorkspaceId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    IsDeleted?: boolean;
    IsOwner?: boolean;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}