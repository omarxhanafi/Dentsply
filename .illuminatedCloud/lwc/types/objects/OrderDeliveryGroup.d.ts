// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderDeliveryGroup extends SObject 
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
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DeliverToAddress: Address;
    DeliverToCity: string;
    DeliverToCompanyName: string;
    DeliverToCountry: string;
    DeliverToFullFirstName: string;
    DeliverToFullLastName: string;
    DeliverToFullName: string;
    DeliverToFullSalutation: string;
    DeliverToGeocodeAccuracy: string;
    DeliverToLatitude: number;
    DeliverToLongitude: number;
    DeliverToName: string;
    DeliverToPostalCode: string;
    DeliverToState: string;
    DeliverToStreet: string;
    DeliveryInstructions: string;
    Description: string;
    DesiredDeliveryDate: Date;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    EmailAddress: string;
    Feeds: OrderDeliveryGroupFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    GiftMessage: string;
    GrandTotalAmount: number;
    Histories: OrderDeliveryGroupHistory[];
    IsDeleted: boolean;
    IsGift: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Order: Order;
    OrderChangeLogs: OrderChangeLog[];
    OrderDeliveryGroupNumber: string;
    OrderDeliveryMethod: OrderDeliveryMethod;
    OrderDeliveryMethodId: string;
    OrderId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PhoneNumber: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    PromisedDeliveryDate: Date;
    RelatedDeliveryGroup: OrderDeliveryGroup;
    RelatedDeliveryGroupId: string;
    RelatedDeliveryGroups: OrderDeliveryGroup[];
    RelatedOrderChangeLogs: OrderChangeLog[];
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalAdjustmentAmount: number;
    TotalAdjustmentAmtWithTax: number;
    TotalAdjustmentTaxAmount: number;
    TotalAmount: number;
    TotalLineAmount: number;
    TotalLineAmtWithTax: number;
    TotalLineTaxAmount: number;
    TotalTaxAmount: number;
}