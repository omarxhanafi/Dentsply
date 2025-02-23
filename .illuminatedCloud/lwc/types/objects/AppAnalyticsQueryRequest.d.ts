// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AppAnalyticsQueryRequest extends SObject 
{
    AvailableSince?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    DownloadExpirationTime?: string;
    DownloadSize?: number;
    DownloadUrl?: string;
    EndTime?: string;
    ErrorMessage?: string;
    FileCompression?: string;
    FileType?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OrganizationIds?: string;
    PackageIds?: string;
    QuerySubmittedTime?: string;
    RelatedRecord?: FlowRecordRelation;
    RequestState?: string;
    StartTime?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}