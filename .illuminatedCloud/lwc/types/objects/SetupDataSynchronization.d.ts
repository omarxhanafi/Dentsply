// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SetupDataSynchronization extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastSynchronizationDateTime: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RecordIdentifier: ProductCatalog;
    RecordIdentifierId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: SetupDataSynchronizationShare[];
    SynchronizationStatus: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TargetRecordType: string;
}