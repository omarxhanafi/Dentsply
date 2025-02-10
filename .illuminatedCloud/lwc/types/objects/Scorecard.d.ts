// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Scorecard extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link ScorecardAssociation.ScorecardId}.
     */
    ScorecardAssociations: ScorecardAssociation[];
    /**
     * The reciprocal relationship for {@link ScorecardMetric.ScorecardId}.
     */
    ScorecardMetrics: ScorecardMetric[];
    Shares: ScorecardShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetEntity: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}