// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface KnowledgeArticleVersion extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    ArchivedBy?: User;
    ArchivedById?: string;
    ArchivedDate?: string;
    ArticleArchivedBy?: User;
    ArticleArchivedById?: string;
    ArticleArchivedDate?: string;
    ArticleCaseAttachCount?: number;
    ArticleCreatedBy?: User;
    ArticleCreatedById?: string;
    ArticleCreatedDate?: string;
    ArticleNumber?: string;
    ArticleTotalViewCount?: number;
    AssignedBy?: User;
    AssignedById?: string;
    AssignedTo?: SObject;
    AssignedToId?: string;
    AssignmentDate?: string;
    AssignmentDueDate?: string;
    AssignmentNote?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CaseArticles?: CaseArticle[];
    ClickedRecord?: SearchActivity;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EngagementInitiatedTopic?: EngagementTopic[];
    FirstPublishedDate?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    IsLatestVersion?: boolean;
    IsMasterLanguage?: boolean;
    IsVisibleInApp?: boolean;
    IsVisibleInCsp?: boolean;
    IsVisibleInPkb?: boolean;
    IsVisibleInPrm?: boolean;
    KnowledgeArticle?: KnowledgeArticle;
    KnowledgeArticleId?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.KnowledgeArticleVersionId}.
     */
    KnowledgeArticleVersion?: LinkedArticle;
    Language?: string;
    LargeLanguageModel?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastPublishedDate?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.KnowledgeArticleVersionId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MasterVersion?: KnowledgeArticleVersion;
    MasterVersionId?: string;
    MigratedToFromArticleVersion?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    NextReviewDate?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PublishStatus?: string;
    SearchPromotionRules?: SearchPromotionRule[];
    Source?: Case;
    SourceId?: string;
    Summary?: string;
    SystemModstamp?: string;
    TargetObject?: ProcessInstanceChangeEvent;
    Title?: string;
    Topic?: EngagementTopicChangeEvent;
    TopicAssignments?: TopicAssignment[];
    UrlName?: string;
    ValidationStatus?: string;
    VersionNumber?: number;
}