// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ThirdPartyAccountLink extends SObject 
{
    Handle?: string;
    IsNotSsoUsable?: boolean;
    Provider?: string;
    RemoteIdentifier?: string;
    SsoProvider?: AuthProvider;
    SsoProviderId?: string;
    SsoProviderName?: string;
    ThirdPartyAccountLinkKey?: string;
    User?: User;
    UserId?: string;
}