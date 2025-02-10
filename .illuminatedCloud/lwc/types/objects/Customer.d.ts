// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Customer extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.PartyRoleId}.
     */
    CommSubsConsents: CommSubscriptionConsent[];
    /**
     * The reciprocal relationship for {@link ContactPointConsent.PartyRoleId}.
     */
    ContactPointConsents: ContactPointConsent[];
    /**
     * The reciprocal relationship for {@link ContactPointTypeConsent.PartyRoleId}.
     */
    ContactPointTypeConsents: ContactPointTypeConsent[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomerStatusType: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    Party: Individual;
    /**
     * The reciprocal relationship for {@link PartyConsent.PartyRoleId}.
     */
    PartyConsents: PartyConsent[];
    PartyId: string;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.PartyRoleId}.
     */
    PartyRole: CommSubscriptionConsent;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    Shares: CustomerShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalLifeTimeValue: number;
}