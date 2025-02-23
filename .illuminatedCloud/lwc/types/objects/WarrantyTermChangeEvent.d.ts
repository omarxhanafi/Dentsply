// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WarrantyTermChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    Code?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    EffectiveStartDate?: string;
    ExchangeType?: string;
    Exclusions?: string;
    ExpensesCovered?: number;
    ExpensesCoveredDuration?: number;
    ExpensesCoveredUnitOfTime?: string;
    IsActive?: boolean;
    IsTransferable?: boolean;
    LaborCovered?: number;
    LaborCoveredDuration?: number;
    LaborCoveredUnitOfTime?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    PartsCovered?: number;
    PartsCoveredDuration?: number;
    PartsCoveredUnitOfTime?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    ReplayId?: string;
    WarrantyDuration?: number;
    WarrantyTermName?: string;
    WarrantyType?: string;
    WarrantyUnitOfTime?: string;
}