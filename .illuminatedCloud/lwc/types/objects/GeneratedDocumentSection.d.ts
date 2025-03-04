// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GeneratedDocumentSection extends SObject 
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
    DisplayHeaderFontStyle?: string;
    DocumentTemplateSection?: DocumentTemplateSection;
    DocumentTemplateSectionId?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: GeneratedDocumentSectionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    GeneratedDocument?: GeneratedDocument;
    GeneratedDocumentId?: string;
    Histories?: GeneratedDocumentSectionHistory[];
    IsBeginSplitSection?: boolean;
    IsDeleted?: boolean;
    IsEndSplitSection?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    OpenActivities?: OpenActivity[];
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
    SectionContent?: string;
    SectionOrder?: number;
    SectionTypeSignatureContent?: string;
    SobjectLookupValue?: AIInsightValue;
    SplitSectionSequenceNumber?: number;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TemplateSectionContent?: string;
    TokenList?: string;
    What?: EventChangeEvent;
    XmlContent?: string;
}