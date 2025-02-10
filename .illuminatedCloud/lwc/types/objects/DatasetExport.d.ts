// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DatasetExport extends SObject 
{
    CompressedMetadataLength: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DatasetExportParts: DatasetExportPart[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Metadata: string;
    MetadataLength: number;
    Owner: string;
    PublisherInfo: string;
    PublisherType: string;
    Status: string;
    SystemModstamp: string;
}