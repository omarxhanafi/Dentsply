// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SkillRequirementChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsAdditionalSkill: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    RelatedRecord: SObject;
    RelatedRecordId: string;
    ReplayId: string;
    Skill: Skill;
    SkillId: string;
    SkillLevel: number;
    SkillNumber: string;
    SkillPriority: number;
}