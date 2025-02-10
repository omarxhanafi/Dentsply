// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FieldPermissions extends SObject 
{
    Field: string;
    Parent: PermissionSet;
    ParentId: string;
    PermissionsEdit: boolean;
    PermissionsRead: boolean;
    SystemModstamp: string;
}