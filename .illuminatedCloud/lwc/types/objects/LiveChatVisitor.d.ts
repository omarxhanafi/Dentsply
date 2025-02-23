// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatVisitor extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.LiveChatVisitorId}.
     */
    LiveChatTranscripts?: LiveChatTranscript[];
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.LiveChatVisitorId}.
     */
    LiveChatVisitor?: LiveChatTranscript;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SessionKey?: string;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}