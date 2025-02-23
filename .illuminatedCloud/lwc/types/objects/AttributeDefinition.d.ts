// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AttributeDefinition extends SObject 
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
    AssetAttributes?: AssetAttribute[];
    AssetStatePeriodAttributes?: AssetStatePeriodAttribute[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    AttributeAdjustmentConditions?: AttributeAdjustmentCondition[];
    /**
     * The reciprocal relationship for {@link AttributeCategoryAttribute.AttributeDefinitionId}.
     */
    AttributeCategoryAttributes?: AttributeCategoryAttribute[];
    AttributeDefinition?: AssetAttributeChangeEvent;
    Code?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DataType?: string;
    DefaultHelpText?: string;
    DefaultValue?: string;
    Description?: string;
    DeveloperName?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EnrichmentDestinations?: ProductDecompEnrichmentRule[];
    EnrichmentSources?: ProductDecompEnrichmentRule[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: AttributeDefinitionFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    FulfillmentAssetAttributes?: FulfillmentAssetAttribute[];
    FulfillmentLineAttributes?: FulfillmentLineAttribute[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: AttributeDefinitionHistory[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsRequired?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    OrderItemAttributes?: OrderItemAttribute[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Picklist?: AttributePicklist;
    PicklistId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductAttributeDefinition.AttributeDefinitionId}.
     */
    ProductAttributeDefinitions?: ProductAttributeDefinition[];
    /**
     * The reciprocal relationship for {@link ProductClassificationAttr.AttributeDefinitionId}.
     */
    ProductClassificationAttrs?: ProductClassificationAttr[];
    QuoteLineItemAttributes?: QuoteLineItemAttribute[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    Shares?: AttributeDefinitionShare[];
    SobjectLookupValue?: AIInsightValue;
    SourceSystemIdentifier?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    UnitOfMeasure?: UnitOfMeasure;
    UnitOfMeasureId?: string;
    ValueDescription?: string;
    What?: EventChangeEvent;
}