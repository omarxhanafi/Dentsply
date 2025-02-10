// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TopicUserEvent extends SObject 
{
    ActionEnum: string;
    CreatedDate: string;
    Network: Network;
    NetworkId: string;
    Topic: Topic;
    TopicId: string;
    User: SObject;
    UserId: string;
}