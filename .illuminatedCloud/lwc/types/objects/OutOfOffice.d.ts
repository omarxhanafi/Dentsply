// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OutOfOffice extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EndDate: string;
    IsDeleted: boolean;
    IsEnabled: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Message: string;
    RelatedRecord: FlowRecordRelation;
    StartDate: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    User: User;
    UserId: string;
}