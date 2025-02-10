// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AIInsightReason extends SObject 
{
    AiInsightValue: AIInsightValue;
    AiInsightValueId: string;
    Contribution: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FeatureType: string;
    FeatureValue: string;
    FieldName: string;
    FieldValue: string;
    Intensity: number;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Operator: string;
    ReasonLabelKey: string;
    RelatedInsightReason: AIInsightReason;
    RelatedInsightReasonId: string;
    SortOrder: number;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Variance: number;
}