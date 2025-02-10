// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BriefcaseRule extends SObject 
{
    Briefcase: BriefcaseDefinition;
    BriefcaseId: string;
    BriefcaseRuleFilters: BriefcaseRuleFilter[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FilterLogic: string;
    IsAscendingOrder: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OptionsIsRelatedFilesRule: boolean;
    OrderBy: string;
    ParentRule: BriefcaseRule;
    ParentRuleId: string;
    QueryScope: string;
    RecordLimit: number;
    RelatedBriefcaseRules: BriefcaseRule[];
    RelationshipField: string;
    RelationshipType: string;
    SystemModstamp: string;
    TargetEntity: string;
}