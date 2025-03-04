// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillmentOrder extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivatedDate?: string;
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
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    AttachedTo?: ProcessException;
    BillToContact?: Contact;
    BillToContactId?: string;
    ClosedDate?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
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
    Feeds?: FulfillmentOrderFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    FulfilledFromLocation?: Location;
    FulfilledFromLocationId?: string;
    FulfilledToAddress?: Address;
    FulfilledToCity?: string;
    FulfilledToCountry?: string;
    FulfilledToEmailAddress?: string;
    FulfilledToGeocodeAccuracy?: string;
    FulfilledToLatitude?: number;
    FulfilledToLongitude?: number;
    FulfilledToName?: string;
    FulfilledToPhone?: string;
    FulfilledToPostalCode?: string;
    FulfilledToState?: string;
    FulfilledToStreet?: string;
    FulfillmentOrder?: FOStatusChangedEvent;
    FulfillmentOrderItemAdjustments?: FulfillmentOrderItemAdjustment[];
    FulfillmentOrderItemTaxes?: FulfillmentOrderItemTax[];
    /**
     * The reciprocal relationship for {@link FulfillmentOrderLineItem.FulfillmentOrderId}.
     */
    FulfillmentOrderLineItems?: FulfillmentOrderLineItem[];
    FulfillmentOrderNumber?: string;
    FulfillmentOrderShipments?: Shipment[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GrandTotalAmount?: number;
    IsDeleted?: boolean;
    IsReship?: boolean;
    IsSuspended?: boolean;
    ItemCount?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    OpenActivities?: OpenActivity[];
    Order?: Order;
    OrderId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    ProcessExceptions?: ProcessException[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    Shares?: FulfillmentOrderShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    StatusCategory?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    TaxLocaleType?: string;
    TotalAdjustmentAmount?: number;
    TotalAdjustmentAmtWithTax?: number;
    TotalAdjustmentTaxAmount?: number;
    TotalAmount?: number;
    TotalDeliveryAdjustAmount?: number;
    TotalDeliveryAdjustAmtWithTax?: number;
    TotalDeliveryAdjustTaxAmount?: number;
    TotalDeliveryAmount?: number;
    TotalDeliveryAmtWithTax?: number;
    TotalDeliveryTaxAmount?: number;
    TotalFeeAdjustAmount?: number;
    TotalFeeAdjustAmtWithTax?: number;
    TotalFeeAdjustTaxAmount?: number;
    TotalFeeAmount?: number;
    TotalFeeAmtWithTax?: number;
    TotalFeeTaxAmount?: number;
    TotalProductAmount?: number;
    TotalProductAmtWithTax?: number;
    TotalProductTaxAmount?: number;
    TotalTaxAmount?: number;
    Type?: string;
    TypeCategory?: string;
    What?: EventChangeEvent;
}