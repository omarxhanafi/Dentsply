// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkPlanSelectionRuleChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    IsActive?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: Location;
    LocationId?: string;
    Owner?: User;
    OwnerId?: string;
    Product2?: Product2;
    Product2Id?: string;
    ReplayId?: string;
    ServiceContract?: ServiceContract;
    ServiceContractId?: string;
    ServiceTerritory?: ServiceTerritory;
    ServiceTerritoryId?: string;
    WorkPlanSelectionRuleNumber?: string;
    WorkPlanTemplate?: WorkPlanTemplate;
    WorkPlanTemplateId?: string;
    WorkType?: WorkType;
    WorkTypeId?: string;
}