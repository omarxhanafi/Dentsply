// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkOrderStatus extends SObject 
{
    ApiName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDefault: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    SortOrder: number;
    StatusCode: string;
    SystemModstamp: string;
}