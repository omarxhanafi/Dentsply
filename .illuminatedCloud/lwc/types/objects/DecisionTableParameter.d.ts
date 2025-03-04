// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DecisionTableParameter extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    DecisionTable?: DecisionTable;
    DecisionTableId?: string;
    DecisionTableParameter?: DecisionTblDatasetParameter;
    DomainObject?: string;
    FieldName?: string;
    FieldPath?: string;
    IsDeleted?: boolean;
    IsGroupByField?: boolean;
    IsRequired?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Operator?: string;
    Sequence?: number;
    SortType?: string;
    SystemModstamp?: string;
    Usage?: string;
}