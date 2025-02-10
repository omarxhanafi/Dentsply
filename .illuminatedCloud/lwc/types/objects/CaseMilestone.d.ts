// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseMilestone extends SObject 
{
    ActualElapsedTimeInDays: number;
    ActualElapsedTimeInHrs: number;
    ActualElapsedTimeInMins: number;
    BusinessHours: BusinessHours;
    BusinessHoursId: string;
    Case: Case;
    CaseId: string;
    CompletionDate: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ElapsedTimeInDays: number;
    ElapsedTimeInHrs: number;
    ElapsedTimeInMins: number;
    IsCompleted: boolean;
    IsDeleted: boolean;
    IsViolated: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MilestoneType: MilestoneType;
    MilestoneTypeId: string;
    RelatedRecord: FlowRecordRelation;
    StartDate: string;
    StoppedTimeInDays: number;
    StoppedTimeInHrs: number;
    StoppedTimeInMins: number;
    SystemModstamp: string;
    TargetDate: string;
    TargetResponseInDays: number;
    TargetResponseInHrs: number;
    TargetResponseInMins: number;
    TimeRemainingInDays: number;
    TimeRemainingInHrs: string;
    TimeRemainingInMins: string;
    TimeSinceTargetInDays: number;
    TimeSinceTargetInHrs: string;
    TimeSinceTargetInMins: string;
}