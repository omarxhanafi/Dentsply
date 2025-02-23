// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetRelationshipChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    AssetRelationshipNumber?: string;
    AssetRole?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FromDate?: string;
    GroupingKey?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ProductRelatedComponent?: ProductRelatedComponent;
    ProductRelatedComponentId?: string;
    RelatedAsset?: Asset;
    RelatedAssetId?: string;
    RelationshipType?: string;
    ReplayId?: string;
    ToDate?: string;
}