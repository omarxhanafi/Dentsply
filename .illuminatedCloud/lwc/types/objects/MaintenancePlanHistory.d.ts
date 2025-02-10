// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MaintenancePlanHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    MaintenancePlan: MaintenancePlan;
    MaintenancePlanId: string;
    NewValue: any;
    OldValue: any;
}