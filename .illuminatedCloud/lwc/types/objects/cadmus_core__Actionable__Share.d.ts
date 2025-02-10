// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface cadmus_core__Actionable__Share extends SObject 
{
    AccessLevel: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: Actionable__c;
    ParentId: string;
    RowCause: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}