// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpressionSetDefinitionVersion extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    ExpressionSetDefinition?: ExpressionSetDefinition;
    ExpressionSetDefinitionId?: string;
    ExpsSetDefinitionVersions?: ExpressionSetVersion[];
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    Status?: string;
    SystemModstamp?: string;
    VersionNumber?: number;
}