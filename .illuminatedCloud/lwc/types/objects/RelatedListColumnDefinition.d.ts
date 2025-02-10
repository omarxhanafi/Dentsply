// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RelatedListColumnDefinition extends SObject 
{
    Alias: string;
    ColumnSoql: string;
    DataType: string;
    DurableId: string;
    FieldDefinition: FieldDefinition;
    FieldDefinitionId: string;
    IsDefault: boolean;
    IsDescribable: boolean;
    Label: string;
    LookupId: string;
    RelatedListDefinition: RelatedListDefinition;
    RelatedListDefinitionId: string;
}