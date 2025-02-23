// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkCapacityLimitChangeEvent extends SObject 
{
    CapacityLimitRelaxation?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    EndDate?: Date;
    IsActive?: boolean;
    IsFriday?: boolean;
    IsMonday?: boolean;
    IsSaturday?: boolean;
    IsSunday?: boolean;
    IsSvcTerrOnlyLimit?: boolean;
    IsThursday?: boolean;
    IsTuesday?: boolean;
    IsWednesday?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LimitationUnits?: string;
    LimitationValue?: number;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    ServiceTerritory?: ServiceTerritory;
    ServiceTerritoryId?: string;
    StartDate?: Date;
    SvcApptField?: string;
    SvcApptFieldValDplyNm?: string;
    SvcApptFieldValue?: string;
    TimePeriod?: string;
    WorkCapacityLimitNumber?: string;
}