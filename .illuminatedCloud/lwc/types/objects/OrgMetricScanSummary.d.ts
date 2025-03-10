// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrgMetricScanSummary extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    ErrorMessage?: string;
    FeatureLimit?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    ImplementationEffort?: string;
    IsDeleted?: boolean;
    ItemCount?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LatestOrgMetricScanSummary?: OrgMetric;
    Name?: string;
    OrgMetric?: OrgMetric;
    OrgMetricId?: string;
    OrgMetricScanSummary?: OrgMetricScanResult[];
    PercentUsage?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    ScanDate?: string;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Unit?: string;
}