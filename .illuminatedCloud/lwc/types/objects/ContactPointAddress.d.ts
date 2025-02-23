// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointAddress extends SObject 
{
    ActiveFromDate?: Date;
    ActiveToDate?: Date;
    Address?: Address;
    AddressType?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    BestTimeToContactEndTime?: Time;
    BestTimeToContactStartTime?: Time;
    BestTimeToContactTimezone?: string;
    City?: string;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ContactPointId}.
     */
    CommSubscriptionConsents?: CommSubscriptionConsent[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ContactPointId}.
     */
    ContactPoint?: CommSubscriptionConsent;
    /**
     * The reciprocal relationship for {@link ContactPointConsent.ContactPointId}.
     */
    ContactPointConsents?: ContactPointConsent[];
    ContactPointPhone?: ContactPointPhone;
    ContactPointPhoneId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    GeocodeAccuracy?: string;
    Histories?: ContactPointAddressHistory[];
    IsDefault?: boolean;
    IsDeleted?: boolean;
    IsPrimary?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Latitude?: number;
    Longitude?: number;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: SObject;
    ParentId?: string;
    PostalCode?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ParentId}.
     */
    Shares?: ContactPointAddress[];
    SobjectLookupValue?: AIInsightValue;
    State?: string;
    Street?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}