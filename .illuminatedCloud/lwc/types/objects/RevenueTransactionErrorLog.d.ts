// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RevenueTransactionErrorLog extends SObject 
{
    AsyncOperationTracker?: AsyncOperationTracker;
    AsyncOperationTrackerId?: string;
    Category?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ErrorCode?: string;
    ErrorLogNumber?: string;
    ErrorMessage?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: SObject;
    OwnerId?: string;
    PrimaryRecord?: SObject;
    PrimaryRecord2?: SObject;
    PrimaryRecord2Id?: string;
    PrimaryRecordId?: string;
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    RequestIdentifier?: string;
    RevenueTransactionErrLog?: QuoteToOrderErrDtlEvent;
    Shares?: RevenueTransactionErrorLogShare[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}