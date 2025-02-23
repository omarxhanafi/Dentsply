// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationVendorInfo extends SObject 
{
    BridgeComponent?: string;
    CapabilitiesSupportsAgentSSO?: boolean;
    CapabilitiesSupportsEinsteinConversationInsights?: boolean;
    CapabilitiesSupportsIntelligence?: boolean;
    CapabilitiesSupportsKeyProvisioning?: boolean;
    CapabilitiesSupportsNamedCredential?: boolean;
    CapabilitiesSupportsPartnerContactCenterList?: boolean;
    CapabilitiesSupportsPartnerPhoneNumbers?: boolean;
    CapabilitiesSupportsPartnerTransferDestinations?: boolean;
    CapabilitiesSupportsQueueManagement?: boolean;
    CapabilitiesSupportsUniversalCallRecordingAccess?: boolean;
    CapabilitiesSupportsUserSyncing?: boolean;
    ConnectorUrl?: string;
    ConversationVendorInfo?: CallCoachingMediaProvider;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomIcon?: StaticResource;
    CustomIconId?: string;
    CustomLoginUrl?: string;
    DeveloperName?: string;
    IntegrationClass?: ApexClass;
    IntegrationClassId?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamedCredential?: NamedCredential;
    NamedCredentialId?: string;
    NamespacePrefix?: string;
    SystemModstamp?: string;
    TelephonySettingsComponent?: string;
    VendorType?: string;
}