// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Skill extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    LiveChatTrancriptSkills?: LiveChatTranscriptSkill[];
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.SkillId}.
     */
    LiveChatTranscripts?: LiveChatTranscript[];
    MasterLabel?: string;
    MessagingChannelSkills?: MessagingChannelSkill[];
    ReferenceRecord?: CallCenterRoutingMap;
    /**
     * The reciprocal relationship for {@link ServiceResourceSkill.SkillId}.
     */
    ServiceResources?: ServiceResourceSkill[];
    Skill?: AgentWorkSkill;
    /**
     * The reciprocal relationship for {@link SkillRequirement.SkillId}.
     */
    SkillRequirements?: SkillRequirement[];
    SupervisorDefaultSkill?: LiveChatUserConfig;
    SystemModstamp?: string;
    Type?: SkillType;
    TypeId?: string;
}