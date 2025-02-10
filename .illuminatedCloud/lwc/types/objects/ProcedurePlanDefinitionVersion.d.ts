// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcedurePlanDefinitionVersion extends SObject 
{
    ContextDefinition: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultReadContextMapping: string;
    DefaultSaveContextMapping: string;
    DeveloperName: string;
    EffectiveFrom: string;
    EffectiveTo: string;
    InheritedFrom: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ProcedurePlanDefinition: ProcedurePlanDefinition;
    ProcedurePlanDefinitionId: string;
    ProcedurePlanSectionCanonicalMappings: ProcedurePlanSection[];
    ProcedurePlanVariableCanonicalMappings: ProcedurePlanVariable[];
    Rank: number;
    SystemModstamp: string;
}