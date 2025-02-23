// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AIPredictionEvent extends SObject 
{
    Confidence?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    FieldName?: string;
    HasError?: boolean;
    InsightId?: string;
    PredictionEntityId?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    TargetId?: string;
}