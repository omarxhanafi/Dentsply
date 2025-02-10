// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RuleLibraryDefinition extends SObject 
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
    MasterLabel: string;
    RuleLibraries: RuleLibrary[];
    RuleLibrary: string;
    RuleLibraryDefinition: RuleLibraryDefVersion;
    SystemModstamp: string;
}