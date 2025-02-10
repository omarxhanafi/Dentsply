// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchDataSource extends SObject 
{
    BatchDataSource: BatchDataSrcFilterCriteria;
    BatchJobDefinition: BatchJobDefinition;
    BatchJobDefinitionId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CriteriaJoinCondition: string;
    CriteriaJoinType: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    SourceFieldName: string;
    SourceTableName: string;
    SystemModstamp: string;
}