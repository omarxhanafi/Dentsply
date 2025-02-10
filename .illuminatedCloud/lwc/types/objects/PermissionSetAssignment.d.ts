// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PermissionSetAssignment extends SObject 
{
    Assignee: User;
    AssigneeId: string;
    ExpirationDate: string;
    IsActive: boolean;
    IsRevoked: boolean;
    PermissionSet: PermissionSet;
    PermissionSetGroup: PermissionSetGroup;
    PermissionSetGroupId: string;
    PermissionSetId: string;
    SystemModstamp: string;
}