// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface InsightsExternalData extends SObject 
{
    Action?: string;
    CompressedMetadataLength?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Dataflow?: string;
    Description?: string;
    EdgemartAlias?: string;
    EdgemartContainer?: string;
    EdgemartLabel?: string;
    ExternalDataIds?: InsightsExternalDataPart[];
    FileName?: string;
    Format?: string;
    IsDeleted?: boolean;
    IsDependentOnLastUpload?: boolean;
    IsIndependentParts?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LicenseType?: string;
    MetadataJson?: string;
    MetaDataLength?: number;
    Mode?: string;
    NotificationEmail?: string;
    NotificationSent?: string;
    Operation?: string;
    Status?: string;
    StatusMessage?: string;
    SubmittedDate?: string;
    SystemModstamp?: string;
    Target?: string;
}