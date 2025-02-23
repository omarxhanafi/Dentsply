// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CuratedExpJobEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    JobName?: string;
    JobStatus?: string;
    PlanName?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    TaskDetails?: string;
}