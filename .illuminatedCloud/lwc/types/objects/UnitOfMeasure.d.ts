// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UnitOfMeasure extends SObject 
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
    ConversionFactor?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Sequence?: number;
    Shares?: UnitOfMeasureShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
    UnitCode?: string;
    UnitOfMeasureClass?: UnitOfMeasureClass;
    UnitOfMeasureClasses?: UnitOfMeasureClass[];
    UnitOfMeasureClassId?: string;
    /**
     * The reciprocal relationship for {@link AttributeDefinition.UnitOfMeasureId}.
     */
    UnitOfMeasures?: AttributeDefinition[];
}