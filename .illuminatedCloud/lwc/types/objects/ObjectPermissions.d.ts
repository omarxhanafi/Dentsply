// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ObjectPermissions extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Parent?: PermissionSet;
    ParentId?: string;
    PermissionsCreate?: boolean;
    PermissionsDelete?: boolean;
    PermissionsEdit?: boolean;
    PermissionsModifyAllRecords?: boolean;
    PermissionsRead?: boolean;
    PermissionsViewAllRecords?: boolean;
    SystemModstamp?: string;
}