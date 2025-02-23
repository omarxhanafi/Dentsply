// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DatasetExportEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataflowInstanceId?: string;
    DatasetExportId?: string;
    EventUuid?: string;
    Message?: string;
    Owner?: string;
    PublisherInfo?: string;
    PublisherType?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    Status?: string;
}