// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConnectedApplication extends SObject 
{
    App?: IdpEventLog;
    Application?: UserAppMenuCustomization;
    ConnectedApp?: AssetTokenEvent;
    ConnectedApplication?: OauthTokenExchHandlerApp;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    InstalledMobileApps?: InstalledMobileApp[];
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MobileSessionTimeout?: string;
    MobileStartUrl?: string;
    Name?: string;
    NamedUserUvidTimeout?: string;
    OptionsAllowAdminApprovedUsersOnly?: boolean;
    OptionsAppIssueJwtTokenEnabled?: boolean;
    OptionsCodeCredentialGuestEnabled?: boolean;
    OptionsFullContentPushNotifications?: boolean;
    OptionsHasSessionLevelPolicy?: boolean;
    OptionsIsInternal?: boolean;
    OptionsRefreshTokenValidityMetric?: boolean;
    OptionsTokenExchangeManageBitEnabled?: boolean;
    PinLength?: string;
    RefreshTokenValidityPeriod?: number;
    Resource?: VerificationHistory;
    SetupEntityAccessItems?: SetupEntityAccess[];
    StartUrl?: string;
    SystemModstamp?: string;
    UvidTimeout?: string;
}