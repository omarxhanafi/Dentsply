// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ManagedContentChannel extends SObject 
{
    CacheControlMaxAge?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Domain?: string;
    DomainHostName?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MediaCacheControlMaxAge?: number;
    Name?: string;
    OptionsIsCacheControlPublic?: boolean;
    OptionsIsDomainLocked?: boolean;
    OptionsIsSearchable?: boolean;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
}