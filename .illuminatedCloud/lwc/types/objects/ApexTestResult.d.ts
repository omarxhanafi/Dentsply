// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexTestResult extends SObject 
{
    ApexClass: ApexClass;
    ApexClassId: string;
    ApexLog: ApexLog;
    ApexLogId: string;
    ApexTestResults: ApexTestResultLimits[];
    ApexTestRunResult: ApexTestRunResult;
    ApexTestRunResultId: string;
    AsyncApexJob: AsyncApexJob;
    AsyncApexJobId: string;
    IsTestSetup: boolean;
    Message: string;
    MethodName: string;
    Outcome: string;
    QueueItem: ApexTestQueueItem;
    QueueItemId: string;
    RunTime: number;
    StackTrace: string;
    SystemModstamp: string;
    TestTimestamp: string;
}