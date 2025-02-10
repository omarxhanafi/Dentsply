// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginHistory extends SObject 
{
    ApiType: string;
    ApiVersion: string;
    Application: string;
    AuthenticationService: SObject;
    AuthenticationServiceId: string;
    AuthMethodReference: string;
    Browser: string;
    CipherSuite: string;
    ClientVersion: string;
    CountryIso: string;
    ForwardedForIp: string;
    LoginGeo: LoginGeo;
    LoginGeoId: string;
    LoginHistory: AuthSession;
    LoginSubType: string;
    LoginTime: string;
    LoginType: string;
    LoginUrl: string;
    Network: Network;
    NetworkId: string;
    OptionsIsGet: boolean;
    OptionsIsPost: boolean;
    Platform: string;
    SourceIp: string;
    Status: string;
    TlsProtocol: string;
    User: SObject;
    UserId: string;
}