// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MaintenanceWorkRuleChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    NextSuggestedMaintenanceDate: Date;
    Owner: User;
    OwnerId: string;
    ParentMaintenancePlan: MaintenancePlan;
    ParentMaintenancePlanId: string;
    ParentMaintenanceRecord: MaintenanceAsset;
    ParentMaintenanceRecordId: string;
    RecordsetFilterCriteria: RecordsetFilterCriteria;
    RecordsetFilterCriteriaId: string;
    RecurrencePattern: string;
    ReplayId: string;
    SortOrder: number;
    Title: string;
    Type: string;
    WorkType: WorkType;
    WorkTypeId: string;
}