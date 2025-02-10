// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductCategoryChangeEvent extends SObject 
{
    Catalog: ProductCatalog;
    CatalogId: string;
    ChangeEventHeader: ChangeEventHeader;
    Code: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    IsNavigational: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    NumberOfProducts: number;
    ParentCategory: ProductCategory;
    ParentCategoryId: string;
    ReplayId: string;
    SortOrder: number;
}