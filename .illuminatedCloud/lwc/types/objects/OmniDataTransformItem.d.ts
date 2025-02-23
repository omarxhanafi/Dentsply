// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniDataTransformItem extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DefaultValue?: string;
    FilterDataType?: string;
    FilterGroup?: number;
    FilterOperator?: string;
    FilterValue?: string;
    FormulaConverted?: string;
    FormulaExpression?: string;
    FormulaResultPath?: string;
    FormulaSequence?: number;
    GlobalKey?: string;
    InputFieldName?: string;
    InputObjectName?: string;
    InputObjectQuerySequence?: number;
    IsDeleted?: boolean;
    IsDisabled?: boolean;
    IsRequiredForUpsert?: boolean;
    IsUpsertKey?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedFieldName?: string;
    LinkedObjectSequence?: number;
    LookupByFieldName?: string;
    LookupObjectName?: string;
    LookupReturnedFieldName?: string;
    MigrationAttribute?: string;
    MigrationCategory?: string;
    MigrationGroup?: string;
    MigrationKey?: string;
    MigrationPattern?: string;
    MigrationProcess?: string;
    MigrationType?: string;
    MigrationValue?: string;
    Name?: string;
    OmniDataTransformation?: OmniDataTransform;
    OmniDataTransformationId?: string;
    OutputCreationSequence?: number;
    OutputFieldFormat?: string;
    OutputFieldName?: string;
    OutputObjectName?: string;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TransformValueMappings?: string;
}