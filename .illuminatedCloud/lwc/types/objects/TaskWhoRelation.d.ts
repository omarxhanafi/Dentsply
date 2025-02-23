// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskWhoRelation extends SObject 
{
    Account?: Account;
    AccountId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Relation?: SObject;
    RelationId?: string;
    SystemModstamp?: string;
    Task?: Task;
    TaskId?: string;
    Type?: string;
}