// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TimelineObjectDefinition extends SObject 
{
    BaseObject: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Definition: string;
    DeveloperName: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: TimelineObjectDefinitionLocalization[];
    MasterLabel: string;
    NamespacePrefix: string;
    SystemModstamp: string;
}