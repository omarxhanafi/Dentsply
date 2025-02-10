// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ResourcePreferenceChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PreferenceType: string;
    RelatedRecord: SObject;
    RelatedRecordId: string;
    ReplayId: string;
    ResourcePreferenceNumber: string;
    ServiceResource: ServiceResource;
    ServiceResourceId: string;
}