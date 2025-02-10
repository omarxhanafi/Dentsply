// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Conversation extends SObject 
{
    ContextParamMaps: ContextParamMap[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * The reciprocal relationship for {@link MessagingSession.ConversationId}.
     */
    Conversation: MessagingSession;
    ConversationChannel: SObject;
    ConversationChannelId: string;
    ConversationIdentifier: string;
    ConversationParticipants: ConversationParticipant[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EndTime: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    StartTime: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}