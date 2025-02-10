// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConvMessageSendRequest extends SObject 
{
    AllowExistingSessionStatus: string;
    CommSubscription: CommSubscription;
    CommSubscriptionId: string;
    CompletedDate: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FailedMessageCount: number;
    FailedMessageErrorReasons: string;
    FailedMessageIdentifiers: string;
    InProgressMessageCount: number;
    InProgressMessageIdentifiers: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MessageDefinition: string;
    Name: string;
    PendingMessageCount: number;
    PendingMessageIdentifiers: string;
    RelatedRecord: FlowRecordRelation;
    RequestConsentType: string;
    RequestStatus: string;
    RequestType: string;
    ShouldEnforceChannelConsent: boolean;
    SuccessMessageCount: number;
    SuccessMessageIdentifiers: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TotalMessageCount: number;
}