// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AsyncApexJob extends SObject 
{
    ApexClass: ApexClass;
    ApexClassId: string;
    AsyncApex: ApexTestRunResult[];
    AsyncApexJob: ApexTestResult;
    CompletedDate: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CronTrigger: CronTrigger;
    CronTriggerId: string;
    ExtendedStatus: string;
    JobItemsProcessed: number;
    JobType: string;
    LastProcessed: string;
    LastProcessedOffset: number;
    MethodName: string;
    NumberOfErrors: number;
    ParentJob: AsyncApexJob;
    ParentJobId: string;
    RelatedRecord: FlowRecordRelation;
    Status: string;
    TotalJobItems: number;
}