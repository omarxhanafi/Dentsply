// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalSocialAccount extends SObject 
{
    AuthorizedBy: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DataSourceId: string;
    DefaultResponseAccount: ExternalSocialAccount;
    DefaultResponseAccountId: string;
    DeveloperName: string;
    ExternalAccountId: string;
    ExternalPictureURL: string;
    IsActive: boolean;
    IsAuthenticated: boolean;
    IsCaseCreationEnabled: boolean;
    IsDataSourceActive: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    ProfileUrl: string;
    Provider: string;
    ProviderUserId: string;
    RuleId: string;
    SetupEntityAccessItems: SetupEntityAccess[];
    SocialPropertyId: string;
    SystemModstamp: string;
    TopicId: string;
    UniqueName: string;
    Username: string;
}