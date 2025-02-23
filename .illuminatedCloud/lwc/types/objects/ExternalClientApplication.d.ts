// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalClientApplication extends SObject 
{
    Application?: UserAppMenuCustomization;
    ContactEmail?: string;
    ContactPhone?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    DistributionState?: string;
    ExternalClientApplication?: AssetTokenEvent;
    ExternalClientApplications?: CustomPermission[];
    ExtlClntAppSamplePlcyCnfgs?: ExtlClntAppSamplePlcyCnfg[];
    IconUrl?: string;
    InfoUrl?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LogoUrl?: string;
    ManagedCollection?: string;
    ManagedSetupPointer?: string;
    ManagedType?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    OrgScopedExternalApp?: string;
    SetupEntityAccessItems?: SetupEntityAccess[];
    SystemModstamp?: string;
    Version?: string;
}