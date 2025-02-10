// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MLModelMetric extends SObject 
{
    BasicMetricValue: number;
    ComplexMetricValue: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DataSetType: string;
    EndTime: string;
    GraphType: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MetricType: string;
    Model: MLModel;
    ModelId: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    RowCount: number;
    Span: string;
    StartTime: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}