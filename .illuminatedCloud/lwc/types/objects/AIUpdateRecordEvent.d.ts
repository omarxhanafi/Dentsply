// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AIUpdateRecordEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ErrorCode?: string;
    ErrorMessage?: string;
    EventUuid?: string;
    IsUpdated?: boolean;
    RecordId?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    UpdatedFields?: Object;
}