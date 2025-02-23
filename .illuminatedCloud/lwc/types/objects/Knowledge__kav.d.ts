// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Knowledge</b></h3>
 */
declare interface Knowledge__kav extends SObject 
{
    /**
     * <h3><b>Answer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Answer__c?: string;
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
    DataCategorySelections?: Knowledge__DataCategorySelection[];
    /**
     * <h3><b>Displayed Text</b></h3>
     * <p>Shows first 254 characters of the answer, it will be updated automatically through process builder. The text will be displayed in the Knowledge component</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Displayed_Text__c?: string;
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
    KnowledgeArticle?: Knowledge__ka;
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
    MasterVersion?: Knowledge__kav;
    MasterVersionId?: string;
    MigratedToFromArticleVersion?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    NextReviewDate?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PublishStatus?: string;
    /**
     * <h3><b>Question</b></h3>
     * <p>Question for FAQ</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Question__c?: string;
    RecordType?: RecordType;
    RecordTypeId?: string;
    /**
     * <h3><b>Related SBU</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Related_SBU__c?: string;
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