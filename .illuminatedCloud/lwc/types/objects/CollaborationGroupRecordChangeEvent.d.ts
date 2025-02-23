// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationGroupRecordChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CollaborationGroup?: CollaborationGroup;
    CollaborationGroupId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Network?: Network;
    NetworkId?: string;
    Record?: SObject;
    RecordId?: string;
    ReplayId?: string;
}