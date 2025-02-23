// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateJobMatchingRule extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DuplicateJob?: DuplicateJob;
    DuplicateJobId?: string;
    DuplicateJobMatchRuleDef?: DuplicateJobMatchingRuleDefinition;
    DuplicateJobMatchRuleDefId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MatchingRuleBooleanFilter?: string;
    MatchingRuleDescription?: string;
    MatchingRuleName?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}