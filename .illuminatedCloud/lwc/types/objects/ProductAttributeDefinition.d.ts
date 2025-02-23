// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductAttributeDefinition extends SObject 
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
    Attachments?: Attachment[];
    AttributeCategory?: AttributeCategory;
    AttributeCategoryId?: string;
    AttributeDefinition?: AttributeDefinition;
    AttributeDefinitionId?: string;
    AttributeNameOverride?: string;
    /**
     * The reciprocal relationship for {@link AttrPicklistExcludedValue.AttributeId}.
     */
    AttrPicklistExcludedValues?: AttrPicklistExcludedValue[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DefaultValue?: string;
    Description?: string;
    DisplayType?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: ProductAttributeDefinitionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    HelpText?: string;
    Histories?: ProductAttributeDefinitionHistory[];
    IsDeleted?: boolean;
    IsHidden?: boolean;
    IsPriceImpacting?: boolean;
    IsReadOnly?: boolean;
    IsRequired?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MaximumCharacterCount?: number;
    MaximumValue?: string;
    MinimumCharacterCount?: number;
    MinimumValue?: string;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    OverriddenProductAttributeDefinition?: ProductAttributeDefinition;
    OverriddenProductAttributeDefinitionId?: string;
    /**
     * The reciprocal relationship for {@link ProductAttributeDefinition.OverriddenProductAttributeDefinitionId}.
     */
    OverriddenProductAttributeDefinitions?: ProductAttributeDefinition[];
    OverrideContext?: Product2;
    OverrideContextId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Product2?: Product2;
    Product2Id?: string;
    ProductClassificationAttribute?: ProductClassificationAttr;
    ProductClassificationAttributeId?: string;
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    Sequence?: number;
    Shares?: ProductAttributeDefinitionShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    StepValue?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    ValueDescription?: string;
    What?: EventChangeEvent;
}