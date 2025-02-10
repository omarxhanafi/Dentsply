// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillOrdItemQtyChgEvent extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    FulfillmentOrderLineItem: FulfillmentOrderLineItem;
    FulfillmentOrderLineItemId: string;
    NewQuantity: number;
    OldQuantity: number;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
}