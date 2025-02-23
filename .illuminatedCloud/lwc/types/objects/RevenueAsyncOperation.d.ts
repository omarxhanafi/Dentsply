// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RevenueAsyncOperation extends SObject 
{
    AsyncOperationNumber?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CorrelationIdentifier?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExpiresAt?: string;
    FailedJobItems?: number;
    FinishedAt?: string;
    IsDeleted?: boolean;
    JobType?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    ParentOperation?: RevenueAsyncOperation;
    ParentOperationId?: string;
    PrimaryRevenueTransactionErrorLogs?: RevenueTransactionErrorLog[];
    ReferenceEntity?: SObject;
    ReferenceEntityId?: string;
    RelatedRecord?: FlowRecordRelation;
    Response?: string;
    RevenueAsyncOperations?: RevenueAsyncOperation[];
    SobjectLookupValue?: AIInsightValue;
    StartedAt?: string;
    Status?: string;
    SubmittedAt?: string;
    SuccessfulJobItems?: number;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalJobItems?: number;
}