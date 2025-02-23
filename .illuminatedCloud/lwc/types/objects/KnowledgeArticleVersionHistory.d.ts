// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface KnowledgeArticleVersionHistory extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    EventType?: string;
    FieldName?: string;
    IsDeleted?: boolean;
    Language?: string;
    NewValue?: any;
    OldValue?: any;
    Parent?: KnowledgeArticle;
    ParentId?: string;
    ParentSobjectType?: string;
    Version?: Knowledge__kav;
    VersionId?: string;
    VersionNumber?: number;
}