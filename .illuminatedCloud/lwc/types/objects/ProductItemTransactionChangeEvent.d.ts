// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductItemTransactionChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ProductItem: ProductItem;
    ProductItemId: string;
    ProductItemTransactionNumber: string;
    Quantity: number;
    RelatedRecord: SObject;
    RelatedRecordId: string;
    ReplayId: string;
    TransactionType: string;
}