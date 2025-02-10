// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniTrackingGroup extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    EndDate: Date;
    GroupType: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    MaxAgeInDays: number;
    OmniExtTrackingDef: OmniExtTrackingDef;
    OmniExtTrackingDefId: string;
    OmniTrackingGroupKey: string;
    OmniTrackingGroups: OmniTrackingComponentDef[];
    StartDate: Date;
    SystemModstamp: string;
}