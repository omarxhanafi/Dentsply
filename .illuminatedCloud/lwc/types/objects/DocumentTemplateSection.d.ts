// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocumentTemplateSection extends SObject 
{
    AccessType: string;
    ActivityHistories: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DisplayConditionExpression: string;
    DocumentTemplate: DocumentTemplate;
    DocumentTemplateId: string;
    /**
     * The reciprocal relationship for {@link DocTemplateSectionCondition.DocumentTemplateSectionId}.
     */
    DocumentTemplateSections: DocTemplateSectionCondition[];
    /**
     * The reciprocal relationship for {@link DocumentTemplateToken.DocumentTemplateSectionId}.
     */
    DocumentTemplateTokens: DocumentTemplateToken[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EmbeddedDocumentTemplate: DocumentTemplate;
    EmbeddedDocumentTemplateId: string;
    EmbeddedKey: string;
    EventRelations: EventRelation[];
    Events: Event[];
    Feeds: DocumentTemplateSectionFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocumentSection.DocumentTemplateSectionId}.
     */
    GenDocSecDocuTempSections: GeneratedDocumentSection[];
    HasSectionNumberReset: boolean;
    Histories: DocumentTemplateSectionHistory[];
    IsBatchable: boolean;
    IsDeleted: boolean;
    IsDisplayOnNewPage: boolean;
    IsNewLineAfterSectionEnabled: boolean;
    IsSectionNumberDisplayEnabled: boolean;
    IsTableHeaderRepeatable: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    OpenActivities: OpenActivity[];
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    ReferenceClassName: string;
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    SectionContent: string;
    SectionSequenceNumber: number;
    SectionType: string;
    SectionTypeItemFontStyle: string;
    SectionTypeItemFontValue: string;
    SectionTypeSignatureContent: string;
    ShouldDisplayHeaderContentInline: boolean;
    ShouldDisplayHeaderName: boolean;
    ShouldGenerateEmbeddedKey: boolean;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    TokenList: string;
    TotalSectionConditionCount: number;
    What: EventChangeEvent;
}