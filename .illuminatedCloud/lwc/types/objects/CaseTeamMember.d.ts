// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseTeamMember extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Member: SObject;
    MemberId: string;
    Parent: Case;
    ParentId: string;
    SystemModstamp: string;
    TeamRole: CaseTeamRole;
    TeamRoleId: string;
    TeamTemplate: CaseTeamTemplate;
    TeamTemplateId: string;
    TeamTemplateMember: CaseTeamTemplateMember;
    TeamTemplateMemberId: string;
}