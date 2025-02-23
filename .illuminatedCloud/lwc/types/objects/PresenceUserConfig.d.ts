// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PresenceUserConfig extends SObject 
{
    AcwExtensionDuration?: number;
    AfterConvoWorkMaxTime?: number;
    Capacity?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomSound?: StaticResource;
    CustomSoundId?: string;
    DeveloperName?: string;
    HasAcwExtensionEnabled?: boolean;
    HasAfterConvoWorkTimer?: boolean;
    InterruptibleCapacity?: number;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    MaxExtensions?: string;
    OptionsIsAllowAnyDestinationFlowForTransferEnabled?: boolean;
    OptionsIsAllowAnyDestinationProfileForTransferEnabled?: boolean;
    OptionsIsAllowAnyDestinationQueueForTransferEnabled?: boolean;
    OptionsIsAutoAcceptEnabled?: boolean;
    OptionsIsDeclineEnabled?: boolean;
    OptionsIsDeclineReasonEnabled?: boolean;
    OptionsIsDisconnectSoundEnabled?: boolean;
    OptionsIsRequestSoundEnabled?: boolean;
    PresenceStatusOnDecline?: ServicePresenceStatus;
    PresenceStatusOnDeclineId?: string;
    PresenceStatusOnPushTimeout?: ServicePresenceStatus;
    PresenceStatusOnPushTimeoutId?: string;
    PresenceUserConfig?: PresenceConfigDeclineReason;
    SoundLength?: number;
    SystemModstamp?: string;
}