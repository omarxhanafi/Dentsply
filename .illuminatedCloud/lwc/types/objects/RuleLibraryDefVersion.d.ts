// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RuleLibraryDefVersion extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    RuleLibraryDefinition?: RuleLibraryDefinition;
    RuleLibraryDefinitionId?: string;
    RuleLibraryVersions?: RuleLibraryVersion[];
    SystemModstamp?: string;
}