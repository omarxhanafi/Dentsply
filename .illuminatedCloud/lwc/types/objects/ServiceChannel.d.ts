// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceChannel extends SObject 
{
    AcwExtensionDuration: number;
    AfterConvoWorkMaxTime: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomSound: StaticResource;
    CustomSoundId: string;
    DeveloperName: string;
    DoesMinimizeWidgetOnAccept: boolean;
    DoesOverridePresenceAudio: boolean;
    HasAcwExtensionEnabled: boolean;
    HasAfterConvoWorkTimer: boolean;
    HasAutoAcceptEnabled: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    MaxExtensions: string;
    RelatedEntity: string;
    /**
     * The reciprocal relationship for {@link AgentWork.ServiceChannelId}.
     */
    ServiceChannel: AgentWork;
    SoundLength: number;
    SystemModstamp: string;
}