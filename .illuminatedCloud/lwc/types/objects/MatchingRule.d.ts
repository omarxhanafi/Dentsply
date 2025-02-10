// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MatchingRule extends SObject 
{
    BooleanFilter: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    DuplicateJobMatchingRuleDefinitions: DuplicateJobMatchingRuleDefinition[];
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    MatchEngine: string;
    MatchingRuleItems: MatchingRuleItem[];
    NamespacePrefix: string;
    RuleStatus: string;
    SobjectSubtype: string;
    SystemModstamp: string;
}