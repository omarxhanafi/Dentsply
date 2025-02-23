// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchDataSrcFilterCriteria extends SObject 
{
    BatchDataSource?: BatchDataSource;
    BatchDataSourceId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DynamicValueType?: string;
    FieldName?: string;
    FieldValue?: string;
    FilterCriteriaSequence?: number;
    IsDeleted?: boolean;
    IsDynamicValue?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Operator?: string;
    SystemModstamp?: string;
}