// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ShiftChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EndTime?: string;
    IsNonStandard?: boolean;
    JobProfile?: JobProfile;
    JobProfileId?: string;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    RecordsetFilterCriteria?: RecordsetFilterCriteria;
    RecordsetFilterCriteriaId?: string;
    ReplayId?: string;
    ServiceResource?: ServiceResource;
    ServiceResourceId?: string;
    ServiceTerritory?: ServiceTerritory;
    ServiceTerritoryId?: string;
    ShiftNumber?: string;
    ShiftTemplate?: ShiftTemplate;
    ShiftTemplateId?: string;
    StartTime?: string;
    Status?: string;
    StatusCategory?: string;
    TimeSlotType?: string;
}