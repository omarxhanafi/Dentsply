// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActivePermSetLicenseMetric extends SObject 
{
    ActiveUserCount: number;
    AssignedUserCount: number;
    DeveloperName: string;
    MasterLabel: string;
    MetricsDate: Date;
    PermissionSetLicense: PermissionSetLicense;
    PermissionSetLicenseId: string;
    SystemModstamp: string;
    TotalLicenses: number;
}