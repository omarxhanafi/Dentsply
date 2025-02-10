// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PendingServiceRoutingInteractionInfo extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsDeleted: boolean;
    IsFocused: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    PendingServiceRouting: PendingServiceRouting;
    PendingServiceRoutingId: string;
    PrimaryRecord: SObject;
    PrimaryRecordId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetFlowName: string;
    TargetObject: SObject;
    TargetObjectId: string;
}