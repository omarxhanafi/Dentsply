// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointEmail extends SObject 
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
     * The reciprocal relationship for {@link ContactPointConsent.ContactPointId}.
     */
    ContactPointConsents: ContactPointConsent[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EmailAddress: string;
    EmailDomain: string;
    EmailLatestBounceDateTime: string;
    EmailLatestBounceReasonText: string;
    EmailMailBox: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    Histories: ContactPointEmailHistory[];
    IsDeleted: boolean;
    IsPrimary: boolean;
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
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link ContactPointEmail.ParentId}.
     */
    Shares: ContactPointEmail[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}