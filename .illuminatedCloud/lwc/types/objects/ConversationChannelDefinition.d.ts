// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationChannelDefinition extends SObject 
{
    CapabilitiesSupportsCustomChannelParameters?: boolean;
    CapabilitiesSupportsDoubleOptInConsent?: boolean;
    CapabilitiesSupportsExplicitConsent?: boolean;
    CapabilitiesSupportsImplicitConsent?: boolean;
    CapabilitiesSupportsIsoCountryCode?: boolean;
    CapabilitiesSupportsKeywords?: boolean;
    ChannelDefinition?: MessagingChannel;
    ConnectedAppOauthLink?: string;
    ConnectedAppType?: string;
    ConsentOwner?: string;
    ConversationVendorInfo?: ConversationVendorInfo;
    ConversationVendorInfoId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomerConnectedAppOauthLink?: string;
    CustomEventPayloadField?: string;
    CustomEventTypeField?: string;
    CustomIcon?: StaticResource;
    CustomIconId?: string;
    CustomPlatformEvent?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    RoutingOwner?: string;
    SystemModstamp?: string;
}