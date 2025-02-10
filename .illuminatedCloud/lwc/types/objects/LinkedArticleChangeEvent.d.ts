// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LinkedArticleChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    KnowledgeArticle: Knowledge__ka;
    KnowledgeArticleId: string;
    KnowledgeArticleVersion: Knowledge__kav;
    KnowledgeArticleVersionId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: SObject;
    LinkedEntityId: string;
    Name: string;
    ReplayId: string;
    Type: string;
}