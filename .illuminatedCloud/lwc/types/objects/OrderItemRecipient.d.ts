// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItemRecipient extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    Histories: OrderItemRecipientHistory[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Order: Order;
    OrderId: string;
    OrderItemRecipient: OrderItemChangeEvent;
    OrderItems: OrderItem[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RecipientType: string;
    RelatedRecord: FlowRecordRelation;
    ServiceabilityCheckDate: string;
    ServiceabilityData: string;
    ServiceAddress: Address;
    ServiceAddrValidationDate: string;
    ServiceAddrValidationMsg: string;
    ServiceAddrValidationResult: string;
    ServiceCity: string;
    ServiceCountry: string;
    ServiceGeocodeAccuracy: string;
    ServiceLatitude: number;
    ServiceLongitude: number;
    ServicePostalCode: string;
    ServiceState: string;
    ServiceStreet: string;
    SiteName: string;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}