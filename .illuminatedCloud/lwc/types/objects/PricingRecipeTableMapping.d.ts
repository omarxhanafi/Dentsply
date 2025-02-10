// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricingRecipeTableMapping extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FileBasedDecisionTableName: string;
    IsDeleted: boolean;
    IsInternal: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LookupTable: SObject;
    LookupTableId: string;
    PricingComponentType: string;
    PricingRecipe: PricingRecipe;
    PricingRecipeId: string;
    PricingRecipeTableMappingForPOM: PricingProcedureOutputMap[];
    SystemModstamp: string;
}