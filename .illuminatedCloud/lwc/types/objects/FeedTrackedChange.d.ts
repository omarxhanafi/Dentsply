// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedTrackedChange extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CurrencyIsoCode: string;
    FeedItem: SObject;
    FeedItemId: string;
    FieldName: string;
    NewValue: any;
    OldCurrencyIsoCode: string;
    OldValue: any;
    RelatedRecord: FlowRecordRelation;
}