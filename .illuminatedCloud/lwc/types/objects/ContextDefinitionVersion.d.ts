// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextDefinitionVersion extends SObject 
{
    ContextDefinition: ContextDefinition;
    ContextDefinitionId: string;
    ContextMappings: ContextMapping[];
    ContextNodes: ContextNode[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EndDate: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    StartDate: string;
    SystemModstamp: string;
    VersionNumber: number;
}