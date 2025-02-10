// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskStatus extends SObject 
{
    ApiName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsClosed: boolean;
    IsDefault: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    SortOrder: number;
    SystemModstamp: string;
}