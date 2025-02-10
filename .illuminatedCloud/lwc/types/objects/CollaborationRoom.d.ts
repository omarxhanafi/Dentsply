// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationRoom extends SObject 
{
    /**
     * The reciprocal relationship for {@link Swarm.CollaborationRoomId}.
     */
    CollaborationRoom: Swarm;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsArchived: boolean;
    IsAutoJoin: boolean;
    IsDeleted: boolean;
    IsExternal: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    PlatformKey: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TeamKey: string;
}