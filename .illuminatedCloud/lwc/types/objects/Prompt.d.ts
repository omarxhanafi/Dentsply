// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Prompt extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: PromptLocalization[];
    MasterLabel: string;
    NamespacePrefix: string;
    Parent: PromptVersion;
    SystemModstamp: string;
}