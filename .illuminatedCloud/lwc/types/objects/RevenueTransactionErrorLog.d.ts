// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RevenueTransactionErrorLog extends SObject 
{
    AsyncOperationTracker: AsyncOperationTracker;
    AsyncOperationTrackerId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ErrorLogNumber: string;
    ErrorMessage: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: SObject;
    OwnerId: string;
    PrimaryRecord: SObject;
    PrimaryRecordId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: RevenueTransactionErrorLogShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}