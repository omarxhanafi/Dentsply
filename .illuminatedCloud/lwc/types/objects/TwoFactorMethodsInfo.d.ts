// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TwoFactorMethodsInfo extends SObject 
{
    ExternalId: string;
    HasBuiltInAuthenticator: boolean;
    HasSalesforceAuthenticator: boolean;
    HasSecurityKey: boolean;
    HasTempCode: boolean;
    HasTotp: boolean;
    HasU2F: boolean;
    HasUserVerifiedEmailAddress: boolean;
    HasUserVerifiedMobileNumber: boolean;
    HasVerifiedMobileNumber: boolean;
    User: User;
    UserId: string;
}