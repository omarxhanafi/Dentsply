// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MessagingDeliveryError extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CorrelationIdentifier?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DestinationPhoneNumber?: string;
    FailureReason?: string;
    FlowEntity?: string;
    FullMessage?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MessagingChannel?: MessagingChannel;
    MessagingChannelId?: string;
    MessagingEndUser?: MessagingEndUser;
    MessagingEndUserId?: string;
    MessagingTemplate?: MessagingTemplate;
    MessagingTemplateId?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
}