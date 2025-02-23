// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexTestResultLimits extends SObject 
{
    ApexTestResult?: ApexTestResult;
    ApexTestResultId?: string;
    AsyncCalls?: number;
    Callouts?: number;
    Cpu?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Dml?: number;
    DmlRows?: number;
    Email?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LimitContext?: string;
    LimitExceptions?: string;
    MobilePush?: number;
    QueryRows?: number;
    Soql?: number;
    Sosl?: number;
    SystemModstamp?: string;
}