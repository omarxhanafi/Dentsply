// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Publisher extends SObject 
{
    DurableId: string;
    InstalledEntityDefinitions: EntityDefinition[];
    InstalledFieldDefinitions: FieldDefinition[];
    IsSalesforce: boolean;
    MajorVersion: number;
    MinorVersion: number;
    Name: string;
    NamespacePrefix: string;
}