// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GrantedByLicense extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomPermission: CustomPermission;
    CustomPermissionId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PermissionSetLicense: PermissionSetLicense;
    PermissionSetLicenseId: string;
    SystemModstamp: string;
}