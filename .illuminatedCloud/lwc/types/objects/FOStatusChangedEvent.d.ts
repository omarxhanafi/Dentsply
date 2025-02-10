// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FOStatusChangedEvent extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    FulfillmentOrder: FulfillmentOrder;
    FulfillmentOrderId: string;
    NewStatus: string;
    NewStatusCategory: string;
    OldStatus: string;
    OldStatusCategory: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
}