// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductCategory extends SObject 
{
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
    Catalog: ProductCatalog;
    CatalogId: string;
    /**
     * The reciprocal relationship for {@link ProductCategory.ParentCategoryId}.
     */
    ChildCategories: ProductCategory[];
    Code: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: ProductCategoryFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: ProductCategoryHistory[];
    IsDeleted: boolean;
    IsNavigational: boolean;
    Items: ContractItemPrice[];
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    NumberOfProducts: number;
    Parent: FeedComment;
    ParentCategory: ProductCategory;
    ParentCategoryId: string;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductCategoryProduct.ProductCategoryId}.
     */
    ProductCategory: ProductCategoryProduct;
    /**
     * The reciprocal relationship for {@link ProductCategoryDisqual.CategoryId}.
     */
    ProductCategoryDisqualifications: ProductCategoryDisqual[];
    /**
     * The reciprocal relationship for {@link ProductCategoryProduct.ProductCategoryId}.
     */
    ProductCategoryProducts: ProductCategoryProduct[];
    /**
     * The reciprocal relationship for {@link ProductCategoryQualification.CategoryId}.
     */
    ProductCategoryQualifications: ProductCategoryQualification[];
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    SortOrder: number;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}