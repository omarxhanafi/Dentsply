// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Knowledge__ka extends SObject 
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
    ArticleNumber?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CaseArticles?: CaseArticle[];
    CaseAssociationCount?: number;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishedDate?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    IsGeneratedByLlm?: boolean;
    KnowledgeArticle?: Knowledge__kav;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastPublishedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.KnowledgeArticleId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MigratedToFromArticle?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Record?: FeedAttachment;
    SystemModstamp?: string;
    TargetObject?: ProcessInstanceChangeEvent;
    TotalViewCount?: number;
    ViewStats?: Knowledge__ViewStat[];
    Votes?: Vote[];
    VoteStats?: Knowledge__VoteStat[];
}