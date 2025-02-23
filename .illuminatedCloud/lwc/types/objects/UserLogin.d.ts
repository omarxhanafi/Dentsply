// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserLogin extends SObject 
{
    IsFrozen?: boolean;
    IsPasswordLocked?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    User?: User;
    UserId?: string;
}