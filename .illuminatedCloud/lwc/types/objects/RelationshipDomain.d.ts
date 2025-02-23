// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RelationshipDomain extends SObject 
{
    ChildSobject?: EntityDefinition;
    ChildSobjectId?: string;
    DurableId?: string;
    Field?: FieldDefinition;
    FieldId?: string;
    IsCascadeDelete?: boolean;
    IsDeprecatedAndHidden?: boolean;
    IsRestrictedDelete?: boolean;
    JunctionIdListNames?: Object;
    ParentSobject?: EntityDefinition;
    ParentSobjectId?: string;
    RelationshipInfo?: RelationshipInfo;
    RelationshipInfoId?: string;
    RelationshipName?: string;
}