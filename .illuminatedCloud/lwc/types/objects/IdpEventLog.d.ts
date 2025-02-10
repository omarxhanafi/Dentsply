// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IdpEventLog extends SObject 
{
    App: ConnectedApplication;
    AppId: string;
    AuthSession: AuthSession;
    AuthSessionId: string;
    ErrorCode: string;
    IdentityUsed: string;
    InitiatedBy: string;
    OptionsHasLogoutUrl: boolean;
    SamlEntityUrl: string;
    SsoType: string;
    Timestamp: string;
    User: User;
    UserId: string;
}