// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkActivityAudit extends SObject 
{
    Action: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    Entity: SObject;
    EntityCreatedBy: User;
    EntityCreatedById: string;
    EntityId: string;
    EntityType: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Network: Network;
    NetworkId: string;
    ParentEntity: SObject;
    ParentEntityId: string;
    ParentEntityType: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}