// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniTrackingEvent extends SObject 
{
    ActionContainerName: string;
    ComponentType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventName: string;
    EventPayload: string;
    EventUuid: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
    Timestamp: string;
    TrackingCategory: string;
    TrackingGroup: string;
}