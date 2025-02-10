// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserRecordAccess extends SObject 
{
    HasAllAccess: boolean;
    HasDeleteAccess: boolean;
    HasEditAccess: boolean;
    HasReadAccess: boolean;
    HasTransferAccess: boolean;
    MaxAccessLevel: string;
    RecordId: string;
    User: User;
    UserId: string;
}