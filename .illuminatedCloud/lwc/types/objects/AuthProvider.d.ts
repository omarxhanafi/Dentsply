// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthProvider extends SObject 
{
    AppleTeam: string;
    AuthenticationService: LoginHistory;
    AuthorizeUrl: string;
    AuthProvider: AuthConfigProviders;
    ConsumerKey: string;
    ConsumerSecret: string;
    CreatedDate: string;
    CustomMetadataTypeRecord: string;
    DefaultScopes: string;
    DeveloperName: string;
    EcKey: string;
    ErrorUrl: string;
    ExecutionUser: User;
    ExecutionUserId: string;
    FriendlyName: string;
    IconUrl: string;
    IdTokenIssuer: string;
    LinkKickoffUrl: string;
    LogoutUrl: string;
    OauthKickoffUrl: string;
    OptionsIncludeOrgIdInId: boolean;
    OptionsIsBitbucket: boolean;
    OptionsIsEmi: boolean;
    OptionsIsEmiSnapchatAds: boolean;
    OptionsIsMuleSoftEU: boolean;
    OptionsIsMuleSoftUS: boolean;
    OptionsIsPkceEnabled: boolean;
    OptionsIsSegmentIntelligence: boolean;
    OptionsIsWebDataConnector: boolean;
    OptionsRequireMfa: boolean;
    OptionsSendAccessTokenInHeader: boolean;
    OptionsSendClientCredentialsInHeader: boolean;
    OptionsSendSecretInApis: boolean;
    Plugin: ApexClass;
    PluginId: string;
    ProviderType: string;
    RegistrationHandler: ApexClass;
    RegistrationHandlerId: string;
    SsoKickoffUrl: string;
    SsoProvider: ThirdPartyAccountLink;
    TokenUrl: string;
    UserInfoUrl: string;
}