// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExplainabilityActionVersion extends SObject 
{
    ActionLogMessageTemplate?: string;
    ActionSpecification?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DefinitionVersion?: number;
    Description?: string;
    DeveloperName?: string;
    ExplainabilityActionDef?: ExplainabilityActionDef;
    ExplainabilityActionDefId?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    SystemModstamp?: string;
}