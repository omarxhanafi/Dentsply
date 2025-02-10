// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListEmailRecipientSource extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ListEmail: ListEmail;
    ListEmailId: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    SourceList: SObject;
    SourceListId: string;
    SourceType: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}