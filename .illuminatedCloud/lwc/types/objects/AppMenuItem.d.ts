// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AppMenuItem extends SObject 
{
    Application?: SObject;
    ApplicationId?: string;
    AppMenuItem?: OauthToken;
    CanvasAccessMethod?: string;
    CanvasEnabled?: boolean;
    CanvasOptions?: string;
    CanvasReferenceId?: string;
    CanvasSelectedLocations?: string;
    CanvasUrl?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IconUrl?: string;
    InfoUrl?: string;
    IsAccessible?: boolean;
    IsDeleted?: boolean;
    IsRegisteredDeviceOnly?: boolean;
    IsUsingAdminAuthorization?: boolean;
    IsVisible?: boolean;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LogoUrl?: string;
    MobileAppBinaryId?: string;
    MobileAppInstalledDate?: string;
    MobileAppInstalledVersion?: string;
    MobileAppInstallUrl?: string;
    MobileAppVer?: string;
    MobileDeviceType?: string;
    MobileMinOsVer?: string;
    MobilePlatform?: string;
    MobileStartUrl?: string;
    Name?: string;
    NamespacePrefix?: string;
    SortOrder?: number;
    StartUrl?: string;
    SystemModstamp?: string;
    Type?: string;
    UserSortOrder?: number;
}