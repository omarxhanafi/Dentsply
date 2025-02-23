// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceReport extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    ContentVersionDocument?: ContentVersion;
    ContentVersionDocumentId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DocumentBody?: string;
    DocumentContentType?: string;
    DocumentLength?: number;
    DocumentName?: string;
    /**
     * The reciprocal relationship for {@link DocumentRecipient.DocumentId}.
     */
    DocumentRecipients?: DocumentRecipient[];
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ServiceReportHistory[];
    IsDeleted?: boolean;
    IsSigned?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Parent?: SObject;
    ParentId?: string;
    RelatedRecord?: FlowRecordRelation;
    ServiceReportLanguage?: string;
    ServiceReportNumber?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Template?: string;
}