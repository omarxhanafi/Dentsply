// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataUsePurpose extends SObject 
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
     * The reciprocal relationship for {@link AuthorizationFormDataUse.DataUsePurposeId}.
     */
    AuthorizationFormDataUses?: AuthorizationFormDataUse[];
    CanDataSubjectOptOut?: boolean;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * The reciprocal relationship for {@link AuthorizationFormDataUse.DataUsePurposeId}.
     */
    DataUsePurpose?: AuthorizationFormDataUse;
    Description?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: DataUsePurposeHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LegalBasis?: DataUseLegalBasis;
    LegalBasisId?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    /**
     * The reciprocal relationship for {@link PartyConsent.DataUsePurposeId}.
     */
    PartyConsents?: PartyConsent[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: DataUsePurposeShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}