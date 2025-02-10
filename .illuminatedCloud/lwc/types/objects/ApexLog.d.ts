// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexLog extends SObject 
{
    ApexLog: ApexTestResult;
    Application: string;
    DurationMilliseconds: number;
    LastModifiedDate: string;
    Location: string;
    LogLength: number;
    LogUser: SObject;
    LogUserId: string;
    Operation: string;
    Request: string;
    RequestIdentifier: string;
    StartTime: string;
    Status: string;
    SystemModstamp: string;
}