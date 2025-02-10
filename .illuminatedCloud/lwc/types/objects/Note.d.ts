// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Note extends SObject 
{
    Body: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    IsPrivate: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: User;
    OwnerId: string;
    Parent: SObject;
    ParentId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    Tags: NoteTag[];
    Title: string;
}