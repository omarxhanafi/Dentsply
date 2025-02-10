// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationParticipant extends SObject 
{
    AppType: string;
    ContextParamMaps: ContextParamMap[];
    ContextRecord: FlowExecutionErrorEvent;
    Conversation: Conversation;
    ConversationId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    JoinedTime: string;
    LastActiveTime: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LeftTime: string;
    Name: string;
    ParticipantContext: string;
    ParticipantDisplayName: string;
    ParticipantEntity: SObject;
    ParticipantEntityId: string;
    ParticipantKey: string;
    ParticipantRole: string;
    RelatedRecord: FlowRecordRelation;
}