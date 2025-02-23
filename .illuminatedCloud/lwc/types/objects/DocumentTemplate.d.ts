// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocumentTemplate extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    CustomClassName?: string;
    DefaultFontStyle?: string;
    /**
     * The reciprocal relationship for {@link DocGenerationQueryResult.DocumentTemplateId}.
     */
    DocGenerationQueryResults?: DocGenerationQueryResult[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateContentDoc.DocumentTemplateId}.
     */
    DocTempContentDocDocTemplates?: DocumentTemplateContentDoc[];
    DocumentConversionResourceName?: string;
    DocumentGenerationMechanism?: string;
    /**
     * The reciprocal relationship for {@link DocumentGenerationProcess.DocumentTemplateId}.
     */
    DocumentTemplates?: DocumentGenerationProcess[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateSection.DocumentTemplateId}.
     */
    DocumentTemplateSections?: DocumentTemplateSection[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateToken.DocumentTemplateId}.
     */
    DocumentTemplateTokenAssociation?: DocumentTemplateToken[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateSection.EmbeddedDocumentTemplateId}.
     */
    EmbeddedDocumentTemplates?: DocumentTemplateSection[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    ExtractOmniDataTransformName?: string;
    Feeds?: DocumentTemplateFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.DocumentTemplateId}.
     */
    GeneratedDocDocTemplates?: GeneratedDocument[];
    GlobalKey?: string;
    HasBatchableSection?: boolean;
    Histories?: DocumentTemplateHistory[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsSectionProcessed?: boolean;
    LastEmbeddedTmplSectionKey?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MapperOmniDataTransformName?: string;
    Name?: string;
    Namespace?: string;
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    SectionHeaderFontStyle?: string;
    SectionHeaderFontStyleValue?: string;
    Shares?: DocumentTemplateShare[];
    ShouldDisplayUnmappedToken?: boolean;
    ShouldExtractEmbeddedTmplToken?: boolean;
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TargetTokenItemObject?: string;
    TargetTokenObject?: string;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TokenList?: string;
    TokenMappingMethodType?: string;
    TokenMappingType?: string;
    Type?: string;
    UniqueName?: string;
    UsageType?: string;
    VersionNumber?: number;
    What?: EventChangeEvent;
    XmlRelationshipMetadata?: string;
}