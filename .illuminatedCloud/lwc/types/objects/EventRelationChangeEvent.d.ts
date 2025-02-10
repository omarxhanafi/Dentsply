// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventRelationChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Event: Event;
    EventId: string;
    IsInvitee: boolean;
    IsParent: boolean;
    IsWhat: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Relation: SObject;
    RelationId: string;
    ReplayId: string;
    RespondedDate: string;
    Response: string;
    Status: string;
}