// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetAction extends SObject 
{
    ActionDate: string;
    ActualTaxChange: number;
    AdjustmentAmountChange: number;
    Amount: number;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    Asset: Asset;
    AssetActionNumber: string;
    AssetActionSources: AssetActionSource[];
    AssetId: string;
    CategoryEnum: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EstimatedTaxChange: number;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MrrChange: number;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    ProductAmountChange: number;
    QuantityChange: number;
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    SubtotalChange: number;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalAmount: number;
    TotalCancellationsAmount: number;
    TotalCrossSellsAmount: number;
    TotalDownsellsAmount: number;
    TotalInitialSaleAmount: number;
    TotalMrr: number;
    TotalOtherAmount: number;
    TotalQuantity: number;
    TotalRenewalsAmount: number;
    TotalTermsAndConditionsAmount: number;
    TotalTransfersAmount: number;
    TotalUpsellsAmount: number;
    Type: string;
}