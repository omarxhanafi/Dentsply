// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderChangeLog extends SObject 
{
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    ChangeLine: SObject;
    ChangeLineId: string;
    ChangeLineType: string;
    ChangeOrder: Order;
    ChangeOrderId: string;
    ChangeRequest: string;
    ChangeSummary: string;
    ChangeType: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: OrderChangeLogFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: OrderChangeLogHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    RelatedLine: SObject;
    RelatedLineId: string;
    RelatedOrder: Order;
    RelatedOrderId: string;
    RelatedRecord: FlowRecordRelation;
    Status: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}