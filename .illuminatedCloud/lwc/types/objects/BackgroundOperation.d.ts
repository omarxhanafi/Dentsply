// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BackgroundOperation extends SObject 
{
    BackgroundOperation: ProcessExceptionEvent;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Error: string;
    ExecutionGroup: string;
    ExpiresAt: string;
    FinishedAt: string;
    GroupLeader: BackgroundOperation;
    GroupLeaderId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MergedOperations: BackgroundOperation[];
    Name: string;
    NumFollowers: number;
    ParentKey: string;
    ProcessAfter: string;
    RelatedRecord: FlowRecordRelation;
    RetryBackoff: number;
    RetryCount: number;
    RetryLimit: number;
    SequenceGroup: string;
    SequenceNumber: number;
    StartedAt: string;
    Status: string;
    SubmittedAt: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Timeout: number;
    Type: string;
    WorkerUri: string;
}