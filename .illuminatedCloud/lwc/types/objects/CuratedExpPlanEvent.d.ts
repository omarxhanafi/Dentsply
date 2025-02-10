// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CuratedExpPlanEvent extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    JobDetails: string;
    PlanName: string;
    PlanStatus: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
}