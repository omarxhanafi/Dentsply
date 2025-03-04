// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetRelationshipChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    AssetRelationshipNumber?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FromDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedAsset?: Asset;
    RelatedAssetId?: string;
    RelationshipType?: string;
    ReplayId?: string;
    ToDate?: string;
}