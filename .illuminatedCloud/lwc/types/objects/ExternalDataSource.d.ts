// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalDataSource extends SObject 
{
    AuthProvider: AuthProvider;
    AuthProviderId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomConfiguration: string;
    CustomHttpHeaders: CustomHttpHeader[];
    DeveloperName: string;
    Endpoint: string;
    ExternalDataSource: ContentVersion;
    ExternalDataSrcDescriptors: ExternalDataSrcDescriptor[];
    IsDeleted: boolean;
    IsWritable: boolean;
    Language: string;
    LargeIcon: StaticResource;
    LargeIconId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamedCredential: NamedCredential;
    NamedCredentialId: string;
    NamespacePrefix: string;
    PrincipalType: string;
    Protocol: string;
    Repository: string;
    SetupEntityAccessItems: SetupEntityAccess[];
    SmallIcon: StaticResource;
    SmallIconId: string;
    SystemModstamp: string;
    Type: string;
    UserAuths: ExternalDataUserAuth[];
}