// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExtlClntAppOauthPlcyCnfg extends SObject 
{
    ApexHandler: ApexClass;
    ApexHandlerId: string;
    ClientCredentialsFlowUser: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    ExecuteHandlerAs: User;
    ExecuteHandlerAsId: string;
    ExternalClientApplication: ExternalClientApplication;
    ExternalClientApplicationId: string;
    ExtlClntAppOauthPlcyAttrs: ExtlClntAppOauthPlcyAttr[];
    ExtlClntAppOauthPlcyCustmScps: ExtlClntAppOauthPlcyCustmScp[];
    ExtlClntAppOauthSettings: ExtlClntAppOauthSettings;
    ExtlClntAppOauthSettingsId: string;
    GuestJwtTimeout: string;
    IpRelaxationPolicyType: string;
    IsClientCredentialsFlowEnabled: boolean;
    IsDeleted: boolean;
    IsGuestCodeCredFlowEnabled: boolean;
    IsNamedUserJwtEnabled: boolean;
    IsTokenExchangeFlowEnabled: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamedUserJwtTimeout: string;
    PermittedUsersPolicyType: string;
    PolicyAction: string;
    RefreshTokenPolicyType: string;
    RefreshTokenValidityPeriod: number;
    RefreshTokenValidityUnit: string;
    RequiredSessionLevel: string;
    SessionTimeoutInMinutes: number;
    SingleLogoutUrl: string;
    StartUrl: string;
    SystemModstamp: string;
}