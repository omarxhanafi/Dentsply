// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PlatformStatusAlertEvent extends SObject 
{
    ApiErrorCode: string;
    ComponentName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventDate: string;
    EventIdentifier: string;
    EventUuid: string;
    ExtendedErrorCode: string;
    RelatedEventIdentifier: string;
    ReplayId: string;
    RequestId: string;
    ServiceJobId: string;
    ServiceName: string;
    SourceEvent: AsyncOperationEvent;
    StatusType: string;
    SubComponentName: string;
    Subject: string;
    User: SObject;
    UserId: string;
    Username: string;
}