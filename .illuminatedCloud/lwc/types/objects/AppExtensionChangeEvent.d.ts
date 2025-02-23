// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AppExtensionChangeEvent extends SObject 
{
    AppExtensionLabel?: string;
    AppExtensionName?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FieldServiceMobileSettings?: FieldServiceMobileSettings;
    FieldServiceMobileSettingsId?: string;
    InstallationUrl?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LaunchValue?: string;
    ReplayId?: string;
    ScopedToObjectTypes?: string;
    Type?: string;
}