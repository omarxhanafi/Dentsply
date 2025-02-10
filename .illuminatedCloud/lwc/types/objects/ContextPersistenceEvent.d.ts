// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextPersistenceEvent extends SObject 
{
    CorrelationIdentifier: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    HasErrors: boolean;
    ReplayId: string;
    RequestIdentifier: string;
    SourceEvent: AsyncOperationEvent;
}