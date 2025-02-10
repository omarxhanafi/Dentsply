// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActiveProfileMetric extends SObject 
{
    ActiveUserCount: number;
    AssignedUserCount: number;
    MetricsDate: Date;
    Profile: Profile;
    ProfileId: string;
    SystemModstamp: string;
    UserLicense: UserLicense;
    UserLicenseId: string;
}