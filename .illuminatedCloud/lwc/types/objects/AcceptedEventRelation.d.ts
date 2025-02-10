// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AcceptedEventRelation extends SObject 
{
    Account: Account;
    AccountId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Event: Event;
    EventId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Relation: SObject;
    RelationId: string;
    RespondedDate: string;
    Response: string;
    SystemModstamp: string;
    Type: string;
}