// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BusinessBrandShare extends SObject 
{
    AccessLevel: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: BusinessBrand;
    ParentId: string;
    RowCause: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}