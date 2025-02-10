// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkModeration extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Entity: SObject;
    EntityId: string;
    ModerationType: string;
    Network: Network;
    NetworkId: string;
    Note: string;
    Visibility: string;
}