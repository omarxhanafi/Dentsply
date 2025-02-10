// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetTokenEvent extends SObject 
{
    ActorTokenPayload: string;
    Asset: Asset;
    AssetId: string;
    AssetName: string;
    AssetSerialNumber: string;
    ConnectedApp: ConnectedApplication;
    ConnectedAppId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeviceId: string;
    DeviceKey: string;
    EventUuid: string;
    Expiration: string;
    ExternalClientApplication: ExternalClientApplication;
    ExternalClientApplicationId: string;
    Name: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
    User: User;
    UserId: string;
}