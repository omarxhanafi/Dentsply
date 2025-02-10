// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseHistory2 extends SObject 
{
    Case: Case;
    CaseId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: SObject;
    OwnerId: string;
    PreviousUpdate: string;
    Status: string;
    SystemModstamp: string;
}