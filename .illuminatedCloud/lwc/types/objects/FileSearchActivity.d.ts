// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FileSearchActivity extends SObject 
{
    AvgNumResults?: number;
    ClickRank?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CountQueries?: number;
    CountUsers?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Period?: string;
    QueryDate?: Date;
    QueryLanguage?: string;
    RelatedRecord?: FlowRecordRelation;
    SearchTerm?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}