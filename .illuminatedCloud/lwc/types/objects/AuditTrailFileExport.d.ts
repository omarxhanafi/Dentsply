// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuditTrailFileExport extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    CompletedDateTime: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FileDeletedBy: User;
    FileDeletedById: string;
    FileDeletedDateTime: string;
    FileIdentifier: string;
    FileName: string;
    FileReferenceBody: string;
    FileReferenceContentType: string;
    FileReferenceLength: number;
    FileReferenceName: string;
    FileStatus: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    IsEmailSent: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    RequestIdentifier: string;
    RequestStatus: string;
    Shares: AuditTrailFileExportShare[];
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}