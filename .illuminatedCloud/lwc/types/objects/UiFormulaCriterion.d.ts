// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UiFormulaCriterion extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LeftHandSide?: string;
    Operator?: SObject;
    OperatorId?: string;
    ParentKeyPrefix?: string;
    RightHandSide?: string;
    Rule?: UiFormulaRule;
    RuleId?: string;
    SystemModstamp?: string;
}