// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AnalyticsTaskStatusEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    FailureCount?: number;
    InProgressCount?: number;
    Message?: string;
    NotStartedCount?: number;
    ReplayId?: string;
    RequestStatus?: string;
    Result?: string;
    RuntimeRequest?: string;
    SourceEvent?: AsyncOperationEvent;
    SuccessCount?: number;
    TaskNode?: string;
    TaskPhase?: string;
    TaskStatus?: string;
    TotalDurationInSecond?: number;
    TotalTask?: number;
    WarningCount?: number;
}