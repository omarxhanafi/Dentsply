// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DecisionTable extends SObject 
{
    /**
     * The reciprocal relationship for {@link CalculationProcedureStep.DecisionTableId}.
     */
    CalculationProcedureSteps: CalculationProcedureStep[];
    CollectOperator: string;
    ConditionCriteria: string;
    ConditionType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DataSourceType: string;
    DecisionMatrixDefinition: CalculationMatrix[];
    DecisionTable: DecisionTableDatasetLink;
    DecisionTableParameters: DecisionTableParameter[];
    DecisionTableSourceCriterias: DecisionTableSourceCriteria[];
    Description: string;
    DeveloperName: string;
    DoesConsiderNullValue: boolean;
    ExecutionType: string;
    FilterResultBy: string;
    HasIncrementalSyncFailed: boolean;
    IsDeleted: boolean;
    IsIncrementalSyncEnabled: boolean;
    Language: string;
    LastIncrementalSyncDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastSyncDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    PricingElementDecisionTables: PricingRecipeTableMapping[];
    ProcedurePlanOptionDecisionTable: ProcedurePlanOption[];
    RefreshFailureReason: string;
    RefreshStatus: string;
    SetupName: string;
    SourceConditionLogic: string;
    SourceObject: string;
    Status: string;
    SystemModstamp: string;
    Type: string;
    UploadStatus: string;
    UsageType: string;
}