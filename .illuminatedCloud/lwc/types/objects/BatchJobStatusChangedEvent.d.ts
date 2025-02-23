// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchJobStatusChangedEvent extends SObject 
{
    BatchJob?: string;
    BatchJobDefinition?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EndDateTime?: string;
    EventUuid?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    StartDateTime?: string;
    Status?: string;
}