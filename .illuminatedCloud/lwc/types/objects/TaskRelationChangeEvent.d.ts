// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskRelationChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsWhat?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Relation?: SObject;
    RelationId?: string;
    ReplayId?: string;
    Task?: Task;
    TaskId?: string;
}