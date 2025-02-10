// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServicePresenceStatus extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    PresenceStatusOnDecline: PresenceUserConfig;
    PresenceStatusOnPushTimeout: PresenceUserConfig;
    ServicePresenceStatus: ServiceChannelStatus;
    SetupEntityAccessItems: SetupEntityAccess[];
    SystemModstamp: string;
}