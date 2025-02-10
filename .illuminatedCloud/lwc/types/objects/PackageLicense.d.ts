// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PackageLicense extends SObject 
{
    AllowedLicenses: number;
    CreatedDate: string;
    ExpirationDate: string;
    IsAvailableForIntegrations: boolean;
    IsProvisioned: boolean;
    LastModifiedDate: string;
    NamespacePrefix: string;
    PackageLicense: UserPackageLicense;
    Status: string;
    SystemModstamp: string;
    UsedLicenses: number;
}