// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateJob extends SObject 
{
    /**
     * The reciprocal relationship for {@link DuplicateRecordSet.ParentId}.
     */
    AllDuplicateRecordSets?: DuplicateRecordSet[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DuplicateJobDefinition?: DuplicateJobDefinition;
    DuplicateJobDefinitionId?: string;
    DuplicateJobMatchingRules?: DuplicateJobMatchingRule[];
    DuplicateJobStatus?: string;
    EndDateTime?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    NumDuplicateRecordItems?: number;
    NumDuplicateRecordSets?: number;
    NumRecordsScanned?: number;
    RelatedRecord?: FlowRecordRelation;
    ResultListView?: ListView;
    ResultListViewId?: string;
    StartDateTime?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}