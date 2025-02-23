// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcedurePlanOption extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CriteriaLogic?: string;
    CtxDefinitionOutputField?: DecisionTableParameter;
    CtxDefinitionOutputFieldId?: string;
    CtxMappingOutputField?: DecisionTableParameter;
    CtxMappingOutputFieldId?: string;
    DecisionTable?: DecisionTable;
    DecisionTableId?: string;
    ExpressionSetApiName?: string;
    ExpressionSetDefinition?: ExpressionSetDefinition;
    ExpressionSetDefinitionId?: string;
    ExpressionSetLabel?: string;
    ExpressionSetOutputField?: DecisionTableParameter;
    ExpressionSetOutputFieldId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    PrimaryObject?: string;
    Priority?: number;
    ProcedurePlanOptionCanonicalMappings?: ProcedurePlanCriterion[];
    ProcedurePlanSection?: ProcedurePlanSection;
    ProcedurePlanSectionId?: string;
    ReadContextMapping?: string;
    SaveContextMapping?: string;
    SystemModstamp?: string;
}