// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExperienceDiagnosticEvent extends SObject 
{
    BrowserDeviceType?: number;
    ContextId?: string;
    ContextId2?: string;
    ContextMap?: string;
    CorrelationId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ErrorCode?: string;
    ErrorMessage?: string;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    InputCount?: number;
    IsRetry?: boolean;
    NetworkId?: string;
    Operation?: string;
    OperationStage?: string;
    OperationStatus?: string;
    OperationTime?: number;
    OsVersion?: number;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    ResultCount?: number;
    ServiceName?: string;
    SourceEvent?: AsyncOperationEvent;
    User?: SObject;
    UserId?: string;
    Username?: string;
}