// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface InstalledMobileApp extends SObject 
{
    ConnectedApplication: ConnectedApplication;
    ConnectedApplicationId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    Status: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    User: User;
    UserId: string;
    Version: string;
}