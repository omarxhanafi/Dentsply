// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricingRecipe extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultPricingProcedure: ExpressionSetDefinition;
    DefaultPricingProcedureId: string;
    DeveloperName: string;
    IsActive: boolean;
    IsDeleted: boolean;
    IsInternal: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    PricingElementCanonicalMappings: PricingRecipeTableMapping[];
    SystemModstamp: string;
}