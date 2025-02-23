// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventLogFile extends SObject 
{
    ApiVersion?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventType?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LogDate?: string;
    LogFile?: string;
    LogFileContentType?: string;
    LogFileFieldNames?: string;
    LogFileFieldTypes?: string;
    LogFileLength?: number;
    SystemModstamp?: string;
}