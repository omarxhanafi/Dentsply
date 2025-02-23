// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserRole extends SObject 
{
    CaseAccessForAccountOwner?: string;
    ContactAccessForAccountOwner?: string;
    DeveloperName?: string;
    ForecastUser?: User;
    ForecastUserId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MayForecastManagerShare?: boolean;
    Name?: string;
    OpportunityAccessForAccountOwner?: string;
    ParentRole?: UserRole;
    ParentRoleId?: string;
    PortalAccount?: Account;
    PortalAccountId?: string;
    PortalAccountOwner?: User;
    PortalAccountOwnerId?: string;
    PortalRole?: string;
    PortalType?: string;
    Related?: Group;
    RollupDescription?: string;
    SystemModstamp?: string;
    UserRole?: Name;
    Users?: User[];
}