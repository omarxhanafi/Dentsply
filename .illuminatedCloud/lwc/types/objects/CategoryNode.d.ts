// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CategoryNode extends SObject 
{
    CategoryNode: CategoryData;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: CategoryNodeLocalization[];
    MasterLabel: string;
    Parent: CategoryNode;
    ParentId: string;
    SortOrder: number;
    SortStyle: string;
    SystemModstamp: string;
}