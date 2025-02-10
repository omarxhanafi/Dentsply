// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextNode extends SObject 
{
    CanonicalNode: ContextNode;
    CanonicalNodeId: string;
    ContextAttributes: ContextAttribute[];
    ContextDefinitionVersion: ContextDefinitionVersion;
    ContextDefinitionVersionId: string;
    ContextNodeAttrDictionaries: ContextNodeAttrDictionary[];
    ContextNodeMappings: ContextNodeMapping[];
    ContextRelationshipNodes: ContextNode[];
    ContextTags: ContextTag[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DisplayName: string;
    InheritedFrom: string;
    IsDeleted: boolean;
    IsTransposable: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    SystemModstamp: string;
    Title: string;
}