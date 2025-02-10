// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface KnowledgeArticleVoteStat extends SObject 
{
    Channel: string;
    IsDeleted: boolean;
    NormalizedScore: number;
    Parent: KnowledgeArticle;
    ParentId: string;
}