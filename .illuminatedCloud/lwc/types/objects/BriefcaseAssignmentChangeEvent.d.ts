// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BriefcaseAssignmentChangeEvent extends SObject 
{
    Briefcase: BriefcaseDefinition;
    BriefcaseId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ReplayId: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}