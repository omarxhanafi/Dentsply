// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcedurePlanDefinition extends SObject 
{
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
    PrimaryObject?: string;
    ProcedurePlanVersionCanonicalMappings?: ProcedurePlanDefinitionVersion[];
    ProcessType?: string;
    SystemModstamp?: string;
}