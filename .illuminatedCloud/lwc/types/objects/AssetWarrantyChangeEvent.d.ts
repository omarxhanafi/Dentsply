// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetWarrantyChangeEvent extends SObject 
{
    Asset: Asset;
    AssetId: string;
    AssetWarrantyNumber: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EndDate: Date;
    ExchangeType: string;
    Exclusions: string;
    ExpensesCovered: number;
    ExpensesCoveredEndDate: Date;
    IsTransferable: boolean;
    LaborCovered: number;
    LaborCoveredEndDate: Date;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PartsCovered: number;
    PartsCoveredEndDate: Date;
    Pricebook2: Pricebook2;
    Pricebook2Id: string;
    ReplayId: string;
    StartDate: Date;
    WarrantyTerm: WarrantyTerm;
    WarrantyTermId: string;
    WarrantyType: string;
}