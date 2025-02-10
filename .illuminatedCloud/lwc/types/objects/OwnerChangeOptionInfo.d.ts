// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OwnerChangeOptionInfo extends SObject 
{
    ChildOwnerChangeOptionInfo: OwnerChangeOptionInfo[];
    DefaultValue: boolean;
    DurableId: string;
    EntityDefinition: EntityDefinition;
    EntityDefinitionId: string;
    IsEditable: boolean;
    Label: string;
    Name: string;
    Parent: OwnerChangeOptionInfo;
    ParentId: string;
}