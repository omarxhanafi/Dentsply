// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Stamp extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomBrands: CustomBrand[];
    Description: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: StampLocalization[];
    MasterLabel: string;
    Parent: SObject;
    ParentId: string;
    Stamp: StampAssignment;
    SystemModstamp: string;
}