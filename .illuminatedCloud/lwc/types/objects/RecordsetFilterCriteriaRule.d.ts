// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordsetFilterCriteriaRule extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CriteriaField?: string;
    CurrencyIsoCode?: string;
    FirstOccurrence?: string;
    Frequency?: string;
    Index?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOccurrence?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    NextOccurrenceField?: string;
    Operator?: string;
    RecordsetFilterCriteria?: RecordsetFilterCriteria;
    RecordsetFilterCriteriaId?: string;
    RecordsetFilterCriteriaRuleNumber?: string;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
    UsageRateField?: string;
    UsageRateUnit?: string;
    Value?: string;
}