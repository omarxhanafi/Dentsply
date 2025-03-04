// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRequiredChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ParentRecord?: SObject;
    ParentRecordId?: string;
    Product2?: Product2;
    Product2Id?: string;
    ProductRequiredNumber?: string;
    QuantityRequired?: number;
    QuantityUnitOfMeasure?: string;
    ReplayId?: string;
}