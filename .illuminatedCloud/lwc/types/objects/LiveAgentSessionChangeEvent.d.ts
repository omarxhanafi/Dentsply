// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveAgentSessionChangeEvent extends SObject 
{
    Agent?: User;
    AgentId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ChatReqAssigned?: number;
    ChatReqDeclined?: number;
    ChatReqEngaged?: number;
    ChatReqTimedOut?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LoginTime?: string;
    LogoutTime?: string;
    Name?: string;
    NumFlagLoweredAgent?: number;
    NumFlagLoweredSupervisor?: number;
    NumFlagRaised?: number;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    TimeAtCapacity?: number;
    TimeIdle?: number;
    TimeInAwayStatus?: number;
    TimeInChats?: number;
    TimeInOnlineStatus?: number;
}