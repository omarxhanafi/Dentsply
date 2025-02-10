// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatButton extends SObject 
{
    Animation: string;
    AutoGreeting: string;
    Button: LiveChatButtonDeployment;
    ChasitorIdleTimeout: number;
    ChasitorIdleTimeoutWarning: number;
    ChatPage: ApexPage;
    ChatPageId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomAgentName: string;
    DeveloperName: string;
    HasQueue: boolean;
    InviteEndPosition: string;
    InviteImage: StaticResource;
    InviteImageId: string;
    InviteStartPosition: string;
    IsActive: boolean;
    IsDeleted: boolean;
    IsRoutingFlowEnabled: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.LiveChatButtonId}.
     */
    LiveChatButton: LiveChatTranscript;
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.LiveChatButtonId}.
     */
    LiveChatTranscripts: LiveChatTranscript[];
    MasterLabel: string;
    NumberOfReroutingAttempts: number;
    OfflineImage: StaticResource;
    OfflineImageId: string;
    OnlineImage: StaticResource;
    OnlineImageId: string;
    OptionsHasChasitorIdleTimeout: boolean;
    OptionsHasInviteAfterAccept: boolean;
    OptionsHasInviteAfterReject: boolean;
    OptionsHasRerouteDeclinedRequest: boolean;
    OptionsIsAutoAccept: boolean;
    OptionsIsInviteAutoRemove: boolean;
    OverallQueueLength: number;
    PerAgentQueueLength: number;
    PostchatPage: ApexPage;
    PostchatPageId: string;
    PostchatUrl: string;
    PrechatFormPage: ApexPage;
    PrechatFormPageId: string;
    PrechatFormUrl: string;
    PushTimeout: number;
    Queue: Group;
    QueueId: string;
    RoutingConfiguration: QueueRoutingConfig;
    RoutingConfigurationId: string;
    RoutingType: string;
    Site: Site;
    SiteId: string;
    Skill: Skill;
    SkillId: string;
    SupervisorDefaultButton: LiveChatUserConfig;
    SystemModstamp: string;
    TimeToRemoveInvite: number;
    Type: string;
    WindowLanguage: string;
}