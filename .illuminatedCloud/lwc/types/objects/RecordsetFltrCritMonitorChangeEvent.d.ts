// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordsetFltrCritMonitorChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    IsWithinThreshold?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    RecordsetFilterCriteria?: RecordsetFilterCriteria;
    RecordsetFilterCriteriaId?: string;
    ReplayId?: string;
}