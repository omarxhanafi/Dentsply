// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PendingServiceRoutingChangeEvent extends SObject 
{
    CapacityPercentage?: number;
    CapacityWeight?: number;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    CustomRequestedDateTime?: string;
    DropAdditionalSkillsTimeout?: number;
    Group?: Group;
    GroupId?: string;
    IsInterruptible?: boolean;
    IsPreferredUserRequired?: boolean;
    IsPushAttempted?: boolean;
    IsPushed?: boolean;
    IsReadyForRouting?: boolean;
    IsTransfer?: boolean;
    LastDeclinedAgentSession?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    PausedCapacityPercentage?: number;
    PausedCapacityWeight?: number;
    PreferredUser?: User;
    PreferredUserId?: string;
    PushTimeout?: number;
    Queue?: Group;
    QueueId?: string;
    ReplayId?: string;
    RoutingModel?: string;
    RoutingPriority?: number;
    RoutingType?: string;
    Serial?: number;
    ServiceChannel?: ServiceChannel;
    ServiceChannelId?: string;
    TransferRequester?: User;
    TransferRequesterId?: string;
    WorkItem?: SObject;
    WorkItemId?: string;
}