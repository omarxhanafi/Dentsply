// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TopicAssignment extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Entity: SObject;
    EntityId: string;
    EntityKeyPrefix: string;
    EntityType: string;
    IsDeleted: boolean;
    Network: Network;
    NetworkId: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    Topic: Topic;
    TopicId: string;
}