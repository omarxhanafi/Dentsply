// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductCategoryProductChangeEvent extends SObject 
{
    Catalog?: ProductCatalog;
    CatalogId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Product?: Product2;
    ProductCategory?: ProductCategory;
    ProductCategoryId?: string;
    ProductId?: string;
    ProductToCategory?: string;
    ReplayId?: string;
}