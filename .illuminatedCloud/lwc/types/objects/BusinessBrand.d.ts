// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BusinessBrand extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.BusinessBrandId}.
     */
    BusinessBrand?: CommSubscriptionConsent;
    /**
     * The reciprocal relationship for {@link BusinessBrand.ParentId}.
     */
    ChildBUs?: BusinessBrand[];
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.BusinessBrandId}.
     */
    CommSubsConsents?: CommSubscriptionConsent[];
    /**
     * The reciprocal relationship for {@link ContactPointConsent.BusinessBrandId}.
     */
    ContactPointConsents?: ContactPointConsent[];
    /**
     * The reciprocal relationship for {@link ContactPointTypeConsent.BusinessBrandId}.
     */
    ContactPointTypeConsents?: ContactPointTypeConsent[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OrgId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: BusinessBrand;
    ParentId?: string;
    /**
     * The reciprocal relationship for {@link PartyConsent.BusinessBrandId}.
     */
    PartyConsents?: PartyConsent[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link BusinessBrand.ParentId}.
     */
    Shares?: BusinessBrand[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}