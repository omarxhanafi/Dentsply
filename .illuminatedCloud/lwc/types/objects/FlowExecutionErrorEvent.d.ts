// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowExecutionErrorEvent extends SObject 
{
    ContextObject?: string;
    ContextRecord?: SObject;
    ContextRecordId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ElementApiName?: string;
    ElementType?: string;
    ErrorId?: string;
    ErrorMessage?: string;
    EventDate?: string;
    EventIdentifier?: string;
    EventType?: string;
    EventUuid?: string;
    ExtendedErrorCode?: string;
    FlowApiName?: string;
    FlowExecutionEndDate?: string;
    FlowExecutionStartDate?: string;
    FlowNamespace?: string;
    FlowVersionId?: string;
    FlowVersionNumber?: number;
    InterviewBatchId?: string;
    InterviewGuid?: string;
    InterviewRequestId?: string;
    InterviewStartDate?: string;
    InterviewStartedBy?: SObject;
    InterviewStartedById?: string;
    ProcessType?: string;
    RelatedRecordId?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    StageQualifiedApiName?: string;
    User?: SObject;
    UserId?: string;
    Username?: string;
}