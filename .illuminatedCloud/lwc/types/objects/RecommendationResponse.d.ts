// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecommendationResponse extends SObject 
{
    ActionReference?: string;
    ContextRecord?: string;
    ContextRecordName?: string;
    ContextRecordType?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Network?: Network;
    NetworkId?: string;
    OnBehalfOf?: string;
    OnBehalfOfName?: string;
    OnBehalfOfType?: string;
    RecommendationKey?: string;
    RecommendationName?: string;
    RecommendationType?: string;
    RelatedRecord?: FlowRecordRelation;
    Response?: string;
    StrategyReference?: string;
    StrategyVersion?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}