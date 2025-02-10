// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TenantUsageEntitlement extends SObject 
{
    AmountUsed: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrentAmountAllowed: number;
    EndDate: Date;
    Frequency: string;
    HasRollover: boolean;
    IsDeleted: boolean;
    IsPersistentResource: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    OverageGrace: number;
    ResourceGroupKey: string;
    Setting: string;
    StartDate: Date;
    SystemModstamp: string;
    UsageDate: string;
}