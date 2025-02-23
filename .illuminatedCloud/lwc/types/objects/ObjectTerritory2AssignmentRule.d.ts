// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ObjectTerritory2AssignmentRule extends SObject 
{
    BooleanFilter?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    ObjectTerritory2AssignmentRuleItems?: ObjectTerritory2AssignmentRuleItem[];
    ObjectType?: string;
    RuleTerritory2Associations?: RuleTerritory2Association[];
    SystemModstamp?: string;
    Territory2Model?: Territory2Model;
    Territory2ModelId?: string;
}