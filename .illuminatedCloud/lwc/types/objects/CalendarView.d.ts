// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CalendarView extends SObject 
{
    Color: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DateHandlingType: string;
    DisplayField: string;
    EndField: string;
    FillPattern: string;
    IsDeleted: boolean;
    IsDisplayed: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ListViewFilter: ListView;
    ListViewFilterId: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    Publisher: SObject;
    PublisherId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: CalendarViewShare[];
    StartField: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}