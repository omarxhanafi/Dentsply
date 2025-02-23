// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RelatedListDefinition extends SObject 
{
    DefaultSort?: string;
    DurableId?: string;
    EntityDefinition?: EntityDefinition;
    EntityDefinitionId?: string;
    IsCustomizable?: boolean;
    IsDescribable?: boolean;
    IsLayoutable?: boolean;
    Label?: string;
    ParentEntityDefinition?: EntityDefinition;
    ParentEntityDefinitionId?: string;
    RelatedListColumnDefinitions?: RelatedListColumnDefinition[];
    RelatedListId?: string;
    RelatedListName?: string;
}