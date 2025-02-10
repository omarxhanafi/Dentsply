// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventRelayFeedback extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    ErrorCode: string;
    ErrorIdentifier: string;
    ErrorMessage: string;
    ErrorTime: string;
    EventRelayConfig: EventRelayConfig;
    EventRelayConfigId: string;
    EventRelayNumber: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastRelayedEventTime: string;
    RelatedRecord: FlowRecordRelation;
    RemoteResource: string;
    Status: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    UsageType: string;
}