// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserAccountTeamMember extends SObject 
{
    AccountAccessLevel?: string;
    CaseAccessLevel?: string;
    ContactAccessLevel?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OpportunityAccessLevel?: string;
    Owner?: User;
    OwnerId?: string;
    SystemModstamp?: string;
    TeamMemberRole?: string;
    User?: User;
    UserId?: string;
}