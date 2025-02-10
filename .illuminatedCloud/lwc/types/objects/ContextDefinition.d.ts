// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextDefinition extends SObject 
{
    ClonedFrom: string;
    ContextDefinition: ExpressionSetDefinitionContextDefinition[];
    ContextDefinitionVersions: ContextDefinitionVersion[];
    ContextTtl: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    DisplayName: string;
    InheritedFrom: string;
    InheritedFromVersion: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    SystemModstamp: string;
    Title: string;
}