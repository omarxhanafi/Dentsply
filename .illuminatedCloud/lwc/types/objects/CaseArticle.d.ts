// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseArticle extends SObject 
{
    ArticleLanguage: string;
    ArticleVersionNumber: number;
    Case: Case;
    CaseId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    IsSharedByEmail: boolean;
    KnowledgeArticle: Knowledge__ka;
    KnowledgeArticleId: string;
    KnowledgeArticleVersion: Knowledge__kav;
    KnowledgeArticleVersionId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
}