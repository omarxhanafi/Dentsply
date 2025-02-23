// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexTestQueueItem extends SObject 
{
    ApexClass?: ApexClass;
    ApexClassId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExtendedStatus?: string;
    ParentJob?: AsyncApexJob;
    ParentJobId?: string;
    QueueItem?: ApexTestResult;
    RelatedRecord?: FlowRecordRelation;
    ShouldSkipCodeCoverage?: boolean;
    Status?: string;
    SystemModstamp?: string;
    TestRunResult?: ApexTestRunResult;
    TestRunResultId?: string;
}