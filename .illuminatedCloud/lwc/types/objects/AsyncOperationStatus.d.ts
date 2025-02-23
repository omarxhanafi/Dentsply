// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AsyncOperationStatus extends SObject 
{
    Category?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    Message?: string;
    OperationDetails?: AsyncOperationEvent;
    SourceEvent?: AsyncOperationEvent;
    Status?: string;
    StatusCode?: string;
}