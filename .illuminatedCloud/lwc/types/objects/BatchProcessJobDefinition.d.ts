// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchProcessJobDefinition extends SObject 
{
    Action?: AIInsightAction;
    BatchJobDefinition?: BatchJobDefinition;
    BatchJobDefinitionId?: string;
    BatchJobDefinitionName?: string;
    BatchSize?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    ProcessGroup?: string;
    RecordIdVariable?: string;
    RetryCount?: number;
    RetryInterval?: number;
    Status?: string;
    SystemModstamp?: string;
    Type?: string;
    TypeInstance?: string;
}