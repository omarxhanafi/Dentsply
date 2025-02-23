// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointTypeConsent extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    BusinessBrand?: BusinessBrand;
    BusinessBrandId?: string;
    CaptureContactPointType?: string;
    CaptureDate?: string;
    CaptureSource?: string;
    ContactPointType?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataUsePurpose?: DataUsePurpose;
    DataUsePurposeId?: string;
    DoubleConsentCaptureDate?: string;
    EffectiveFrom?: string;
    EffectiveTo?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ContactPointTypeConsentHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Party?: Individual;
    PartyId?: string;
    PartyRole?: SObject;
    PartyRoleId?: string;
    PrivacyConsentStatus?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: ContactPointTypeConsentShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}