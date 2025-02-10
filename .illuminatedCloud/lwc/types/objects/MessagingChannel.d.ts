// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingChannel extends SObject 
{
    BusinessHours: BusinessHours;
    BusinessHoursId: string;
    ChannelAddressIdentifier: string;
    ChannelDefinition: ConversationChannelDefinition;
    ChannelDefinitionId: string;
    ConsentType: string;
    ContactCenterChannels: ContactCenterChannel[];
    ConversationChannel: ConvIntelligenceSignalRule;
    ConversationEndResponse: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    DoubleOptInPrompt: string;
    EngagedResponse: string;
    FallbackQueue: Group;
    FallbackQueueId: string;
    InitialResponse: string;
    IsActive: boolean;
    IsDeleted: boolean;
    IsoCountryCode: string;
    IsRequireDoubleOptIn: boolean;
    IsRestrictedToBusinessHours: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    MessageType: string;
    MessagingChannel: CommSubscriptionChannelTypeChangeEvent;
    MessagingChannels: CommSubscriptionChannelType[];
    MessagingLinks: MessagingLink[];
    MessagingPlatformKey: string;
    MsgChannelLanguageKeywords: MsgChannelLanguageKeyword[];
    OfflineAgentsResponse: string;
    OptInPrompt: string;
    OutsideBusinessHoursResponse: string;
    PlatformType: string;
    RoutingConfiguration: QueueRoutingConfig;
    RoutingConfigurationId: string;
    RoutingType: string;
    SessionHandler: string;
    SetupEntityAccessItems: SetupEntityAccess[];
    SystemModstamp: string;
    TargetQueue: Group;
    TargetQueueId: string;
}