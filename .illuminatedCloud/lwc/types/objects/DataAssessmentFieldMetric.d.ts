// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataAssessmentFieldMetric extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DataAssessmentMetric: DataAssessmentMetric;
    DataAssessmentMetricId: string;
    DataAssessmentValueMetrics: DataAssessmentValueMetric[];
    FieldName: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    NumMatchedBlanks: number;
    NumMatchedDifferent: number;
    NumMatchedInSync: number;
    NumUnmatchedBlanks: number;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}