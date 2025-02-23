// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationForm extends SObject 
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
     * The reciprocal relationship for {@link AuthorizationFormDataUse.AuthorizationFormId}.
     */
    AuthorizationForm?: AuthorizationFormDataUse;
    /**
     * The reciprocal relationship for {@link AuthorizationFormText.AuthorizationFormId}.
     */
    AuthorizationForms?: AuthorizationFormText[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefaultAuthFormText?: AuthorizationFormText;
    DefaultAuthFormTextId?: string;
    EffectiveFromDate?: Date;
    EffectiveToDate?: Date;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: AuthorizationFormHistory[];
    IsDeleted?: boolean;
    IsSignatureRequired?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    RevisionNumber?: string;
    Shares?: AuthorizationFormShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}