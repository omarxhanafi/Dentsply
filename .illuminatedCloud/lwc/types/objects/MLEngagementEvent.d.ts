// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MLEngagementEvent extends SObject 
{
    ClientSession?: string;
    Cloud?: string;
    ContextId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomFields?: string;
    Entity?: string;
    EntityType?: string;
    EventIdentifier?: string;
    EventName?: string;
    EventUuid?: string;
    Feature?: string;
    LoggedAt?: string;
    LoggerAppName?: string;
    LoggerName?: string;
    Org?: string;
    PageContext?: string;
    PageUrl?: string;
    ReplayId?: string;
    Score?: number;
    SourceEvent?: AsyncOperationEvent;
    Type?: string;
    User?: User;
    UserId?: string;
    Value?: number;
}