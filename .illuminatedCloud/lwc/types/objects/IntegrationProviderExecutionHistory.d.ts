// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IntegrationProviderExecutionHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IntegrationProviderExecution: IntegrationProviderExecution;
    IntegrationProviderExecutionId: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}