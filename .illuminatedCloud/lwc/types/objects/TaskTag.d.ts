// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskTag extends SObject 
{
    CreatedDate: string;
    IsDeleted: boolean;
    Item: Task;
    ItemId: string;
    Name: string;
    SystemModstamp: string;
    TagDefinition: TagDefinition;
    TagDefinitionId: string;
    Type: string;
}