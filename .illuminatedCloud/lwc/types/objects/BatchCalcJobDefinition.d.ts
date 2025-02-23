// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchCalcJobDefinition extends SObject 
{
    Action?: AIInsightAction;
    BatchJobDefinition?: BatchJobDefinition;
    BatchJobDefinitionId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataSpaceApiName?: string;
    DefinitionRunMode?: string;
    DeveloperName?: string;
    ExecutionPlatformType?: string;
    IsDeleted?: boolean;
    IsTemplate?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    ProcessType?: string;
    SystemModstamp?: string;
}