// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SchedulingObjective extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    SchedulingCategory: string;
    SchedulingObjectiveParameters: SchedulingObjectiveParameter[];
    SchedulingObjectiveType: string;
    SystemModstamp: string;
}