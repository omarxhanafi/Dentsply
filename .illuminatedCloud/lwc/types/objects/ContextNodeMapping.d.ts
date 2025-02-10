// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextNodeMapping extends SObject 
{
    ContextAttributeMappings: ContextAttributeMapping[];
    ContextMapping: ContextMapping;
    ContextMappingId: string;
    ContextNode: ContextNode;
    ContextNodeAttrDictionaries: ContextNodeAttrDictionary[];
    ContextNodeId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    InheritedFrom: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MappedContextDefinition: string;
    Object: string;
    SystemModstamp: string;
}