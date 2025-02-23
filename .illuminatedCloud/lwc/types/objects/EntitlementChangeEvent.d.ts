// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EntitlementChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Asset?: Asset;
    AssetId?: string;
    AssetWarranty?: AssetWarranty;
    AssetWarrantyId?: string;
    BusinessHours?: BusinessHours;
    BusinessHoursId?: string;
    CasesPerEntitlement?: number;
    ChangeEventHeader?: ChangeEventHeader;
    ContractLineItem?: ContractLineItem;
    ContractLineItemId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EndDate?: Date;
    IsPerIncident?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: Location;
    LocationId?: string;
    Name?: string;
    RemainingCases?: number;
    RemainingWorkOrders?: number;
    ReplayId?: string;
    ServiceContract?: ServiceContract;
    ServiceContractId?: string;
    SlaProcess?: SlaProcess;
    SlaProcessId?: string;
    StartDate?: Date;
    SvcApptBookingWindows?: OperatingHours;
    SvcApptBookingWindowsId?: string;
    Type?: string;
    WorkOrdersPerEntitlement?: number;
}