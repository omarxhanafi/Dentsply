// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConvIntelligenceSignalRule extends SObject 
{
    ActionType: string;
    ActionValue: string;
    ConversationChannel: SObject;
    ConversationChannelId: string;
    ConvIntelligenceSignalRule: ConvIntelligenceSignalSubRule;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Criteria: string;
    DeveloperName: string;
    IsActive: boolean;
    IsDeleted: boolean;
    Label: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ParticipantRole: string;
    Service: string;
    SystemModstamp: string;
}