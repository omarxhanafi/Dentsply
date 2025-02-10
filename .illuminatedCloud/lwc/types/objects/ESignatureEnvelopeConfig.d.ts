// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ESignatureEnvelopeConfig extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    ExpirationPeriod: number;
    ExpirationWarningPeriod: number;
    FirstReminderPeriod: number;
    IsDeleted: boolean;
    IsExpirationEnabled: boolean;
    IsReminderEnabled: boolean;
    IsVendorDefaultNtfcnEnabled: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    ReminderIntervalPeriod: number;
    SystemModstamp: string;
    TargetObjectName: string;
    Vendor: string;
    VendorAccountIdentifier: string;
}