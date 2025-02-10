// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BusinessBrandChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    OrgId: string;
    Owner: User;
    OwnerId: string;
    Parent: BusinessBrand;
    ParentId: string;
    ReplayId: string;
}