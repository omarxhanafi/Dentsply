// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AsyncOperationEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    OperationDetails?: AsyncOperationStatus[];
    OperationId?: string;
    ReplayId?: string;
    SourceEvent?: SObject;
}