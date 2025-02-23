// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetActionSource extends SObject 
{
    ActualTax?: number;
    AdjustmentAmount?: number;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AssetAction?: AssetAction;
    AssetActionId?: string;
    AssetActionSourceNumber?: string;
    BillingReference?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Discount?: number;
    DiscountAmount?: number;
    EndDate?: string;
    EstimatedTax?: number;
    ExternalReference?: string;
    ExternalReferenceDataSource?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LegalEntity?: LegalEntity;
    LegalEntityId?: string;
    ListPrice?: number;
    NetUnitPrice?: number;
    ObligatedAmount?: number;
    PeriodBoundary?: string;
    PeriodBoundaryDay?: number;
    PeriodBoundaryStartMonth?: string;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    PricingTermCount?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    ProductAmount?: number;
    ProductSellingModel?: ProductSellingModel;
    ProductSellingModelId?: string;
    ProrationPolicy?: ProrationPolicy;
    ProrationPolicyId?: string;
    Quantity?: number;
    ReferenceEntityItem?: SObject;
    ReferenceEntityItemId?: string;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    StartDate?: string;
    Subtotal?: number;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaxTreatment?: TaxTreatment;
    TaxTreatmentId?: string;
    TotalLineAmount?: number;
    TotalPrice?: number;
    TransactionDate?: string;
    UnitPrice?: number;
}