// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SessionPermSetActivation extends SObject 
{
    AuthSession?: AuthSession;
    AuthSessionId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    PermissionSet?: PermissionSet;
    PermissionSetGroup?: PermissionSetGroup;
    PermissionSetGroupId?: string;
    PermissionSetId?: string;
    SystemModstamp?: string;
    User?: User;
    UserId?: string;
}