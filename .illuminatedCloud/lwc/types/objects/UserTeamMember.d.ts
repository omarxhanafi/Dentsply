// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserTeamMember extends SObject 
{
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