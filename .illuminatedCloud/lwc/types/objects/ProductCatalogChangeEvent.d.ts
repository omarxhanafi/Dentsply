// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductCatalogChangeEvent extends SObject 
{
    CatalogType?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Code?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    EffectiveEndDate?: string;
    EffectiveStartDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    NumberOfCategories?: number;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
}