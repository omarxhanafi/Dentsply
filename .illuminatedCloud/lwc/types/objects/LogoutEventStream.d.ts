// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LogoutEventStream extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventDate: string;
    EventIdentifier: string;
    EventUuid: string;
    LoginKey: string;
    RelatedEventIdentifier: string;
    ReplayId: string;
    SessionKey: string;
    SessionLevel: string;
    SourceEvent: AsyncOperationEvent;
    SourceIp: string;
    User: User;
    UserId: string;
    Username: string;
}