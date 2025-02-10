// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationContextEntry extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    ConversationContextEntryName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    CustomDetailContextKey: string;
    CustomDetailContextValue: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: LiveChatTranscript;
    ParentId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}