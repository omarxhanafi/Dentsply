// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniInteractionAccessConfig extends SObject 
{
    ConfigName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsAsyncCardCachingEnabled: boolean;
    IsCardApexRemoteDisabled: boolean;
    IsCardCacheDisabled: boolean;
    IsCardDataTfrmDisabled: boolean;
    IsCardIntegrationProcDisabled: boolean;
    IsCardRestApiDisabled: boolean;
    IsCardSoqlDisabled: boolean;
    IsCardSoslDisabled: boolean;
    IsCardStreamingApiDisabled: boolean;
    IsDataTfrmEncrpFieldsDisabled: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    SetupOwner: SObject;
    SetupOwnerId: string;
    SystemModstamp: string;
}