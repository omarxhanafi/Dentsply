// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LinkedArticleHistory extends SObject 
{
    CreatedBy?: SObject;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    Field?: string;
    IsDeleted?: boolean;
    LinkedArticle?: LinkedArticle;
    LinkedArticleId?: string;
    NewValue?: any;
    OldValue?: any;
}