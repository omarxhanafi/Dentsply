// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BriefcaseDefinition extends SObject 
{
    Briefcase?: BriefcaseAssignmentChangeEvent;
    BriefcaseRules?: BriefcaseRule[];
    Briefcases?: BriefcaseAssignment[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    SystemModstamp?: string;
}