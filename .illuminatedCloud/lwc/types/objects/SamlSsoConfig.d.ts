// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SamlSsoConfig extends SObject 
{
    AttributeFormat: string;
    AttributeName: string;
    Audience: string;
    AuthenticationService: LoginHistory;
    AuthProvider: AuthConfigProviders;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    ErrorUrl: string;
    ExecutionUser: User;
    ExecutionUserId: string;
    IdentityLocation: string;
    IdentityMapping: string;
    IsDeleted: boolean;
    Issuer: string;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LoginUrl: string;
    LogoutUrl: string;
    MasterLabel: string;
    NamespacePrefix: string;
    OptionsRequireMfaSaml: boolean;
    OptionsSpInitBinding: boolean;
    OptionsUseConfigRequestMethod: boolean;
    OptionsUserProvisioning: boolean;
    OptionsUseSameDigestAlgoForSigning: boolean;
    RequestSignatureMethod: string;
    SamlJitHandler: ApexClass;
    SamlJitHandlerId: string;
    SingleLogoutBinding: string;
    SingleLogoutUrl: string;
    SystemModstamp: string;
    ValidationCert: string;
    Version: string;
}