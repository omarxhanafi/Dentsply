// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessExceptionEvent extends SObject 
{
    AttachedTo: SObject;
    AttachedToId: string;
    BackgroundOperation: BackgroundOperation;
    BackgroundOperationId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    EventUuid: string;
    ExceptionType: string;
    ExternalReference: string;
    Message: string;
    ReplayId: string;
    Severity: string;
    SourceEvent: AsyncOperationEvent;
}