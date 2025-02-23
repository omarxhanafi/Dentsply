// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkAuthApiSettings extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomOtpDeliveryHandler?: ApexClass;
    CustomOtpDeliveryHandlerId?: string;
    DoesForgotPasswordRequireAuth?: boolean;
    DoesPasswordLoginRequireAuth?: boolean;
    DoesPwdlessLoginRequireAuth?: boolean;
    DoesRegistrationRequireAuth?: boolean;
    HeadlessDiscoveryExecutionUser?: User;
    HeadlessDiscoveryExecutionUserId?: string;
    HeadlessDiscoveryHandler?: ApexClass;
    HeadlessDiscoveryHandlerId?: string;
    IsDeleted?: boolean;
    IsFirstPartyAppsAllowed?: boolean;
    IsForgotPwdAllowed?: boolean;
    IsForgotPwdEmailTemplateAllowlistingEnabled?: boolean;
    IsHeadlessUserRegistrationAllowed?: boolean;
    IsPwdlessLoginAllowed?: boolean;
    IsRecaptchaRequiredForgotPwd?: boolean;
    IsRecaptchaRequiredPwdlessLogin?: boolean;
    IsRecaptchaRequiredRgstr?: boolean;
    IsUniversalClientRgstrAllowed?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MaxPasswordResetAttempts?: number;
    Network?: Network;
    NetworkId?: string;
    RecaptchaScoreThreshold?: number;
    RecaptchaSecretKey?: string;
    RegistrationExecutionUser?: User;
    RegistrationExecutionUserId?: string;
    RegistrationHandler?: ApexClass;
    RegistrationHandlerId?: string;
    RegistrationUserDefaultProfile?: Profile;
    RegistrationUserDefaultProfileId?: string;
    SystemModstamp?: string;
}