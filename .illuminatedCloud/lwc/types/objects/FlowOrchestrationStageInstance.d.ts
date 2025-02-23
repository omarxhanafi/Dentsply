// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationStageInstance extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link FlowOrchestrationStepInstance.StageInstanceId}.
     */
    FlowOrchestrationStepInstances?: FlowOrchestrationStepInstance[];
    IsDeleted?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OrchestrationInstance?: FlowOrchestrationInstance;
    OrchestrationInstanceId?: string;
    Owner?: SObject;
    OwnerId?: string;
    Position?: number;
    RelatedRecord?: FlowRecordRelation;
    Shares?: FlowOrchestrationStageInstanceShare[];
    SobjectLookupValue?: AIInsightValue;
    Status?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}