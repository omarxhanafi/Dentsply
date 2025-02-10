// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointPhone extends SObject 
{
    ActiveFromDate: Date;
    ActiveToDate: Date;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AreaCode: string;
    BestTimeToContactEndTime: Time;
    BestTimeToContactStartTime: Time;
    BestTimeToContactTimezone: string;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ContactPointId}.
     */
    CommSubscriptionConsents: CommSubscriptionConsent[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ContactPointId}.
     */
    ContactPoint: CommSubscriptionConsent;
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ContactPointPhoneId}.
     */
    ContactPointAddresses: ContactPointAddress[];
    /**
     * The reciprocal relationship for {@link ContactPointConsent.ContactPointId}.
     */
    ContactPointConsents: ContactPointConsent[];
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ContactPointPhoneId}.
     */
    ContactPointPhone: ContactPointAddress;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ExtensionNumber: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    FormattedInternationalPhoneNumber: string;
    FormattedNationalPhoneNumber: string;
    Histories: ContactPointPhoneHistory[];
    IsBusinessPhone: boolean;
    IsDeleted: boolean;
    IsFaxCapable: boolean;
    IsPersonalPhone: boolean;
    IsPrimary: boolean;
    IsSmsCapable: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    Parent: SObject;
    ParentId: string;
    PhoneType: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link ContactPointPhone.ParentId}.
     */
    Shares: ContactPointPhone[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TelephoneNumber: string;
}