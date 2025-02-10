// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AnlytDataAssetUsageEvent extends SObject 
{
    Action: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DataAsset: string;
    DataAssetType: string;
    EventDate: string;
    EventUuid: string;
    ReplayId: string;
    Source: string;
    SourceEvent: AsyncOperationEvent;
    UserIdentifier: string;
}