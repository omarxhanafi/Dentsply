// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IntegrationProviderDcsnRqmtHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IntegrationProviderDcsnRqmt: IntegrationProviderDcsnRqmt;
    IntegrationProviderDcsnRqmtId: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}