// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpressionSetDefinition extends SObject 
{
    Action: AIInsightAction;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultPricingProcedureForRecipe: PricingRecipe[];
    DeveloperName: string;
    ExecutionScale: string;
    ExpressionSetDefinition: ExpressionSetDefinitionContextDefinition;
    ExpressionSetDefinitions: ExpressionSet[];
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    ProcedurePlanOptionExpSetDefinition: ProcedurePlanOption[];
    SystemModstamp: string;
}