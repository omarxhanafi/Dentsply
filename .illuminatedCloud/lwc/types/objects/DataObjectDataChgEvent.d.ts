// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataObjectDataChgEvent extends SObject 
{
    ActionDeveloperName?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventCreationDateTime?: string;
    EventPrompt?: string;
    EventPublishDateTime?: string;
    EventSchemaVersion?: string;
    EventType?: string;
    EventUuid?: string;
    Offset?: string;
    PayloadCurrentValue?: string;
    PayloadMetadata?: string;
    PayloadPrevValue?: string;
    PayloadSchema?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceObjectDeveloperName?: string;
}