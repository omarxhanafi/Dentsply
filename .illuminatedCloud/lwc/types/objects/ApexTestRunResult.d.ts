// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexTestRunResult extends SObject 
{
    ApexTestRunResult: ApexTestResult;
    AsyncApexJob: AsyncApexJob;
    AsyncApexJobId: string;
    ClassesCompleted: number;
    ClassesEnqueued: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EndTime: string;
    IsAllTests: boolean;
    IsDeleted: boolean;
    JobName: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MethodsCompleted: number;
    MethodsEnqueued: number;
    MethodsFailed: number;
    Source: string;
    StartTime: string;
    Status: string;
    SystemModstamp: string;
    TestRunResult: ApexTestQueueItem;
    TestSetupTime: number;
    TestTime: number;
    User: User;
    UserId: string;
}