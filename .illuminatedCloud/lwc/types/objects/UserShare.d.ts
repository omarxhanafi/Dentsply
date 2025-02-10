// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserShare extends SObject 
{
    IsActive: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    RowCause: string;
    User: User;
    UserAccessLevel: string;
    UserId: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}