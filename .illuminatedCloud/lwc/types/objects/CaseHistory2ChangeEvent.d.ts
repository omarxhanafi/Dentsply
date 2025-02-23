// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseHistory2ChangeEvent extends SObject 
{
    Case?: Case;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    PreviousUpdate?: string;
    ReplayId?: string;
    Status?: string;
}