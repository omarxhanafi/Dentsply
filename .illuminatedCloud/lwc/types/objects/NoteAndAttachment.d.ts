// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NoteAndAttachment extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    IsNote?: boolean;
    IsPrivate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: SObject;
    ParentId?: string;
    SystemModstamp?: string;
    Title?: string;
}