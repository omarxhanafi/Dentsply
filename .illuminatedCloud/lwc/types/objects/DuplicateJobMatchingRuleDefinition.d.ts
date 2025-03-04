// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateJobMatchingRuleDefinition extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DuplicateJobDefinition?: DuplicateJobDefinition;
    DuplicateJobDefinitionId?: string;
    DuplicateJobMatchingRules?: DuplicateJobMatchingRule[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MatchingRule?: MatchingRule;
    MatchingRuleId?: string;
    SystemModstamp?: string;
}