// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MaintenanceAssetChangeEvent extends SObject 
{
    Asset: Asset;
    AssetId: string;
    ChangeEventHeader: ChangeEventHeader;
    ContractLineItem: ContractLineItem;
    ContractLineItemId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MaintenanceAssetNumber: string;
    MaintenancePlan: MaintenancePlan;
    MaintenancePlanId: string;
    NextSuggestedMaintenanceDate: Date;
    ReplayId: string;
    WorkType: WorkType;
    WorkTypeId: string;
}