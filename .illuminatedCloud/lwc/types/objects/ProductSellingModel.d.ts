// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductSellingModel extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AssetActionSources?: AssetActionSource[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    BundleBasedAdjustments?: BundleBasedAdjustment[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ParentSellingModelId}.
     */
    ChildProductRelatedComponents?: ProductRelatedComponent[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ChildSellingModelId}.
     */
    ChildSellingModel?: ProductRelatedComponent;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
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
    Feeds?: ProductSellingModelFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: ProductSellingModelHistory[];
    IsDeleted?: boolean;
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
    OrderItems?: OrderItem[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ChildSellingModelId}.
     */
    ParentProductRelatedComponents?: ProductRelatedComponent[];
    ParentRecord?: NetworkFeedResponseMetric;
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ParentSellingModelId}.
     */
    ParentSellingModel?: ProductRelatedComponent;
    PriceAdjustmentTiers?: PriceAdjustmentTier[];
    PricebookEntries?: PricebookEntry[];
    PriceBookEntryDerivedPrices?: PriceBookEntryDerivedPrice[];
    PricingTerm?: number;
    PricingTermUnit?: string;
    ProductSellingModel?: ContractItemPrice;
    ProductSellingModelOptions?: ProductSellingModelOption[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    SellingModelType?: string;
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    What?: EventChangeEvent;
}