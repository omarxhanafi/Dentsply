// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchApexErrorEvent extends SObject 
{
    AsyncApexJobId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DoesExceedJobScopeMaxLength: boolean;
    EventUuid: string;
    ExceptionType: string;
    JobScope: string;
    Message: string;
    Phase: string;
    ReplayId: string;
    RequestId: string;
    SourceEvent: AsyncOperationEvent;
    StackTrace: string;
}