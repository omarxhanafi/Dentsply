// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserPackageLicense extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PackageLicense: PackageLicense;
    PackageLicenseId: string;
    SystemModstamp: string;
    User: User;
    UserId: string;
}