// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductWarrantyTermChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CoveredProduct?: Product2;
    CoveredProductFamily?: string;
    CoveredProductId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ProductWarrantyTermNumber?: string;
    ReplayId?: string;
    WarrantyTerm?: WarrantyTerm;
    WarrantyTermId?: string;
}