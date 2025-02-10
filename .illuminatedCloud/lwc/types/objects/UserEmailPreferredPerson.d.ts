// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserEmailPreferredPerson extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Email: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    PersonRecord: SObject;
    PersonRecordId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: UserEmailPreferredPersonShare[];
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}