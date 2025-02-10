// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OauthTokenExchangeHandler extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    IsDeleted: boolean;
    IsEnabled: boolean;
    IsUserCreationAllowed: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    OauthTokenExchangeHandler: OauthTokenExchHandlerApp;
    SupportedTokenTypesAccessToken: boolean;
    SupportedTokenTypesIdToken: boolean;
    SupportedTokenTypesJwt: boolean;
    SupportedTokenTypesRefreshToken: boolean;
    SupportedTokenTypesSaml2: boolean;
    SystemModstamp: string;
    TokenHandlerApex: ApexClass;
    TokenHandlerApexId: string;
}