// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MaintenancePlanChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    DoesAutoGenerateWorkOrders?: boolean;
    DoesGenerateUponCompletion?: boolean;
    EndDate?: Date;
    Frequency?: number;
    FrequencyType?: string;
    GenerationHorizon?: number;
    GenerationTimeframe?: number;
    GenerationTimeframeType?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: Location;
    LocationId?: string;
    MaintenancePlanNumber?: string;
    MaintenancePlanTitle?: string;
    MaintenanceWindowEndDays?: number;
    MaintenanceWindowStartDays?: number;
    NextSuggestedMaintenanceDate?: Date;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    ServiceContract?: ServiceContract;
    ServiceContractId?: string;
    StartDate?: Date;
    SvcApptGenerationMethod?: string;
    WorkOrderGenerationMethod?: string;
    WorkOrderGenerationStatus?: string;
    WorkType?: WorkType;
    WorkTypeId?: string;
}