// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateJobDefinition extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DuplicateJobMatchingRuleDefinitions?: DuplicateJobMatchingRuleDefinition[];
    DuplicateJobs?: DuplicateJob[];
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    SobjectSubtype?: string;
    SystemModstamp?: string;
}