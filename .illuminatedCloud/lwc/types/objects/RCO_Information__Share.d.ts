// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RCO_Information__Share extends SObject 
{
    AccessLevel: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: RCO_Information__c;
    ParentId: string;
    RowCause: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}