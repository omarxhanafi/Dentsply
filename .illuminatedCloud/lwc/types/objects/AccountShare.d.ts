// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountShare extends SObject 
{
    Account: Account;
    AccountAccessLevel: string;
    AccountId: string;
    CaseAccessLevel: string;
    ContactAccessLevel: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OpportunityAccessLevel: string;
    RowCause: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}