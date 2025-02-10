// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthConfig extends SObject 
{
    AuthOptionsAuthProvider: boolean;
    AuthOptionsCertificate: boolean;
    AuthOptionsSaml: boolean;
    AuthOptionsUsernamePassword: boolean;
    AuthProvidersForConfig: AuthConfigProviders[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    SystemModstamp: string;
    Type: string;
    Url: string;
}