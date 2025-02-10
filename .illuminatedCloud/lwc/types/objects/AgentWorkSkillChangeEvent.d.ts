// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AgentWorkSkillChangeEvent extends SObject 
{
    AgentWork: AgentWork;
    AgentWorkId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsAdditionalSkill: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    Skill: Skill;
    SkillId: string;
    SkillLevel: number;
    SkillPriority: number;
    WasDropped: boolean;
}