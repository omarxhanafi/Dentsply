// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrgWideEmailAddress extends SObject 
{
    Address: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DisplayName: string;
    IsAllowAllProfiles: boolean;
    IsVerified: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OrgEmailAddressSecurityItems: OrgEmailAddressSecurity[];
    Purpose: string;
    SetupEntityAccessItems: SetupEntityAccess[];
    SystemModstamp: string;
}